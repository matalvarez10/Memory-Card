export async function fetchPokemon(id:number) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });
  return data.json();
}

export function getRandomInt() {
    return Math.floor(Math.random() * 800) + 1;
  }