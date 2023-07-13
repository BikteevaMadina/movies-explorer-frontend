import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js'
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { movieCardList } from '../../utils/constants.js';

function Movies() {
  const { logeIn } = useContext(CurrentUserContext);
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    if (logeIn) {
      setCards(movieCardList);
    }
  }, [logeIn])

  return(
    <div className="page">
      <Header
        theme={{ default: false }}/>
      <SearchForm/>
      <MoviesCardList
        cardList={cards}
        typeCardBtn={{save: true}}
      /> 
      <Footer/>
    </div>
  )
}

export default Movies;