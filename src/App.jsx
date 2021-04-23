import React, { useState } from "react";
import Amazon from "./Amazon";
import Card from "./Cards";
import "./index.css";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
import Footer from "./Footer";

const App = () => {
  const bgcchane = "#8e44ad";
  const bgcnormal = "#000000";
  const heading = "#fff";
  const purple = "#d2dbdd";
  const [bg, setBg] = useState(purple);
  const [hed, setHed] = useState(heading);
  const [name, setName] = useState("Dark");
  const [bgc, setBgc] = useState(bgcnormal);
  const darkMode = () => {
    let newbg = "#000000";
    setBg(newbg);
    setHed(newbg);
    setName("Normal");
    setBgc(bgcchane);
  };
  const normalMode = () => {
    setBg(purple);
    setHed(heading);
    setName("Dark");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <div className="header" style={{ backgroundColor: hed }}>
          <h1 className="heading_style" style={{ backgroundColor: hed }}>
            Easy Content Watch 🏂
          </h1>
          <input type="text" placeholder="SEARCH..." className="search" />
          <button
            className="header-btn"
            onClick={darkMode}
            onDoubleClick={normalMode}
          >
            {name}
          </button>
        </div>
        <div className="nav-container">
          <div className="menu">
            <a href="http://123tvnow.com/watch/amc/" target="_blank">
              <button className="btn">AMC</button>
            </a>
            <a href="http://123tvnow.com/?s=hbo" target="_blank">
              <button className="btn">HBO</button>
            </a>
            <a href="http://123tvnow.com/watch/nfl-network/" target="_blank">
              <button className="btn">NFL</button>
            </a>
            <a href="http://123tvnow.com/watch/espn-news/" target="_blank">
              <button className="btn">ESPN</button>
            </a>
            <a href="http://123tvnow.com/watch/trutv/" target="_blank">
              <button className="btn">TRU</button>
            </a>
          </div>
        </div>
        <div className="select-option">
          <select className="select">
            <option>All</option>
            <option>Netflix</option>
            <option>HBO</option>
            <option>Ski-Fi</option>
            <option>Adventure</option>
          </select>
        </div>

        {Sdata.map((val) => {
          return (
            <Card
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}

        <Footer />
      </div>
    </>
  );
};

export default App;
