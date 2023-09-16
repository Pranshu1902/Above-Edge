import { Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="w-full min-h-screen p-3 bg-[#D5E1FD] text-black flex flex-col justify-center items-center">
      <div className="p-4">
        <Home />
      </div>
      <Link
        to={"/form"}
        className="bg-blue-500 hover:bg-blue-700 rounded-xl p-3 text-white font-bold px-16 shadow"
      >
        Form
      </Link>
    </div>
  );
}

export default App;
