// import { useContext, useEffect, useState } from "react";
// import Header from "../Header/Header.js";
// import SearchForm from "../SearchForm/SearchForm.js";
// import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
// import Footer from "../Footer/Footer.js";
// import { CurrentUserContext } from "../../context/CurrentUserContext.js";
// import { cardList } from "../../utils/constants.js";

// function Movies() {
//   const { logeIn } = useContext(CurrentUserContext);
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     if (logeIn) {
//       setCards(cardList);
//     }
//   }, [logeIn]);

//   return (
//     <div className="page">
//       <Header />
//       <main>
//         <SearchForm />
//         <MoviesCardList cardList={cards} typeCardBtn={{ save: true }} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Movies;
import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import Content from "./Content";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "./Preloader";

const Movies = () => {
  const defoultLoading = false;
  return (
    <>
      <Header />
      <SearchForm />
      <Content>
        {defoultLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList listType="main" />
            <button className="movies__button" type="button">
              Ещё
            </button>
          </>
        )}
      </Content>
      <Footer />
    </>
  );
};

export default Movies;

