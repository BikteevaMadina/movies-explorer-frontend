import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import React, { useState, useEffect } from "react";

import Main from "../Main/Main.js";
import Header from "../Header/Header.js";
import Profile from "../Profile/Profile.js";

import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";

import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";

import Loading from "../Loading/Loading.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Error from "../../utils/errors";

import * as api from "../../utils/MainApi.js";
import * as auth from "../../utils/auth";

function App() {
  const [isUserRegistration, setIsUserRegistration] = useState(null);
  const [message, setMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [render, setRender] = useState(false);

  const [currentUser, setCurrentUser] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleCheckUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckUserToken = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setRender(true);
      return;
    }
    try {
      await handleSaveMovie();
      const userInfo = await api.getUserById();
      setCurrentUser(userInfo);

      setLoggedIn(true);
      setRender(true);
    } catch (e) {
      console.warn(e);
      setRender(true);
    }
  };

  const handleSaveMovie = async () => {
    try {
      const data = await api.getMovies();
      setSavedMovies(data);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleSaveMovies = async (data) => {
    try {
      console.log(await api.saveMovie(data));
      await handleSaveMovie();
    } catch (e) {
      console.warn(e);
      return e;
    }
  };

  const handleDeleteMovies = async (data) => {
    try {
      console.log(await api.deleteMovies(data));
      await handleSaveMovie();
    } catch (e) {
      console.warn(e);
      return e;
    }
  };

  const handleUserAuthorization = async (data) => {
    try {
      const userToken = await auth.authorization(data);
      if (userToken) {
        localStorage.setItem("jwt", userToken._id);
        setLoggedIn(true);
        await handleCheckUserToken();
        navigate("/movies");
      }
    } catch (error) {
      const errorServer = Error(error.status);
      setMessage(errorServer);
      setIsLoading(true);
    }
  };

  const handleUserRegistration = async (data) => {
    try {
      await auth.registration(data);
      await handleUserAuthorization(data);
      setIsUserRegistration(true);
      setMessage("Пользователь зарегистрирован");
      setIsLoading(true);
    } catch (error) {
      const errorServer = Error(error.status);
      setMessage(errorServer);
      setIsLoading(true);
    }
  };

  const handleAddUserInfo = async (data) => {
    try {
      if (!data.name)
        data = {
          ...data,
          name: currentUser.name,
        };
      if (!data.email)
        data = {
          ...data,
          email: currentUser.email,
        };
      const userData = await api.updateUser(data);
      setCurrentUser(userData);
      setIsUserRegistration(true);
      setMessage("Новые данные сохранены");
      setIsLoading(true);
    } catch (error) {
      const errorServer = Error(error.status);
      setMessage(errorServer);
      setIsLoading(true);
    }
  };

  const handleLoginOut = () => {
    localStorage.removeItem("searchMovies");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("line");
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/");
  };

  const closeAllPopups = () => {
    setIsLoading(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header auth={loggedIn} />
              <Main />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute render={render} loggedIn={loggedIn}>
              <Header auth={loggedIn} />
              <Movies
                onRender={render}
                savedMovies={savedMovies}
                onSave={handleSaveMovies}
                onDelete={handleDeleteMovies}
                handleCheckUserToken={handleCheckUserToken}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute render={render} loggedIn={loggedIn}>
              <Header auth={loggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                onSave={handleSaveMovies}
                onDelete={handleDeleteMovies}
                handleCheckUserToken={handleCheckUserToken}
              />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/profile"
          element={
            <ProtectedRoute render={render} loggedIn={loggedIn}>
              <Header auth={loggedIn} />
              <Profile
                onLogin={handleLoginOut}
                updateUser={handleAddUserInfo}
                handleCheckUserToken={handleCheckUserToken}
              />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          auth={loggedIn}
          path="/signin"
          element={
            loggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Login onLogin={handleUserAuthorization} />
            )
          }
        />
        <Route
          exact
          path="/signup"
          auth={loggedIn}
          element={
            loggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Register onLogin={handleUserRegistration} />
            )
          }
        />
        <Route exact path="/*" element={<NotFoundPage />} />
      </Routes>
      <Loading
        isOpen={isLoading}
        onMessage={message}
        onClose={closeAllPopups}
        isAuth={isUserRegistration}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
