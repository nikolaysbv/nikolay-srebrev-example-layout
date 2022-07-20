import Card from "./Card";
import "./CardsList.css";

const CardsList = ({ cards }) => {
  return (
    <ul className="list">
      {cards.map((item, i) => {
        return <Card key={i} {...item} />;
      })}
    </ul>
  );
};
export default CardsList;
