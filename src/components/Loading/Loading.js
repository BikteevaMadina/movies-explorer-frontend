import ok from "../../images/ok.svg";
import no from "../../images/no.svg";
import React from "react";

function Loading({ isAuth, onClose, isOpen, onMessage }) {
  const onClosePopups = () => {
    onClose();
  };
  return (
    <div className={isOpen ? `popup popup_opened` : `popup`}>
      <div className="popup__content popup__type_loading">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClosePopups}
        />
        <img
          src={isAuth ? ok : no}
          alt={isAuth ? "Регистрация успешна" : "Ошибка регистрации"}
          className="popup__type_loading-icon"
        />
        <h3 className="popup__type_loading-title">
          {isAuth ? `${onMessage}` : `${onMessage}`}
        </h3>
      </div>
    </div>
  );
}

export default Loading;
