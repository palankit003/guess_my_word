import { Link } from "react-router-dom";
import Styles from "./CreateGame.module.css";
import { FC, useState } from "react";
interface CreateGameProps {
  sendDataToParent: (data: string) => void;
}
const CreateGame: FC<CreateGameProps> = ({ sendDataToParent }) => {
  const [word, setWord] = useState("");
  const handleWord = (event: any) => {
    setWord(event.target.value);
    console.log(event.target.value);
  };

  const sendData = () => {
    sendDataToParent(word);
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
          <button className={Styles.btn} onClick={sendData}>
            Create Game
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
