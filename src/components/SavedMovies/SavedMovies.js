
import React, { useEffect, useState } from "react";
import "./SavedMovies.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import SearchProblem from "../SearchProblem/SearchProblem";
import SearchErrors from "../SearchProblem/SearchErrors/SearchErrors";
import { searchCards } from "../../utils/searchCard";
import Preloader from "../Movies/Preloader";
//import Content from "../Movies/Content";
import Footer from "../Footer/Footer";

const SavedMovies = ({ savedMovies, onSave, onDelete }) => {
  const [errorInquiry, setErrorInquiry] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [render, setRender] = useState(true);

  const [newSavedMovies, setNewSavedMovies] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (newSavedMovies) setMovies(newSavedMovies);

  }, [newSavedMovies]);

  useEffect(() => {
    setMovies(savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteMovies = async (card) => {
    const result = await onDelete(card, true);

    if (result) return result;

    const savedNewMovies = movies.slice();

    savedNewMovies.splice(
      movies.findIndex((a) => a._id === card),
      1
    );
    movies.splice(
      movies.findIndex((a) => a._id === card),
      1
    );

    setNewSavedMovies(savedNewMovies);
  };

  const handleSearchingCards = async (line, checkbox) => {
    try {
      setRender(false);
      setErrorInquiry(false);
      setMoviesNotFound(false);
      const tagSavedMovies = true;
      const searchMovies = searchCards(
        savedMovies,
        line,
        checkbox,
        tagSavedMovies
      );

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
      <div className="page">
        <section className="movies">
          <SearchForm onCard={handleSearchingCards} tag="saved-movies" />

          {moviesNotFound && <SearchErrors />}

          {errorInquiry && <SearchProblem />}

          {render
            ? (
              <MoviesCardList
                onDelete={handleDeleteMovies}
                flag="delete-save-btn"
                savedMovies={savedMovies}
                onSave={onSave}
                cards={movies}
                isShowNext={false}
              />
            ) : (
              <Preloader />
            )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
