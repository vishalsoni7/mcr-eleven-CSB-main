import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export const NewMovie = () => {
  const { input, setInput, addMovie } = useContext(MovieContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value.split(",")
    }));
  };

  return (
    <div className="new-div">
      <h1> Add New Movie </h1>

      <div className="input-div">
        <input
          onChange={handleInput}
          name="title"
          type="text"
          value={input.title}
          placeholder="Title"
        />{" "}
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="year"
          type="text"
          value={input.year}
          placeholder="Year"
        />
      </div>
      <div className="input-div">
        <textarea
          onChange={handleInput}
          name="genre"
          type="text"
          value={input.genre}
          placeholder="Hit comma to add new genre"
        >
          {" "}
        </textarea>
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="rating"
          type="text"
          value={input.rating}
          placeholder="Rating"
        />
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="director"
          type="text"
          value={input.director}
          placeholder="Director"
        />
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="writer"
          type="text"
          value={input.writer}
          placeholder="Writer"
        />{" "}
      </div>
      <div className="input-div">
        <textarea
          onChange={handleInput}
          name="cast"
          type="text"
          value={input.cast}
          placeholder="Hit comma to add new cast"
        >
          {" "}
        </textarea>
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="summary"
          type="text"
          value={input.summary}
          placeholder="Summary"
        />
      </div>
      <div className="input-div">
        <input
          onChange={handleInput}
          name="imageURL"
          type="url"
          value={input.imageURL}
          placeholder="Image link"
        />
      </div>
      <button onClick={() => addMovie(input)}> Add Movie </button>
    </div>
  );
};
