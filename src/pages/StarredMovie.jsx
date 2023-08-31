import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Card } from "./MovieCard";

export const StarredMovie = () => {
  const { starredMovies } = useContext(MovieContext);

  return (
    <div className="home">
      {starredMovies.map((card, i) => (
        <div key={i}>
          {" "}
          <Card {...card} />{" "}
        </div>
      ))}
    </div>
  );
};
