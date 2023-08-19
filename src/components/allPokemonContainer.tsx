import { AllPokemonProps } from "../interfaces/pokemonData.interface";
import PokemonCard from "./pokemonCard";
const AllPokemonContainer: React.FC<AllPokemonProps> = ({
  handleCardClick,
  allPokemonData: pokemonData,
  isTransitionActive,
  isAnimationFinished,
}) => {
  return (
    <section className="mx-auto m-auto grid grid-cols-4  w-3/5 gap-4 gap-x-0 justify-items-center">
      {pokemonData.map((pokemon,index) => (
        <PokemonCard
          handleCardClick={handleCardClick}
          indiVidualPokemonData={pokemon}
          isTransitionActive={isTransitionActive}
          isAnimationFinished={isAnimationFinished}
          key={index} 
        />
      ))}
    </section>
  );
};

export default AllPokemonContainer;
