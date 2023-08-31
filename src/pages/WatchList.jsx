import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Card } from "./MovieCard";

export const WatchList = () => {
  const { watchList } = useContext(MovieContext);
  return (
    <div className="home">
      {watchList.length === 0 && (
        <h2 className="nothing"> Nothing in Watchlater</h2>
      )}
      {watchList?.map((card, i) => (
        <div key={i}>
          {" "}
          <Card {...card} />{" "}
        </div>
      ))}
    </div>
  );
};
