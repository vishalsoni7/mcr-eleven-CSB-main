import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Card } from "./MovieCard";

export const WatchList = () => {
  const { watchList } = useContext(MovieContext);
  return (
    <div className="home">
      {watchList?.map((card, i) => (
        <div key={i}>
          {" "}
          <Card {...card} />{" "}
        </div>
      ))}
    </div>
  );
};
