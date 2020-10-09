import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/applyMiddleware';
import './favorites.css';

const Favorites = ({
  favoritesList,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="favorites">
        Favorites List:
        <br />
        {favoritesList.length === 0
          ? 'Empty'
          : favoritesList.map((item, index) => (
            <button className="btn btn-primary" type="button" data-item={item} key={index} onClick={(event) => {
              event.preventDefault();
              dispatch(getWeather(item))
            }}>
              {item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
