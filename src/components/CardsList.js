import Card from "./Card";
import "./CardsList.css";
import { useState } from "react";

const CardsList = () => {
  const [data, setData] = useState([
    {
      img: "img1",
      title: "title1",
      excerpt: "excerpt1",
      category: "category1",
    },
    {
      img: "img2",
      title: "title2",
      excerpt: "excerpt2",
      category: "category2",
    },
    {
      img: "img3",
      title: "title3",
      excerpt: "excerpt3",
      category: "category3",
    },
  ]);

  return (
    <ul className="list">
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </ul>
  );
};
export default CardsList;
