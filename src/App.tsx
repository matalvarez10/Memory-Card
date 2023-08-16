import { getRandomInt, fetchPokemon } from "./utils/fetchPokemon";
import { IPokemonData } from "./interfaces/pokemonData.interface";
import { useState, useEffect } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [counter,setCounter] = useState<number>(0);

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
      const auxPokemonData:IPokemonData[] = values.map((pokemon) => {
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

  const handleCardClick = (isClicked:boolean,id:number) =>{
    setPokemonData((previousData)=> [...previousData.sort(() => Math.random()- 0.5)])
    if(isClicked){
      setCounter(0);
      setPokemonData((previousData)=>{
        return [...previousData.map(pokemon => pokemon.id == id ?{...pokemon,"clicked":false}:pokemon)]
      })
    }else{
      setCounter(counter + 1)
      setPokemonData((previousData)=>{
        return [...previousData.map(pokemon => pokemon.id == id ?{...pokemon,"clicked":true}:pokemon)]
      })
    }
  }
  /* console.log(po) */
  return (
    <>
      <p>{counter}</p>
      <p className="text-red-900 text-6xl">Hola</p>
      {pokemonData.map((element) => (
        <div onClick={()=>{handleCardClick(element.clicked,element.id)}}>
          <img src={element.imgUrl} alt="" />
          <p>{element.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
