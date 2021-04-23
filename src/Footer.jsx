import React from "react";

const Footer = () => {
  
  return (
    <>
      <div className="footer" >
        <div className="col1">
          <h1>EasyContentWatch 🏂</h1>
          <p> &copy; EasyContentWatch  | Designed by Jagjeet Ramgharia</p>
          <p>Under Development 🛩️</p>
        </div>
        <div className="col1">
          <h1>Live TV 📺</h1>
          <ul>
            <li>
              <a href="http://123tvnow.com/watch/amc/" target="_blank">
                AMC
              </a>
            </li>
            <li>
              <a href="http://123tvnow.com/?s=hbo" target="_blank">
                HBO
              </a>
            </li>
            <li>
              <a href="http://123tvnow.com/watch/nfl-network/" target="_blank">
                NFL
              </a>
            </li>
            <li>
              <a href="http://123tvnow.com/watch/espn-news/" target="_blank">
                ESPN
              </a>
            </li>
            <li>
              <a href="http://123tvnow.com/watch/trutv/" target="_blank">
                TRUTV
              </a>
            </li>
          </ul>
        </div>

        <div className="col1">
          <h1>Socials 🧑‍🤝‍🧑</h1>
          <ul>
            <li><a href="https://github.com/Jagjeet-Ramgharia" target="_blank">Github</a></li>
          </ul>
          <ul>
            <li><a href="https://www.instagram.com/ramgharia_jagjeet/" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
