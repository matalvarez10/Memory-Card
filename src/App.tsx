import { getRandomInt, fetchPokemon } from "./utils/fetchPokemon";
import { IPokemonData } from "./interfaces/pokemonData.interface";
import { useState, useEffect } from "react";
import pokemonWallpaper from "./assets/pkmn-background.jpg";
import AllPokemonContainer from "./components/allPokemonContainer";
import HeaderComponent from "./components/headerComponent";
import ScoreBoard from "./components/scoreBoard";

const backgroundImg = pokemonWallpaper;
function App() {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [isTransitionActive, setTransitionActive] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const allPokemonPromises = [];
    for (let index = 0; index < 8; index++) {
      let pkmnId = getRandomInt();
      // geting 10 numbers that are not repeated
      if (pokemonData.length > 0) {
        while (pokemonData.some((element) => element.id === pkmnId)) {
          pkmnId = getRandomInt();
        }
      }
      allPokemonPromises.push(fetchPokemon(pkmnId));
    }
    Promise.all(allPokemonPromises).then((values) => {
      const auxPokemonData: IPokemonData[] = values.map((pokemon) => {
        return {
          id: pokemon.id,
          imgUrl: pokemon.sprites.other["official-artwork"].front_default,
          name: pokemon.name,
          clicked: false,
        };
      });
      setPokemonData(auxPokemonData);
    });
  }, []);

  const handleCardClick = (isClicked: boolean, id: number) => {
    setIsAnimationActive(true);
    setTransitionActive(!isTransitionActive);
    setTimeout(() => {
      setPokemonData((previousData) => [
        ...previousData.sort(() => Math.random() - 0.5),
      ]);
      if (isClicked) {
        setCounter(0);
        setPokemonData((previousData) => {
          return [
            ...previousData.map((pokemon) => ({ ...pokemon, clicked: false })),
          ];
        });
      } else {
        setCounter(counter + 1);
        setPokemonData((previousData) => {
          return [
            ...previousData.map((pokemon) =>
              pokemon.id == id ? { ...pokemon, clicked: true } : pokemon
            ),
          ];
        });
      }
      setTransitionActive(false);
      setTimeout(() => {
        setIsAnimationActive(false);
      }, 700);
    }, 700);
  };

  return (
    <main
      className="h-screen w-full bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className={
          "text-white text-6xl border h-full w-full border-white absolute z-50 flex justify-center items-center bg-opacity-50 bg-black " +
          `${modalActive ? "" : "invisible"}`
        }
      >
        <p>MODAL AQUI</p>
      </div>
      <HeaderComponent />
      <ScoreBoard score={counter} maxScore={8} />
      <AllPokemonContainer
        handleCardClick={handleCardClick}
        allPokemonData={pokemonData}
        isTransitionActive={isTransitionActive}
        isAnimationFinished={isAnimationActive}
      />
    </main>
  );
}

export default App;
