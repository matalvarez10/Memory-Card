import { SiPokemon } from "react-icons/si";
const HeaderComponent = () => {
    return (  
        <header className="border-white flex gap-4 justify-center items-center h-16 font-pixel w-screen text-gray-100 text-5xl">
            <SiPokemon size={"200px"}className="text-gray-800"/>
            <p className="text-center mt-4">Card Game</p>
        </header>
    );
}
 
export default HeaderComponent;