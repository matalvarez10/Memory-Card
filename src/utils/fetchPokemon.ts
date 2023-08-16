export async function fetchPokemon(id:number) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });
  return data.json();
}

export function getRandomInt(max:number) {
    return Math.floor(Math.random() * max) + 1;
  }