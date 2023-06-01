import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateGame from "./pages/CreateGame/CreateGame";
import Navbar from "./components/Navbar/Navbar";
import Game from "./pages/Game/Game";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createGame" element={<CreateGame />}></Route>
        <Route path="/game" element={<Game word="Ankit" />}></Route>
      </Routes>
    </>
  );
}

export default App;
