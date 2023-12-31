import { getRandomInt, fetchPokemon } from "./utils/fetchPokemon";
import { IPokemonData } from "./interfaces/pokemonData.interface";
import { useState, useEffect } from "react";
import pokemonWallpaper from "./assets/pkmn-background.jpg";
import AllPokemonContainer from "./components/allPokemonContainer";
import HeaderComponent from "./components/headerComponent";
import ScoreBoard from "./components/scoreBoard";
import GameOverComponent from "./components/gameOver";
import LoadingComponent from "./components/loadingComponent";
/* localStorage.setItem("localMaxScore", String(0)); */
// utility constants
const backgroundImg = pokemonWallpaper;
const numberCards = 10;
const initialLocalMaxScore = Number(localStorage.getItem("localMaxScore"));
let modalText = "";
function App() {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [localMaxScore, setLocalMaxScore] =
    useState<number>(initialLocalMaxScore);
  const [isTransitionActive, setTransitionActive] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (counter === numberCards) {
      modalText = "You WON!!";
      setModalActive(true);
    }
  }, [counter]);

  useEffect(() => {
    setLoading(true);
    const allPokemonPromises = [];
    for (let index = 0; index < numberCards; index++) {
      let pkmnId = getRandomInt();
      // geting 10 numbers that are not repeated
      if (pokemonData.length > 0) {
        while (pokemonData.some((element) => element.id === pkmnId)) {
          pkmnId = getRandomInt();
        }
      }
      allPokemonPromises.push(fetchPokemon(pkmnId));
    }
    Promise.all(allPokemonPromises)
      .then((values) => {
        const auxPokemonData: IPokemonData[] = values.map((pokemon) => {
          return {
            id: pokemon.id,
            imgUrl: pokemon.sprites.other["official-artwork"].front_default,
            name: pokemon.name.replace("-", " "),
            clicked: false,
          };
        });
        setPokemonData(auxPokemonData);
        setTimeout(() => {
          setLoading(false);
        }, 1200);
        
      })
  }, []);

  useEffect(() => {
    if (counter > localMaxScore) {
      localStorage.setItem("localMaxScore", String(counter));
      setLocalMaxScore(counter);
    }
  }, [counter]);

  const handleCardClick = (isClicked: boolean, id: number) => {
    setIsAnimationActive(true);
    setTransitionActive(!isTransitionActive);
    if (isClicked) {
      modalText = "Game Over!";
      setModalActive(true);
      return;
    }
    setTimeout(() => {
      setPokemonData((previousData) => [
        ...previousData.sort(() => Math.random() - 0.5),
      ]);

      setCounter(counter + 1);

      setPokemonData((previousData) => {
        return [
          ...previousData.map((pokemon) =>
            pokemon.id == id ? { ...pokemon, clicked: true } : pokemon
          ),
        ];
      });
      setTransitionActive(false);
      setTimeout(() => {
        setIsAnimationActive(false);
      }, 700);
    }, 700);
  };

  const handleModalClick = () => {
    location.reload();
  };

  return (
    <main
      className="h-screen w-full bg-cover bg-no-repeat bg-center bg-fixed max-w-[100vw] overflow-y-auto-auto overflow-x-hidden "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {loading ? <LoadingComponent/> : (
      <>
        <div
          className={
            "h-full w-full absolute z-50 flex justify-center items-center bg-opacity-50 bg-black " +
            `${modalActive ? "" : "invisible"}`
          }
        >
          <GameOverComponent
            handleModalClick={handleModalClick}
            modalText={modalText}
            score={counter}
          />
        </div>
        <HeaderComponent />
        <ScoreBoard score={counter} maxScore={localMaxScore} />
        <p className="font-pixel text-xl text-white text-center font-bold px-5">
          Dont click the same card Twice to Win!
        </p>
        
          <AllPokemonContainer
            handleCardClick={handleCardClick}
            allPokemonData={pokemonData}
            isTransitionActive={isTransitionActive}
            isAnimationFinished={isAnimationActive}
          />
      </>
      )}
    </main>
  );
}

export default App;
