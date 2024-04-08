import React from "react";
import "./Footer.css";
import fbimg from "../../assets/facebook.png";
import twitterimg from "../../assets/twitter.png";
import googleimg from "../../assets/G+.png";
import linkdenimg from "../../assets/linkden.png";
import pinterestimg from "../../assets/pinterest.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="sub-footer-links">
            <h4>ABOUT US</h4>
            <a href="">
              <p>FAQ</p>
            </a>
            <a href="">
              <p>Anti-Scam</p>
            </a>
            <a href="">
              <p>Terms</p>
            </a>
            <a href="">
              <p>Privacy</p>
            </a>
          </div>

          <div className="sub-footer-links">
            <h4>CONTACT & SITEMAP</h4>
            <a href="">
              <p>Contact Us</p>
            </a>
            <a href="">
              <p>Sitemap</p>
            </a>
          </div>

          <div className="sub-footer-links">
            <h4>MY ACCOUNT</h4>
            <a href="">
              <p>Log In</p>
            </a>
            <a href="">
              <p>Register</p>
            </a>
          </div>
          <div className="sub-footer-links">
            <h4>FOLLOW US ON</h4>
            <div className="social-media-icons">
              <p>
                <img src={fbimg} alt="" />
              </p>
              <p>
                <img src={twitterimg} alt="" />
              </p>
              <p>
                <img src={googleimg} alt="" />
              </p>
              <p>
                <img src={linkdenimg} alt="" />
              </p>
              <p>
                <img src={pinterestimg} alt="" />
              </p>
            </div>
          </div>

          <hr />

          <div className="footer-below">
            <div className="footer-below-copyright">
              <p>
                &copy; {new Date().getFullYear()} LaraClassified.All Right
                Reserved.Powered by <span>Bidigit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
