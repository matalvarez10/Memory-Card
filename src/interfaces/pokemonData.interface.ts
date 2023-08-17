export interface IPokemonData{
    id: number;
    name:string;
    imgUrl: string;
    clicked:boolean;

}

export interface AllPokemonProps {
    handleCardClick: (isClicked: boolean, id: number) => void;
    allPokemonData: IPokemonData[];
    isTransitionActive:boolean;
    
  }
export interface PokemonCardProps{
    handleCardClick: (isClicked: boolean, id: number) => void;
    indiVidualPokemonData: IPokemonData;
    isTransitionActive:boolean;
  }