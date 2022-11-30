import "./Header.css";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header>
      <div className="contact-details">
        <p className="mailus">
          <span>Phone No: </span>
          <a href="#" className="special-letter">+918854082108</a>
            &nbsp;or&nbsp;
          <span>email us: </span>
          <a className="special-letter" href="#">help-desk@goforit.com</a>
        </p>
      </div>
      <div className="social-icons">
        <a href="#">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </header>
  );
}

export default Header;
