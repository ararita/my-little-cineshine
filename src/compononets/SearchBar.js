import React from "react";

function SearchBar() {
  const searchMovies = async (e) => {
    e.preventDefault();

    const query = "Amelie";
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
      );
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
