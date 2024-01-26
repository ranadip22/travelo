import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-links">
        <div className="footer-logo">
          Tra<span className="logo-sub">velo</span>
        </div>
        <div className="footer-col">
          <h1>Company</h1>
          <a href="/blog">Blog</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ's</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-col">
          <h1>Contact Us</h1>
        </div>
        <div className="footer-col">
          <h1>Quick Link</h1>
          <a href="/guide">Style Guide</a>
          <a href="/careers">Career</a>
          <a href="/help">Help</a>
        </div>
        <div className="footer-col">
          <h1>Social Share</h1>
          <div className="social">
            <a href="/">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-twitter fa-2xl"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-pinterest fa-2xl"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-youtube fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy-right">Copyright 2024. Powered by Travelo</p>
    </section>
  );
};

export default Footer;
