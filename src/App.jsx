import React from "react";
import Amazon from "./Amazon";
import Card from "./Cards";
import "./index.css";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
import Footer from "./Footer";

const App = () => (
  <>
    <h1 className="heading_style">Easy Content Watch 🏂</h1>
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
  </>
);

export default App;
