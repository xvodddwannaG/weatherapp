import PropTypes from 'prop-types';
import React from 'react';
import { getWeather } from '../../redux/index'
import { useDispatch } from 'react-redux';
import './favorites.css';

const Favorites = ({
  favoritesList,
}) => {

  const dispatch = useDispatch()
  // Назвать функцию, которую используем в роли обработчика события можем 2-мя способами
  // например: buttonOnClick
  // или buttonClickHandler

  const favoriteButtonClickHandler = (e) => {
    e.preventDefault();
    dispatch(getWeather(e.target.dataset.item))
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

Favorites.propTypes = {
  favoritesList: PropTypes.array,
  getWeather: PropTypes.func
}


export default Favorites;
