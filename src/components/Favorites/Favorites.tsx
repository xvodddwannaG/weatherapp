import * as React from 'react'
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/applyMiddleware';
import './favorites.css';

const Favorites: React.FC = ({
  favoritesList,
}) => {
  const dispatch = useDispatch();
  const favoritesListArray = [...favoritesList];

  return (
    <div>
      <div className="favorites">
        Favorites List:
        <br />
        {favoritesListArray.length === 0
          ? 'Empty'
          : favoritesListArray.map((item, index) => (
            <button
              className="btn btn-primary"
              type="button"
              data-item={item}
              key={index}
              onClick={(event) => {
                event.preventDefault();
                dispatch(getWeather(item));
              }}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
