import { NavLink } from "react-router-dom";
import { AtSign, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import logo from "../../assets/Logo.png";
import "./Footer.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Kayo International Preschool" className="footer__logo" />
          <p>
            A warm, stimulating home for children aged 6 months to 12 years in Perungudi,
            Chennai &mdash; trusted by 1,000+ families for over a decade.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <MessageSquare size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <AtSign size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Programmes</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>

        <div className="footer__col">
          <h4>Programmes</h4>
          {PROGRAMMES.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>

        <div className="footer__col footer__contact">
          <h4>Visit Us</h4>
          <span>
            <MapPin size={17} strokeWidth={1.8} />
            Perungudi, Chennai OMR, Tamil Nadu
          </span>
          <a href="tel:+919884004650">
            <Phone size={17} strokeWidth={1.8} />
            +91 98840 04650
          </a>
          <a href="mailto:hello@kayointernational.in">
            <Mail size={17} strokeWidth={1.8} />
            hello@kayointernational.in
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} Kayo International Preschool &amp; DayCare. All rights reserved.</span>
          <span>Perungudi &middot; Nanmangalam &middot; Pallikaranai &middot; Palavakkam &middot; Taramani</span>
        </div>
      </div>
    </footer>
  );
}
