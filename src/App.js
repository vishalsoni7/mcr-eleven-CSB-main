import "./styles.css";

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Home } from "../src/pages/Home";
import { NavBar } from "./pages/NavBar";
import { WatchList } from "./pages/WatchList";
import { StarredMovie } from "./pages/StarredMovie";
import { SingleMovie } from "./pages/SingleMovie";

export default function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/starredmovies" element={<StarredMovie />} />
        <Route path="/current/:movieId" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}
