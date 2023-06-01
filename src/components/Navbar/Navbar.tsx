import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
function Navbar() {
  return (
    <Link to="/">
      <nav className={Style.nav}>Guess My Word</nav>
    </Link>
  );
}

export default Navbar;
