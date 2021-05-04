import React from "react";
import Sdata from "./Sdata";

function Mcategory({ filterItems,setItems}) {
  return (
    <>
      <div className="category">
        <button className="category_btn" onClick={()=> filterItems('HBO Series')}>HBO</button>
        <button className="category_btn" onClick={()=> filterItems('A Netflix Original Series')}>Netflix</button>
        <button className="category_btn" onClick={()=> filterItems('Warner Brothers')}>Movies</button>
        <button className="category_btn" onClick={()=> setItems(Sdata)}>All</button>
      </div>
    </>
  );
}

export default Mcategory;
