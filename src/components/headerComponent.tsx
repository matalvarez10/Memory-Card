import { SiPokemon } from "react-icons/si";
const HeaderComponent = () => {
    return (  
        <header className="border-white flex gap-4 justify-center items-center h-16 font-pixel w-screen text-gray-100  text-2xl md:text-5xl font-bold my-2">
                <SiPokemon size={"200px"} className="text-gray-800 h-[200px]"/>
                <p className="text-center mt-4">Card Game</p>

        </header>
    );
}
 
export default HeaderComponent;