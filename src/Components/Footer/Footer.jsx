import { BsTelephoneX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={footerStyle.footerSection}>
      <div className="container">
        <div className={footerStyle.footerContent}>
          <div className={footerStyle.logoSection}>
            <div className={footerStyle.logoContent}>
              <h3>Optimarko.</h3>
              <p>
                Funding freemium long tail hypotheses first mover advantage
                assets ownership niche market startup investor.
              </p>
            </div>
            <div className={footerStyle.contactWay}>
              <div className={footerStyle.mail}>
                <CiMail />
                <p>agensi@mail.com</p>
              </div>
              <div className={footerStyle.phone}>
                <BsTelephoneX />
                <p>+ 12 3456 7890</p>
              </div>
            </div>
          </div>
          <div className={footerStyle.serviceMenu}>
            <h3>Services</h3>
            <ul className={footerStyle.menuItem}>
              <li>
                <Link>Digital Marketing</Link>
              </li>
              <li>
                <Link>Branding</Link>
              </li>
              <li>
                <Link>Market Promotion</Link>
              </li>
              <li>
                <Link>Digital Campaign</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyle.companyMenu}>
            <h3>Company</h3>
            <ul className={footerStyle.menuItem}>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Our Works</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyle.addressSection}>
            <h3>Address</h3>
            <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
            <div className={footerStyle.social}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
