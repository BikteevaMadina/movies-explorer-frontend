import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header.js";
import Content from "../Movies/Content.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { saveCardList } from "../../utils/constants";

function SavedMovies() {
  const { logeIn } = useContext(CurrentUserContext);
  const [saveCards, setSaveCards] = useState([]);

  useEffect(() => {
    if (logeIn) {
      setSaveCards(saveCardList);
    }
  }, [logeIn]);

  return (
    <div className="page">
      <Header />
     
      <Content>
      <SearchForm />
      <MoviesCardList cardList={saveCards} typeCardBtn={{ save: false }} />
      </Content>
      <Footer />
    </div>
  );
}

export default SavedMovies;
