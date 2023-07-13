// import MoviesCard from "../MoviesCard/MoviesCard.js"

// function MoviesCardList({ cardList, typeCardBtn }) {

//   return(
//     <section className="movies-card">
//       <ul className="movies-card__list">
//         {cardList.map(card => (
//           <MoviesCard
//             key={card.movieId}
//             movieId={card.movieId}
//             duration={card.duration}
//             image={card.image}
//             name={card.nameRU}
//             typeCardBtn={typeCardBtn}
//           />
//         ))}
//       </ul>
//       {cardList.length > 2 &&
//         <button className="movies-card__more-btn">
//           Ещё
//         </button>}
//     </section>
//   )
// }

// export default MoviesCardList
import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { defaultMovies } from "../../utils/constants";

function MoviesCardList(props) {
  const { listType } = props;

  return (
    <section className="movies">
      <ul className="movies__list">
        {listType === "main"
          ? defaultMovies.map((movie) => (
              <li className="movies__item" key={movie.id}>
                <MoviesCard listType={listType} isMovieSave={movie.saved} />
              </li>
            ))
          : defaultMovies
              .filter((movie) => movie.saved)
              .map((movie) => (
                <li className="movies__item" key={movie.id}>
                  <MoviesCard listType={listType} />
                </li>
              ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;