
import React, { useEffect, useState } from "react";
//import Content from "./Content";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import SearchProblem from "../SearchProblem/SearchProblem";
import SearchErrors from "../SearchProblem/SearchErrors/SearchErrors";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "./Preloader";

import { searchCards } from "../../utils/searchCard";

import * as moviesApi from "../../utils/MoviesApi";


const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  const [errorInquiry, setErrorInquiry] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [data, setData] = useState([])
  const [render, setRender] = useState(true);

  const handleResettingMovies = () => {
    setMovies([]);
  };

  useEffect(() => {
    async function fetchMovies() {
      const d = await moviesApi.getMovies();
      setData(d);
    }
    fetchMovies();
    setMovies(data);
    const searchMovies = JSON.parse(localStorage.getItem("searchMovies"));
    if (searchMovies)
      setMovies(searchMovies);
  }, [data]);

  const handleSearchingCards = async (line, checkbox) => {
    try {
      setRender(false);
      setErrorInquiry(false);
      setMoviesNotFound(false);

      // const data = await moviesApi.getMovies();

      const searchMovies = searchCards(data, line, checkbox);

      if (searchMovies.length === 0) setMoviesNotFound(true);
      else setMoviesNotFound(false);

      setMovies(searchMovies);
      setRender(true);
    } catch (e) {
      setErrorInquiry(true);
      console.warn(e);
    }
  };


  return (
    <>
      <main className="page">
        <div className="movies">
          <SearchForm
            onCard={handleSearchingCards}
            onReset={handleResettingMovies}
          />
          {moviesNotFound && <SearchErrors />}
          {errorInquiry && <SearchProblem />}
          {render ?
            <MoviesCardList
              flag="add-save-btn"
              onSave={props.onSave}
              cards={movies}
              savedMovies={props.savedMovies}
              onDelete={props.onDelete}
              isShowNext={true}
            />
            : <Preloader />
          }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
