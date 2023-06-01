import { Link } from "react-router-dom";
import Styles from "./Home.module.css";
function Home() {
  return (
    <>
      <main className={Styles.mainContainer}>
        <Link to="/createGame">
          <button className={Styles.btn}>Create a Game</button>
        </Link>
        <button className={Styles.btn}>Play against computer</button>
      </main>
    </>
  );
}

export default Home;
