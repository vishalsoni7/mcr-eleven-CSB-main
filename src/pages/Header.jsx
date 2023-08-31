import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { NewMovie } from "./AddMovieModal";

export const Header = () => {
  const {
    modal,
    setModal,
    gens,
    getRatings,
    years,
    filterByGenre,
    filterByYaer,
    filterByRatings
  } = useContext(MovieContext);
  return (
    <div className="header">
      <h2> Movies </h2>
      <select onChange={(e) => filterByGenre(e.target.value)}>
        <option value="All Movies"> All Movies </option>
        {gens.map((i) => (
          <option value={i}> {i} </option>
        ))}
      </select>
      <select onChange={(e) => filterByYaer(e.target.value)}>
        {" "}
        <option value="All"> All </option>
        {years.map((y) => (
          <option value={y}> {y} </option>
        ))}{" "}
      </select>
      <select onChange={(e) => filterByRatings(e.target.value)}>
        <option value="All"> All </option>
        {getRatings.map((r) => (
          <option value={r}> {r} </option>
        ))}
      </select>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Add Movie{" "}
      </button>

      {modal && (
        <div
          onClick={() => {
            setModal(false);
          }}
          className="modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal_outer_container"
          >
            <NewMovie />
          </div>
        </div>
      )}
    </div>
  );
};
