import "./Header.css";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header>
      <div className="contact-details">
        <p className="mailus">
          <span>Phone No: </span>
          <a href="tel:+918854082108" className="special-letter">+918854082108</a>
            &nbsp;or&nbsp;
          <span>email us: </span>
          <a className="special-letter" href="mailto: help-desk@goforit.com">help-desk@goforit.com</a>
        </p>
      </div>
      <div className="social-icons">
        <Link to="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="https://twitter.com/i/flow/login">
        <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
