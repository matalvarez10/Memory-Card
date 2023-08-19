import { PokemonCardProps } from "../interfaces/pokemonData.interface";
import img from "../assets/pkmn-back.jpg" 
import React from 'react';
import Tilt from 'react-parallax-tilt';

const PokemonCard: React.FC<PokemonCardProps> = ({
  handleCardClick,
  indiVidualPokemonData,
  isTransitionActive,
  isAnimationFinished
}) => {
  return (
    <>
        <Tilt >
          <article
            className={
              "cursor-pointer rounded-md h-[270px] w-[200px] [transform-style:preserve-3d] transition-all duration-[0.7s] ease-in " +
              `${isTransitionActive ? "[transform:rotateY(180deg)]" : ""}` +
              `${isAnimationFinished ? " pointer-events-none" : ""}`
            }
            onClick={() => {
              handleCardClick(
                indiVidualPokemonData.clicked,
                indiVidualPokemonData.id
              );
            }}
          >
            <div className= " bg-black backdrop-blur-sm bg-opacity-30 rounded-md absolute w-full h-full [backface-visibility:hidden] border-gray-400 border ">
              <img src={indiVidualPokemonData.imgUrl} alt="" className=" h-4/5 rounded-md"  />
              <p className="font-pixel text-xl text-purple-400 font-bold first-letter:uppercase text-center">{indiVidualPokemonData.name}</p>
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img src={img} alt="" className="object-cover h-full rounded-md"/>
            </div>
          </article>
        </Tilt>

    </>
  );
};

export default PokemonCard;
