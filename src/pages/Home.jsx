import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Header } from "./Header";
import { Card } from "./MovieCard";

export const Home = () => {
  const { data } = useContext(MovieContext);

  return (
    <div>
      <Header />
      <div className="home">
        {data.map((card, i) => (
          <div key={i}>
            {" "}
            <Card {...card} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
