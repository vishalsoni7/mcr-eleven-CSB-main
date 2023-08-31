import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export const Card = ({ id, title, summary, imageURL }) => {
  const {
    addWishlist,
    makeStared,
    inWatchlist,
    isStared,
    removeFromWishList,
    removeFromStared,
  } = useContext(MovieContext);

  return (
    <>
      <div key={id} className="card">
        <div>
          {" "}
          <NavLink className="link-a" to={`/current/${id}`}>
            <img src={imageURL} alt={title} />{" "}
          </NavLink>{" "}
          <p> {summary} </p>
        </div>

        <div className="card-btn-div">
          {inWatchlist(id) ? (
            <button onClick={() => removeFromWishList(id)}>
              Added in Watchlist{" "}
            </button>
          ) : (
            <button onClick={() => addWishlist(id)}>Add to Watchlist </button>
          )}

          {isStared(id) ? (
            <button onClick={() => removeFromStared(id)}>Stared</button>
          ) : (
            <button onClick={() => makeStared(id)}>Star </button>
          )}
        </div>
      </div>
    </>
  );
};
