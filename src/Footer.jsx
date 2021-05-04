import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col1">
          <h1>Services</h1>
          <p>
            &copy; EasyContentWatch <br /> Designed by Jagjeet Ramgharia
          </p>
          <p>Under Development 🛩️</p>
        </div>
        <div className="col2">
          <h1>Live TV</h1>
          <a href="http://123tvnow.com/watch/amc/" target="_blank">
            AMC
          </a>
          <br />
          <a href="http://123tvnow.com/?s=hbo" target="_blank">
            HBO
          </a>
          <br />
          <a href="http://123tvnow.com/watch/nfl-network/" target="_blank">
            NFL
          </a>
          <br />
          <a href="http://123tvnow.com/watch/espn-news/" target="_blank">
            ESPN
          </a>
          <br />
          <a href="http://123tvnow.com/watch/trutv/" target="_blank">
            TRUTV
          </a>
        </div>

        <div className="col3">
          <h1>Socials</h1>

          <a href="https://github.com/Jagjeet-Ramgharia" target="_blank">
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/ramgharia_jagjeet/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer_bottom">&copy; EasyContentWatch</div>
    </>
  );
};

export default Footer;
