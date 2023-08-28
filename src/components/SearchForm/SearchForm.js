import React, { useEffect, useState } from "react";
import searchingThing from "../../images/icon.svg";
import searchingBtn from "../../images/find.svg";



function SearchForm({ onCard, tag, onReset }) {

    const [searchTime, setSearchTime] = useState("");

    const [checkbox, setCheckbox] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (!tag) {
            const checked = JSON.parse(localStorage.getItem("checkbox"));
            const valueInput = JSON.parse(localStorage.getItem("line"));

            if (valueInput) setSearchTime(valueInput);
            if (checked === true) setCheckbox(true);
        }
        setRender(true);
         onCard(searchTime, checkbox);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCheckboxChange = () => {
        setCheckbox(!checkbox);

        if (!tag) localStorage.setItem("checkbox", JSON.stringify(!checkbox));
        onCard(searchTime, !checkbox);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tag) return onCard(searchTime, checkbox);
        if (document.querySelector(".search__input").value.length === 0) {
            localStorage.removeItem('searchMovies');
            localStorage.removeItem('line');
            onReset();
            return (document.querySelector(".search__input").placeholder =
                "Введите ключевые слова для поиска");
        }
        onCard(searchTime, checkbox);
    };

    return render && (
        <section className="search">
            <form
                className="search__form"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="search__container">
                    <img
                        className="search__search-image search__search-image-none"
                        src={searchingThing}
                        alt="поиск"
                    />
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        maxLength="30"
                        minLength="1"
                        type="text"
                        defaultValue={searchTime}
                        onChange={(e) => setSearchTime(e.target.value)}
                    />
                    <button type="submit" className="search__button">
                        <img
                            className="search__search-image"
                            alt="поиск"
                            src={searchingBtn}
                        />
                    </button>
                    <div className="search__box" />
                    <div className="search__item">
                        <label className="search__tumbler">
                            <input
                                type="checkbox"
                                className="search__checkbox"
                                onChange={handleCheckboxChange}
                                checked={checkbox}
                                id="searchCheckbox"
                            />
                            <span className="search__check search__check_off" />
                        </label>
                        <p className="search__films">Короткометражки</p>
                    </div>
                </div>
                <div className="search__item search__item_mini-size">
                    <label className="search__tumbler">
                        <input
                            type="checkbox"
                            className="search__checkbox"
                            onChange={handleCheckboxChange}
                        />
                        <span className="search__check search__check_off" />
                    </label>
                    <p className="search__films">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;