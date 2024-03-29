import { useState } from 'react';
import { Link } from 'react-router-dom';
import hambuger from '../../assets/images/hamburger.png';
import searchIcon from '../../assets/images/search-icon.png';
import './Navbar.css';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div className="logo-section">
        <Link to="/GoForIT" className="nav-link nav-logo">
          Go
          <span>ForIt</span>
        </Link>
      </div>
      <div className="search-block">
        <input type="text" placeholder="search for rooms or homes..." />
        <img src={searchIcon} alt="search-icon" />
      </div>

      <img
        className="hamburger"
        onClick={handleToggle}
        src={hambuger}
        alt="hamburger"
      />

      <ul className={!showMenu ? 'nav-list' : 'show'}>
        <li>
          <Link className="nav-link" to="/GoForIT">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/hotel-rooms">
            Rooms
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login/SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
