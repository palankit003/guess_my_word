import { Link } from "react-router-dom";
import Styles from "./CreateGame.module.css";
import { useState } from "react";
const CreateGame = () => {
  const [word, setWord] = useState("");
  const handleWord = (event: any) => {
    setWord(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <main className={Styles.mainContainer}>
        <textarea
          placeholder="Write you words"
          value={word}
          onChange={handleWord}
        ></textarea>
        <Link to="/game">
          <button className={Styles.btn}>Create Game</button>
        </Link>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </main>
    </>
  );
};
export default CreateGame;
