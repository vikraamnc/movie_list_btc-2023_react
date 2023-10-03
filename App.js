import "./App.css";
import React, { useState } from "react";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [dMovie, setDmovie] = useState({});

  const addToMovieList = (searchmovie) => {
    const filteredArg = movieList.filter(
      (itm) => itm.imdbID !== searchmovie.imdbID
    );

    setMovieList([...filteredArg, searchmovie]);
    //  setDmovie([...movieList, searchmovie]);
  };
  const handleOnDelete = (id) => {
    const mov = movieList.filter(({ imdbID }) => imdbID !== id);

    setMovieList(mov);
    setDmovie(mov);
  };
  console.log(movieList);
  const moveFilter = (mode) => {
    if (!mode) {
      return setDmovie(movieList);
    }
    setDmovie(movieList.filter((itm) => itm.mode === mode));
  };
  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center"> My Movie Collection</h1>
          </div>
        </div>
        <hr />
        {/*  {title} */}

        {/* search area */}

        {/* => form */}
        {/* =>card */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* movie list section */}

        {/* => button */}

        {/* => cards */}
        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
}

export default App;
