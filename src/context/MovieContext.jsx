import { createContext, useState, useEffect } from "react";

import { movies } from "../data";
import {
  AddWatchlater,
  AddStared,
  RemoveStared,
  RemoveWatchlater,
  NewMovie,
} from "../utils";

export const MovieContext = createContext();

const movieFromLocalStorage = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : movies;

const watchlistFromLocalStorage = localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [];

const staredFromLocalStorage = localStorage.getItem("staredmovies")
  ? JSON.parse(localStorage.getItem("staredmovies"))
  : [];

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState(movieFromLocalStorage);
  const [starredMovies, setStarredMovies] = useState(watchlistFromLocalStorage);
  const [watchList, setWatchList] = useState(staredFromLocalStorage);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    id: "",
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const makeStared = (id) => {
    const findMovie = data.find((movie) => movie.id === id);
    setStarredMovies([...starredMovies, findMovie]);
    AddStared();
  };

  const addWishlist = (id) => {
    const findMovie = data.find((movie) => movie.id === id);
    setWatchList([...watchList, findMovie]);
    AddWatchlater();
  };

  const addMovie = () => {
    if (!input.title || !input.year || !input.director) {
      alert("Please fill in the required fields (title, year, director).");
    } else {
      const newMovie = { ...input, id: Date.now() };
      setData([newMovie, ...data]);
      setInput({
        id: "",
        title: "",
        year: "",
        genre: [],
        rating: "",
        director: "",
        writer: "",
        cast: [],
        summary: "",
        imageURL: "",
      });
      NewMovie();
      setModal(false);
    }
  };

  const inWatchlist = (id) => {
    return watchList.find((item) => item.id === id);
  };

  const isStared = (id) => {
    return starredMovies?.find((item) => item.id === id);
  };

  const searchFilter = (inputText) => {
    if (!inputText) {
      setData(movies);
      return;
    }
    const updatedMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(inputText.toLowerCase()) ||
        movie.cast.some((cast) =>
          cast.toLowerCase().includes(inputText.toLowerCase())
        ) ||
        movie.director.toLowerCase().includes(inputText.toLowerCase())
    );
    setData(updatedMovies);
  };

  const removeFromWishList = (id) => {
    const filterWishlist = watchList.filter((movie) => movie.id !== id);
    setWatchList(filterWishlist);
    RemoveWatchlater();
  };

  const removeFromStared = (id) => {
    const filterStared = starredMovies.filter((movie) => movie.id !== id);
    setStarredMovies(filterStared);
    RemoveStared();
  };

  const gens = [...new Set(movies.map((movie) => movie.genre).flat())];
  const years = [...new Set(movies.map((movie) => movie.year))];
  const getRatings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filterByGenre = (selectedGenre) => {
    if (selectedGenre === "All Movies") {
      setData(movies);
    } else {
      const updatedMovies = movies.filter((movie) =>
        movie.genre.includes(selectedGenre)
      );
      setData(updatedMovies);
    }
  };

  const filterByYaer = (selectedYear) => {
    if (selectedYear === "All") {
      setData(movies);
    } else {
      const updatedMovies = movies.filter(
        (movie) => movie.year === parseInt(selectedYear, 10)
      );
      setData(updatedMovies);
    }
  };

  const filterByRatings = (selectedRating) => {
    if (selectedRating === "All") {
      setData(movies);
    } else {
      const updatedMovies = movies.filter(
        (r) => r.rating === parseInt(selectedRating, 10)
      );
      setData(updatedMovies);
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    localStorage.setItem("staredmovies", JSON.stringify(starredMovies));
  }, [data, watchList, starredMovies]);

  const values = {
    data,
    setData,
    addWishlist,
    makeStared,
    starredMovies,
    watchList,
    input,
    setInput,
    addMovie,
    modal,
    setModal,
    inWatchlist,
    isStared,
    searchFilter,
    removeFromWishList,
    removeFromStared,
    gens,
    getRatings,
    years,
    filterByGenre,
    filterByYaer,
    filterByRatings,
  };

  return (
    <>
      <MovieContext.Provider value={values}> {children} </MovieContext.Provider>{" "}
    </>
  );
};
