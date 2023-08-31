import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export const SingleMovie = () => {
  const {
    data,
    makeStared,
    addWishlist,
    inWatchlist,
    isStared,
    removeFromStared,
    removeFromWishList
  } = useContext(MovieContext);
  const { movieId } = useParams();

  const findMovie = data.find((movie) => movie.id === +movieId);

  return (
    <div className="singlemovie">
      <img src={findMovie?.imageURL} alt="" />

      <div className="singlemovie-child ">
        <h2> {findMovie?.title} </h2>
        <p> {findMovie?.summary} </p>
        <p> Year: {findMovie?.year} </p>
        <p>
          {" "}
          Genre:
          {findMovie.genre.map((g) => (
            <> {g} </>
          ))}{" "}
        </p>
        <p>Rating: {findMovie?.rating} </p>
        <p> Director: {findMovie?.director} </p>
        <p> Writer: {findMovie?.writer} </p>
        <p>
          {" "}
          Genre:
          {findMovie.cast.map((c) => (
            <> {c} </>
          ))}{" "}
        </p>

        <div className="card-btn-div">
          {inWatchlist(findMovie?.id) ? (
            <button onClick={() => removeFromWishList(findMovie?.id)}>
              Added in Watchlist{" "}
            </button>
          ) : (
            <button onClick={() => addWishlist(findMovie?.id)}>
              Add to Watchlist{" "}
            </button>
          )}

          {isStared(findMovie?.id) ? (
            <button onClick={() => removeFromStared(findMovie?.id)}>
              Stared
            </button>
          ) : (
            <button onClick={() => makeStared(findMovie?.id)}>Star </button>
          )}
        </div>
      </div>
    </div>
  );
};
