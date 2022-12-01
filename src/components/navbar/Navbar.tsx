import "./Navbar.css";
import searchIcon from "../../assets/images/search-icon.png";
import hambuger from "../../assets/images/hamburger.png";
import { useState } from "react";
import {Link} from 'react-router-dom';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container">
      <div className="logo-section">
        <Link className="nav-link" to="/">Go
        <span>ForIt</span>
        </Link>
        
        <div className="search-block">
          <input type="text" placeholder="search for rooms or homes..." />
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>

      <img className="hamburger" onClick={handleToggle} src={hambuger} alt="hamburger" />
      <ul className={!showMenu ? "nav-list" : "show"}>
        <li>
        <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li>
         <Link className="nav-link" to='/about'> About </Link>
        </li>
        <li>
          <Link className="nav-link" to='/services'> Services</Link>
        </li>
        <li>
          <Link className="nav-link" to="/appartment-room"> Apartment Room</Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact"> Contact</Link>
        </li>
        <li>
          <Link className="nav-link" to="/login"> Login/SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
