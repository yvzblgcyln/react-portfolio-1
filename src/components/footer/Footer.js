import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} style={{ cursor: "pointer" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} style={{ cursor: "pointer" }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} style={{ cursor: "pointer" }}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="demo" spy={true} smooth={true} offset={-100} duration={500} style={{ cursor: "pointer" }}>
              Demo
            </Link>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2020 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
