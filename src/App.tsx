import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateGame from "./pages/CreateGame/CreateGame";
import Navbar from "./components/Navbar/Navbar";
import Game from "./pages/Game/Game";
import { useState } from "react";
function App() {
  const [word, setWord] = useState("");
  const handleDataFromChild = (data: string) => {
    setWord(data);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createGame"
          element={<CreateGame sendDataToParent={handleDataFromChild} />}
        ></Route>
        <Route path="/game" element={<Game word={word} />}></Route>
      </Routes>
    </>
  );
}

export default App;
