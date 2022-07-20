import "./Card.css";

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
        <p className="category">{category}</p>
      </div>
    </li>
  );
};

export default Card;
