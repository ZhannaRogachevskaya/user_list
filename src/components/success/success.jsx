import "./success.css";
import React from "react";

export const Success = ({ count }) => {
  return (
    <div className="form__success">
      <h1>Приглашения успешно отправлены {count} пользователям!</h1>

      <button
        className="btn-send-turn"
        onClick={() => window.location.reload()}
      >
        Назад
      </button>
    </div>
  );
};
