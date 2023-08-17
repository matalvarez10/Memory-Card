import { getRandomInt, fetchPokemon } from "./utils/fetchPokemon";
import { IPokemonData } from "./interfaces/pokemonData.interface";
import { useState, useEffect } from "react";
import AllPokemonContainer from "./components/allPokemonContainer";

function App() {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [isTransitionActive, setTransitionActive] = useState(false);

console.log(isTransitionActive);
  useEffect(() => {
    const allPokemonPromises = [];
    for (let index = 0; index < 10; index++) {
      let pkmnId = getRandomInt(600);
      // geting 10 numbers that are not repeated
      if (pokemonData.length > 0) {
        while (pokemonData.some((element) => element.id == pkmnId)) {
          pkmnId = getRandomInt(600);
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
    setTransitionActive(!isTransitionActive);
    setTimeout(() => {
        setTransitionActive(false);
        setPokemonData((previousData) => [
          ...previousData.sort(() => Math.random() - 0.5),
        ]);
        if (isClicked) {
          setCounter(0);
          setPokemonData((previousData) => {
            return [
              ...previousData.map((pokemon) =>
                pokemon.id == id ? { ...pokemon, clicked: false } : pokemon
              ),
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
      }, 300);

  };

  return (
    <>
      <p>{counter}</p>
      <AllPokemonContainer
        handleCardClick={handleCardClick}
        allPokemonData={pokemonData}
        isTransitionActive={isTransitionActive}
      />
    </>
  );
}

export default App;
