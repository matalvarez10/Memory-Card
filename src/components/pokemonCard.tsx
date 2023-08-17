import { PokemonCardProps } from "../interfaces/pokemonData.interface";
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            0,     // max tilt rotation (degrees)
	perspective:    600,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: true,
    maxGlare: 0.5,
    
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  handleCardClick,
  indiVidualPokemonData,
  isTransitionActive
}) => {
  return (
    
    <>      

          <Tilt options={defaultOptions}>
              <article className={"bg-lime-800 h-96 w-96 [transform-style:preserve-3d] transition-all duration-[0.3s] ease-in " + `${isTransitionActive ? '[transform:rotateY(180deg)]' : ''}`} 
                onClick={() => {
                  handleCardClick(
                    indiVidualPokemonData.clicked,
                    indiVidualPokemonData.id
                  );
                }}
              >
                <div className="bg-red-900 absolute w-full h-full [backface-visibility:hidden]">
                    <img src={indiVidualPokemonData.imgUrl} alt="" className="h-52" />
                    <p>{indiVidualPokemonData.name}</p>
                </div>
                <div className="bg-blue-900 absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p>{indiVidualPokemonData.name}</p>
                    <p>{indiVidualPokemonData.name}</p>
                    <p>{indiVidualPokemonData.name}</p>
                </div>
              </article>
          </Tilt>
    </>
  );
};

export default PokemonCard;
