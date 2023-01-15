import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
function Header() {
  return (
    <header>
      <div className="contact-details">
        <p className="mailus">
          <span>Phone No: </span>
          <a href="tel:+918854082108" className="special-letter">
            +918854082108
          </a>
          &nbsp;or&nbsp;
          <span>email us: </span>
          <a className="special-letter" href="mailto: help-desk@goforit.com">
            help-desk@goforit.com
          </a>
        </p>
      </div>
      <div className="social-icons">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/i/flow/login"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </header>
  );
}

export default Header;
