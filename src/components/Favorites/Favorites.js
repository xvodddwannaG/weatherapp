import React from 'react';
import './favorites.css';

export const Favorites = ({
  favoritesList, getWeather,
}) => {
  // Назвать функцию, которую используем в роли обработчика события можем 2-мя способами
  // например: buttonOnClick
  // или buttonClickHandler
  const buttonClickHandler = (e) => {
    e.preventDefault();
    getWeather(e.target.dataset.item);
  };

  return (
    <div>
      <div className="favorites">
        Favorites List:
        <br />
        {favoritesList === []
          ? 'Empty'
          : favoritesList.map((item, index) => (
            <button className="btn btn-primary" type="button" data-item={item} key={index} onClick={buttonClickHandler}>{item}</button>
          ))}
      </div>
    </div>
  );
};
