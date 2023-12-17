import { Link } from "react-router-dom";
import Styles from "./CreateGame.module.css";
import { FC, useEffect, useState } from "react";
import axios from "axios";
interface CreateGameProps {
  sendDataToParent: (data: string) => void;
}
const CreateGame: FC<CreateGameProps> = ({ sendDataToParent }) => {
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    const fetchRandomWord = async () => {
      try {
        const response = await axios.get(
          "https://random-word-api.vercel.app/api?words=1"
        );
        setRandomWord(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRandomWord();
  }, []);
  const [word, setWord] = useState("");
  const handleWord = (event: any) => {
    setWord(event.target.value);
  };

  const sendData = () => {
    if (!word) {
      alert("Please Fill Data");
    }
    sendDataToParent(word);
  };
  const sendDataForComputer = () => {
    sendDataToParent(randomWord);
  };
  return (
    <>
      <main className={Styles.mainContainer}>
        <textarea
          placeholder="Write you words"
          value={word}
          onChange={handleWord}
          className={Styles.box}
        ></textarea>
        <Link to="/game">
          <button className={Styles.btn} onClick={sendData}>
            Create Game
          </button>
        </Link>
        <Link to="/game">
          <button className={Styles.btn} onClick={sendDataForComputer}>
            Play Against Computer
          </button>
        </Link>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </main>
    </>
  );
};
export default CreateGame;
