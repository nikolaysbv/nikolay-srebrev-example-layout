import "./Card.css";
import { TbMinusVertical } from "react-icons/tb";
import { IconContext } from "react-icons";

const Card = ({ img, title, excerpt, category }) => {
  console.log(img);
  return (
    <li className="card">
      <img src={img} alt="news article pic" className="img" />
      <div className="text-category-container">
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <p className="excerpt">{excerpt}</p>
        </div>
        <p className="category">
          <IconContext.Provider value={{ color: "#6896b1", size: "1.25em" }}>
            <span className="icon">
              <TbMinusVertical />
            </span>
          </IconContext.Provider>
          {category}
        </p>
      </div>
    </li>
  );
};

export default Card;
