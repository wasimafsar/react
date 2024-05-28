import { Link } from "react-router-dom";
import css from "./Header.module.css";
function Header() {
  const data = ["Wasim", "Rumaan"];
  return (
    <ul className={css.ul}>
      <li>
        <Link to="/">Link1</Link>
      </li>
      <li>
        <Link to="/page2">Link2</Link>
      </li>
      <li>
        <Link to="/page3">Link3</Link>
      </li>
    </ul>
  );
}

export default Header;
