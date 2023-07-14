
import "./MoviesCard.css";
import defaultPhoto from "../../images/card.svg";
import React, { useState } from "react";
function MoviesCard(props) {
  const { listType, isMovieSave } = props;
  const [isSaved, getIsSaved] = useState(isMovieSave);

  const handleClickSave = () => {
    getIsSaved(!isSaved);
  };
  return (
    <article className="card">
      <div className="card__header" >
      <h2 className="card__title">Сила мысли</h2>
      <p className="card__time">1ч 47м</p>
      </div>
      <img className="card__img" alt="Фотография фильма" src={defaultPhoto} />
      {listType === "main" ? (
             <button
         className={`card__btn ${
          isSaved
               
             ? "card__btn_saved"
             : ""
             
              
        }`}
        type="button"
        onClick={handleClickSave}>Сохранить</button>
      
      ) : (
        <button className=" card__btn_type_del" type="button" />
      )}
      
    </article>
  );
}

export default MoviesCard;