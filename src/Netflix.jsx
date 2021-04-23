import React from 'react';
import Card from './Cards';

const data = [
  {
    id:1,
    imgsrc: "https://wallpapercave.com/wp/wp5770344.jpg",
    title: "A Netflix Original Series",
    sname: "DARK",
    link: "https://www.netflix.com/in/title/80100172",
  },
  {
    id:2,
    imgsrc: "https://wallpapercave.com/wp/wp5696666.jpg",
    title: "A Netflix Original Series",
    sname: "Stranger Things",
    link: "https://www.netflix.com/in/title/80057281",
  }
]

const Netflix = () =>{
    {data.map((val) =>{
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
}

export default Netflix;