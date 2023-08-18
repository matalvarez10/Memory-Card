import { AllPokemonProps } from "../interfaces/pokemonData.interface";
import PokemonCard from "./pokemonCard";
const AllPokemonContainer: React.FC<AllPokemonProps> = ({
  handleCardClick,
  allPokemonData: pokemonData,
  isTransitionActive,
  isAnimationFinished,
}) => {
  return (
    <section className="m-auto flex flex-row gap-9 w-4/5 justify-between flex-wrap">
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
