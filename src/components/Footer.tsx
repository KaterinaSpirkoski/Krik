import { useAccessibility } from "@/contex/AccessibilityContext";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const { contrast } = useAccessibility();
  return (
    <div className="footer" id="footer">
      <div className="footer-inner" id="saturation-content">
        <div className="bilten-inner">
          <h3>
            Месечен <br />
            билтен
          </h3>
          <p className="desc-bilten">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio
            magnam officiis, accusantium optio!
          </p>
          <div className="wrapper-inputs">
            <input
              type="email"
              placeholder="Вашата Емаил Адреса"
              className="btn"
            />
            <button
              className={`btn btn-size ${
                contrast ? "contrastYellowBg " : "defaultYellowBg"
              }`}
            >
              СТА
            </button>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-us">
          <h4>Контактирај Не!</h4>

          <input
            type="text"
            placeholder="Вашето Име"
            className="btn name-input"
          />
          <input
            type="email"
            placeholder="Вашата Емаил Адреса"
            className="btn"
          />
          <button
            className={`btn btn-size ${
              contrast ? "contrastYellowBg " : "defaultYellowBg"
            }`}
          >
            СТА
          </button>
        </div>
        <div className="join-us">
          <h4>Приклучи Се</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio
            magnam officiis, accusantium optio!
          </p>
        </div>
        <div className="for-us">
          <h5>Зa Крик</h5>
          <p className="desc krik-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio
            magnam!
          </p>

          <div className="social-media">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
