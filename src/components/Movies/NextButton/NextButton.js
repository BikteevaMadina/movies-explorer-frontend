import "./NextButton.css";
import React from "react";

function NextButton({ cards, moreMovies, onClick }) {
  return (
    <div
      className={
        cards.length <= moreMovies
          ? "rolling__movies_btn rolling__movies_btn-none"
          : "rolling__movies_btn"
      }
    >
      <button
        className={
          cards.length <= moreMovies
            ? "rolling__movies_btn__button-none"
            : "rolling__movies_btn__button"
        }
        type="button"
        onClick={onClick}
      >
        Ещё
      </button>
    </div>
  );
}

export default NextButton;
