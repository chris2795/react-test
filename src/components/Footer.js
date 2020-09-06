import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../css/Footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us to recieve our best deals and sales that you can get
        </p>
        <p className="footer-subscription-text">
          Now you can spend your money with no regrets
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">
              Click for more Information
            </Button>
          </form>
         
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/sign-up">Support</Link>
            <Link to="/sign-up">Destinations</Link>
            <Link to="/sign-up">Sponsorships</Link>
         
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Submit Video</Link>
            <Link to="/sign-up">Ambassadors</Link>
            <Link to="/sign-up">Agency</Link>
            <Link to="/sign-up">Influencer</Link>
       
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/sign-up">Facebook</Link>
            <Link to="/sign-up">Youtube</Link>
            <Link to="/sign-up">Twitter</Link>
        
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              OFW <i className="fas fa-globe-asia" />
            </Link>
          </div>
          <small className="website-rights">OFW © 2020 </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
