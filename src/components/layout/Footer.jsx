import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/Logo.png";
import FloatingShapes from "../common/FloatingShapes";
import "./Footer.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment"];

const EXPLORE = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/services", label: "Programmes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/careers", label: "Careers" },
  { to: "/contact-us", label: "Contact Us" },
];

/* Playful, parallax-aware decoration drifting behind the footer content. */
const FOOTER_SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 30, top: "30%", right: "7%", float: 10, rotate: 18, delay: 0.4 },
  { type: "ring", color: "var(--color-secondary)", size: 54, bottom: "22%", left: "5%", float: 12, delay: 0.8, opacity: 0.55 },
  { type: "squiggle", color: "var(--color-orange)", size: 64, top: "52%", right: "3%", float: 8, delay: 0.2, opacity: 0.8 },
  { type: "plus", color: "var(--color-forest)", size: 24, bottom: "34%", right: "13%", float: 12, rotate: 20 },
  { type: "dot", color: "var(--color-primary)", size: 14, top: "64%", left: "14%", float: 10, opacity: 0.5 },
];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15.5 8.5h-2c-.55 0-1 .45-1 1V12h3l-.4 3h-2.6v7h-3v-7H7.5v-3h2v-2.2C9.5 7.24 11.24 5.5 13.8 5.5h1.7v3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.3 9.5v5l4.4-2.5-4.4-2.5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="6.3" cy="6.6" r="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 10.2h3v9.3h-3v-9.3Zm5.8 0h2.9v1.3h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.66 2 3.66 4.6v5h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.7 1.15-1.7 2.33v4.47h-3v-9.35Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/kayoschools/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/kayoschools/", icon: InstagramIcon },
  { label: "YouTube", href: "http://youtube.com/@KayoInternational", icon: YouTubeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kayo-international-school/",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footerWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f3d9f1" />
              <stop offset="0.34" stopColor="#ffe0c6" />
              <stop offset="0.64" stopColor="#fdeec4" />
              <stop offset="1" stopColor="#d6ecd7" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 H1440 V36 C1380,58 1320,58 1260,36 C1200,14 1140,14 1080,36 C1020,58 960,58 900,36 C840,14 780,14 720,36 C660,58 600,58 540,36 C480,14 420,14 360,36 C300,58 240,58 180,36 C120,14 60,14 0,36 Z"
            fill="url(#footerWaveGradient)"
          />
        </svg>
      </div>
      <FloatingShapes items={FOOTER_SHAPES} className="footer__shapes" />

      <div className="container footer__inner">
        {/* Asymmetric, decorative body */}
        <div className="footer__body">
          <div className="footer__brand">
            <img src={logo} alt="Kayo International Preschool" className="footer__logo" />
            <p>
              A warm, stimulating home for children aged 6 months to 12 years in Perungudi,
              Chennai &mdash; trusted by 1,000+ families for over a decade.
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <link.icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <h4>Explore</h4>
            {EXPLORE.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Programmes">
            <h4>Programmes</h4>
            {PROGRAMMES.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </nav>

          {/* Contact "postcard" — a tilted sticker card */}
          <div className="footer__postcard">
            <span className="footer__pin" aria-hidden="true" />
            <h4>Visit Us</h4>
            <span className="footer__pc-line">
              <MapPin size={17} strokeWidth={1.9} />
              No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096
            </span>
            <a href="tel:+919884004650" className="footer__pc-line">
              <Phone size={17} strokeWidth={1.9} />
              +91 98840 04650
            </a>
            <a href="mailto:chnperungudi@kayointernational.in" className="footer__pc-line">
              <Mail size={17} strokeWidth={1.9} />
              chnperungudi@kayointernational.in
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            &copy; {new Date().getFullYear()} Kayo International Preschool &amp; DayCare. All rights
            reserved.
          </span>
          <span>
            Made with <span className="footer__heart" aria-hidden="true">&#9829;</span> by Ara
            Sisover Technology
          </span>
        </div>
      </div>
    </footer>
  );
}
