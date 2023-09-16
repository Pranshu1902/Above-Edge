import { Link } from "react-router-dom";
import background from "./assets/background.png";
import Home from "./Components/Home";

function App() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden p-3 bg-[#D5DEFC] text-black flex flex-col justify-center items-center">
      <img
        src={background}
        alt="background"
        className="w-full h-full object-cover absolute"
      />
      <div className="p-4 z-10">
        <Home />
      </div>
      <Link
        to={"/form"}
        className="z-10 bg-blue-500 hover:bg-blue-700 rounded-xl p-3 text-white font-bold px-16 shadow-lg tranition duration-300"
      >
        Form
      </Link>
    </div>
  );
}

export default App;
