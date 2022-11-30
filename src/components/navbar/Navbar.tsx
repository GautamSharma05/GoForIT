import "./Navbar.css";
import searchIcon from "../../assets/images/search-icon.png";
import hambuger from "../../assets/images/hamburger.png";
import { useState } from "react";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container">
      <div className="logo-section">
        <a href="#">Go
        <span>ForIt</span>
        </a>
        
        <div className="search-block">
          <input type="text" placeholder="search for rooms or homes..." />
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>

      <img className="hamburger" onClick={handleToggle} src={hambuger} alt="hamburger" />
      <ul className={!showMenu ? "nav-list" : "show"}>
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#"> Services</a>
        </li>
        <li>
          <a href="#"> Apartment Room</a>
        </li>
        <li>
          <a href="#"> Blog</a>
        </li>
        <li>
          <a href="#"> Contact</a>
        </li>
        <li>
          <a href="#"> Login/SignUp</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
