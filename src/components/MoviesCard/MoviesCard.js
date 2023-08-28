import React from "react";
import { useState, useEffect } from "react";

const MoviesCard = ({ card, 
                      flag, 
                      savedMovies, 
                      onSave, 
                      onDelete }) => {

  const [saveMovieId, setSaveMovieId] = useState(null);

  const [saveMovie, setSaveMovie] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (savedMovies) {
      savedMovies.forEach((movies) => {

        if (movies.movieId === card.id || movies.id === card.id) {
          setSaveMovieId(movies._id);
          setSaveMovie(true);
        }
      });
    }

    setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  const handleSaveMovie = async () => {
    if (!saveMovie && flag === "add-save-btn") {
      try {
        
        const answer = await onSave(card);
        if (answer) return;
        return setSaveMovie(true);
      } catch (e) {
        console.warn(e);
      }
    }
    try {
      if (card._id) {
        const answer = await onDelete(card._id);

        if (answer) return

        return setSaveMovie(false);
      }

      const result = await onDelete(saveMovieId);

      if (result) return;
      return setSaveMovie(false);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    render && (
    <>
    <li key={card.id || card.movieId} className="movies__card_item">
        <div className="movies__card_info">
          <h2 className="movies__card_title">{card.nameRU}</h2>
          <p className="movies__card_time">{`${Math.floor(
            card.duration / 60
          )}ч ${card.duration % 60}м`}</p>
        </div>
        <a
          href={card.trailerLink ? card.trailerLink : card.trailer}
          className="movies__card_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="movies__card_image"
            src={
              card.image.url
                ? `https://api.nomoreparties.co${card.image.url}`
                : card.image
            }
            alt={card.nameRU}
          />
        </a>
        <button
          className={`movies__card_${flag} movies__card_${flag}_${
            saveMovie ? "active" : "" 
          }`}
          type="button"
          onClick={handleSaveMovie}
        >Сохранить
        </button>
        </li>
        </>
    )
  );
};
export default MoviesCard;
