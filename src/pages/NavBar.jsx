import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export const NavBar = () => {
  const { searchFilter } = useContext(MovieContext);
  return (
    <div className="navbar">
      <h2>
        {" "}
        <NavLink className="link" to="/">
          {" "}
          NEOG IMDB{" "}
        </NavLink>{" "}
      </h2>
      <input
        onChange={(e) => searchFilter(e.target.value)}
        placeholder="Search movies by title, case and director..."
        type="text"
      />

      <div className="navbar-a">
        <h4>
          {" "}
          <NavLink to="/" className="link">
            {" "}
            Movies{" "}
          </NavLink>{" "}
        </h4>
        <h4>
          {" "}
          <NavLink to="/watchlist" className="link">
            {" "}
            Watch List{" "}
          </NavLink>{" "}
        </h4>
        <h4>
          {" "}
          <NavLink to="/starredmovies" className="link">
            {" "}
            Starred Movies{" "}
          </NavLink>{" "}
        </h4>
      </div>
    </div>
  );
};
