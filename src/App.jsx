import React, { useState,useEffect } from "react";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
import Footer from "./Footer";
import Mcategory from './Mcategory';

// const allCatValues = [ ... new Set(
//   Sdata.map((currElem) => {
//     return currElem.title;
//   })
// )];

// console.log(allCatValues);

const App = () => {
  const [dark,setDark] =useState(false);
  useEffect(() => {
      if(dark){
        let newbg = "#000000";
        setBg(newbg);
        setHed(newbg);
        setName("Light");
        setBgc(bgcchane);
      }else{
        setBg(purple);
        setHed(heading);
        setName("Dark");
      }
  }, [dark])
  const bgcchane = "#8e44ad";
  const bgcnormal = "#000000";
  const heading = "#fff";
  const purple = "#d2dbdd";
  const [bg, setBg] = useState(purple);
  const [hed, setHed] = useState(heading);
  const [name, setName] = useState("Dark");
  const [bgc, setBgc] = useState(bgcnormal);
  const [find, setFind] = useState("");
  const [items, setItems] = useState(Sdata);

  const searchEvent = (event) => {
    const data = event.target.value;
    setFind(data);
  };
  const filterItems = (category) => {
    const updateItems = Sdata.filter((currentElem) => {
      return currentElem.title === category;
    });
    setItems(updateItems);
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <div className="header" style={{ backgroundColor: hed }}>
          <h1 className="heading_style" style={{ backgroundColor: hed }}>
            Easy Content Watch 🏂
          </h1>
          <input
            type="text"
            placeholder="SEARCH..."
            className="search"
            onChange={searchEvent}
            value={find}
          />
          <button
            className="header-btn"
            onClick={()=> setDark((pre)=>!pre)}
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

            <Mcategory filterItems={filterItems} setItems={setItems}/>

        {items.map((val) => {
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
