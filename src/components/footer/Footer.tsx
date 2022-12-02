import "./Footer.css";
import { Link } from "react-router-dom";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2>
              <Link className="footer-heading" to="#">
                Vacation Hotel
              </Link>
            </h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <Link id="read_more" to="#">
              Read More
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2>
              <Link className="footer-heading" to="#">
                Services
              </Link>
            </h2>
            <ul className="services-list">
              <li>
                <Link className="service-list-links" to="#">
                  Map Direction
                </Link>
              </li>
              <li>
                <Link className="service-list-links" to="#">
                  Accomodation Service
                </Link>
              </li>
              <li>
                <Link className="service-list-links" to="#">
                  Great Experience
                </Link>
              </li>
              <li>
                <Link className="service-list-links" to="#">
                  Perfect Central Location
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2>
              <Link className="footer-heading" to="#">
                Tag Cloud
              </Link>
            </h2>
            <div className="tag-cloud">
              <Link to="" className="tag-cloud-link">FIVE STAR HOTELS</Link>
              <Link to="" className="tag-cloud-link">VEG RESTAURANTS</Link>
              <Link to="" className="tag-cloud-link">NON-VEG RESTAURANTS</Link>
              <Link to="" className="tag-cloud-link">LOW BUDGET HOTELS</Link>
              <Link to="" className="tag-cloud-link">ROOF TOP RESTAURANTS</Link>
              <Link to="" className="tag-cloud-link">DHABA</Link>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
          <h2>
              <Link className="footer-heading" to="#">
                Subscribe
              </Link>
            </h2>
            <form action="#" className="subscribe-form">
                <div className="form-group">
                    <input className="form-control rounded-left" type="text" placeholder="Enter email address" />
                    <button className="form-control submit rounded-right" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
          <h2 className="mt-5">
              <Link className="footer-heading " to="#">
                Follow Us
              </Link>
            </h2>
                <ul className="social-icon-liststyled">
                    <li><FontAwesomeIcon className="social-footer-link" icon={faTwitter}/></li>
                    <li><FontAwesomeIcon className="social-footer-link" icon={faFacebook}/></li>
                    <li><FontAwesomeIcon className="social-footer-link" icon={faInstagram}/></li>
                </ul>
          </div>


        </div>
      </div>


      <div className="mt-5 border-top">
        <div className="container-footer">
            <div className="row">
                <div className="col-md-6 col-lg-8">
                    <p>Copyright ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        2022 All Right Reserved
                    </p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
