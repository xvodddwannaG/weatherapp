import React from 'react';
import './favorites.css';

const Favorites = ({
  favoritesList, getWeather,
}) => {
  // Назвать функцию, которую используем в роли обработчика события можем 2-мя способами
  // например: buttonOnClick
  // или buttonClickHandler
  const favoriteButtonClickHandler = (e) => {
    e.preventDefault();
    getWeather(e.target.dataset.item);
  };

  return (
    <div>
      <div className="favorites">
        Favorites List:
        <br />
        {favoritesList.length === 0
          ? 'Empty'
          : favoritesList.map((item, index) => (
            <button className="btn btn-primary" type="button" data-item={item} key={item[index]} onClick={favoriteButtonClickHandler}>{item}</button>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
