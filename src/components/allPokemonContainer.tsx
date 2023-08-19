import { AllPokemonProps } from "../interfaces/pokemonData.interface";
import PokemonCard from "./pokemonCard";
const AllPokemonContainer: React.FC<AllPokemonProps> = ({
  handleCardClick,
  allPokemonData: pokemonData,
  isTransitionActive,
  isAnimationFinished,
}) => {
  return (
    <section className="p-2 overflow-auto mx-auto my-5 grid gap-y-4 gap-x-0 justify-items-center w-[100%] grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 2xl:w-[70%] 2xl:grid-cols-5 ">
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
