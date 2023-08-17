import { AllPokemonProps } from "../interfaces/pokemonData.interface";
import PokemonCard from "./pokemonCard";
const AllPokemonContainer: React.FC<AllPokemonProps> = ({
  handleCardClick,
  allPokemonData: pokemonData,
  isTransitionActive
}) => {

    function handleclick(e){
        console.log(e.target);
        console.log("holaa")
        return false;
       }   
    
  return (
    <section className="relative grid grid-cols-5 gap-9" onClick={handleclick} >
      {pokemonData.map((pokemon) => (
        <PokemonCard handleCardClick={handleCardClick} indiVidualPokemonData={pokemon} isTransitionActive={isTransitionActive}/>
      ))}
    </section>
  );
};

export default AllPokemonContainer;
