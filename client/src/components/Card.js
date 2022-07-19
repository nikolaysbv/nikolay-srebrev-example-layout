import "./Card.css";

const Card = ({ img, title, excerpt, category }) => {
  return (
    <li className="card">
      <div className="img">{img}</div>
      <div className="title">{title}</div>
      <div className="excerpt">{excerpt}</div>
      <div className="category">{category}</div>
    </li>
  );
};

export default Card;
