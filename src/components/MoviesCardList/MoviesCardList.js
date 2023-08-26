import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import NextButton from "../Movies/NextButton/NextButton";
import {CARD_WINDOW_1280,
   CARD_MOVIES_ROW_1280, 
   CARD_MOVIES_1280, 
   CARD_MOVIES_ROW_768, 
   CARD_MOVIES_768, 
   CARD_WINDOW_480, 
   CARD_MOVIES_ROW_480, 
   CARD_MOVIES_480,
} from "../../utils/constants";

const MoviesCardList = ({ cards, flag, savedMovies, onSave, onDelete }) => {

  const [moreMovies, setMoreMovies] = useState(0);
  const [step, setStep] = useState(0);

  const [rerender, setRerender] = useState();

  useEffect(() => {
    setTimeout(() => {
      const count = Array.from(
        document.querySelectorAll(".movies__card_item"))
        .reduce(
          (acc, { offsetTop: n }) => (
            // eslint-disable-next-line no-sequences
            acc[acc.length - 1]?.[0] === n || acc.push([n, 0]),
            acc[acc.length - 1][1]++,
            acc
          ),
          []
        )
        .map((n) => n[1]);
        setMoviesRegulations(count[0]);
    }, 10);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        const count = Array.from(
          document.querySelectorAll(".movies__card_item")
        )
          .reduce(
            (acc, {offsetTop: n}) => (
              // eslint-disable-next-line no-sequences
              acc[acc.length - 1]?.[0] === n || acc.push([n, 0]),
              acc[acc.length - 1][1]++,
              acc
            ),
            []
          )
          .map((n) => n[1]);
          setMoviesRegulations(count[0]);
      }, 500);
    });
    setRerender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openMoreMovies = () => {
    setMoreMovies(moreMovies + step);
  };

  const setMoviesRegulations = () => {
    setMoreMovies(cards.length);
    const currentSize = window.innerWidth;

    if (currentSize < CARD_WINDOW_480) {
      setMoreMovies(CARD_MOVIES_480);
        setStep(CARD_MOVIES_ROW_480);

    } else if (currentSize > CARD_WINDOW_480 
      && 
      currentSize < CARD_WINDOW_1280) {
        setMoreMovies(CARD_MOVIES_768);
        setStep(CARD_MOVIES_ROW_768);

    } else {
      setMoreMovies(CARD_MOVIES_1280);
        setStep(CARD_MOVIES_ROW_1280);
    }
};
  return (
    <section className="movies">
      <ul className="movies__list">
        {cards.map((card, index) => {
          if (index < moreMovies) {
            return (
              <li className="movies__item">

                <MoviesCard
                  key={card.id || card.movieId}
                  savedMovies={savedMovies}
                  onSave={onSave}
                  card={card}
                  flag={flag}
                  onDelete={onDelete}
                />

              </li>
            );
          }
          return null;
        })}
      </ul>
      <NextButton
        onClick={openMoreMovies}
        maxMovies={moreMovies}
        cards={cards}
      />
    </section>
  );
};

export default MoviesCardList;
