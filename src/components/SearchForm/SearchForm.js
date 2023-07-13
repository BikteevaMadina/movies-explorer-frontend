function SearchForm() {
    function handleSubmit(e) {
      e.preventDefault();
    }
  
    return (
      <div className="search color_background">
        <form className="search__form" onSubmit={handleSubmit}>
          <input type="text" className="search__form-input" placeholder="Фильм" required />
          <button className="search__submit link" type="submit"></button>
        </form>
      <div className="filter">
      <label className="filter__label text">
        <input type="checkbox" className="filter__input" />
        <span className="filter__switch"></span>
      </label>
    </div>
      </div>
    );
  }

  export default SearchForm;