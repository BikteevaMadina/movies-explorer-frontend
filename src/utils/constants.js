
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
export const headerMenu = [
  {
    id: generateId(),
    name: "Фильмы",
    link: "/movies",
  },
  {
    id: generateId(),
    name: "Сохранённые фильмы",
    link: "/saved-movies",
  },
];

export const defaultMovies = [
  { id: generateId(), saved: true },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
  { id: generateId(), saved: true },
  { id: generateId(), saved: true },
  { id: generateId(), saved: false },
  { id: generateId(), saved: false },
];

export const loginFormSetting = {
  type: "login",
  title: "Рады видеть!",
  transitionPath: "/signup",
  btnSubmitText: "Войти",
  transitionLinkText: "Регистрация",
  transitionText: "Ещё не зарегистрированы?",
};

export const registerFormSetting = {
  type: "register",
  title: "Добро пожаловать!",
  transitionPath: "/signin",
  transitionLinkText: "Войти",
  btnSubmitText: "Зарегистрироваться",
  transitionText: "Уже зарегистрированы?",
};
export const durationTitles = ["минута", "минуты", "минут"];

export const cardList = [
  {
    country: "Россия",
    director: "Роман Прыгунов",
    duration: 105,
    year: 2011,
    description:
      "Топ-менеджер переосмысляет жизнь. Данила Козловский в экранизации скандального бестселлера Сергея Минаева",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/eb2be055-2912-46a8-a95d-96b2c4bed835/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 1,
    nameRU: "Духлесс",
    nameEN: "Духless",
  },
  {
    country: "Узбекистан",
    director: "Павел Ким",
    duration: 210,
    year: 2018,
    description: "Весёлые приключения томата",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/d1931c7b-f11b-476f-ac32-ba71a09302eb/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 2,
    nameRU: "Помидор Доппи",
    nameEN: "Funny tomato",
  },
  {
    country: "Россия",
    director: "Роман Прыгунов",
    duration: 105,
    year: 2011,
    description:
      "Топ-менеджер переосмысляет жизнь. Данила Козловский в экранизации скандального бестселлера Сергея Минаева",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/eb2be055-2912-46a8-a95d-96b2c4bed835/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 1,
    nameRU: "Духлесс",
    nameEN: "Духless",
  },
  {
    country: "Узбекистан",
    director: "Павел Ким",
    duration: 210,
    year: 2018,
    description: "Весёлые приключения томата",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/d1931c7b-f11b-476f-ac32-ba71a09302eb/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 2,
    nameRU: "Помидор Доппи",
    nameEN: "Funny tomato",
  },
];

export const saveCardList = [
  {
    country: "Россия",
    director: "Роман Прыгунов",
    duration: 105,
    year: 2011,
    description:
      "Топ-менеджер переосмысляет жизнь. Данила Козловский в экранизации скандального бестселлера Сергея Минаева",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/eb2be055-2912-46a8-a95d-96b2c4bed835/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 1,
    nameRU: "Духлесс",
    nameEN: "Духless",
  },
  {
    country: "Узбекистан",
    director: "Павел Ким",
    duration: 210,
    year: 2018,
    description: "Весёлые приключения томата",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/d1931c7b-f11b-476f-ac32-ba71a09302eb/300x450",
    trailerLink: "https://trailer.ru",
    thumbnail: "https://trubnail.ru",
    movieId: 2,
    nameRU: "Помидор Доппи",
    nameEN: "Funny tomato",
  },
];
