import "./App.css";
import CardsList from "./components/CardsList";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      img: "img1",
      title: "title1",
      excerpt: "excerpt1",
      category: "category1",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/cards")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCards(data);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="App">
      <CardsList cards={cards} />
    </main>
  );
}

export default App;
