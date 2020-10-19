import * as React from 'react'
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/applyMiddleware';
import './favorites.css';

type PropType = { favoritesList: Set<string> };

const Favorites = ({
  favoritesList,
}:PropType) => {
  const dispatch = useDispatch();
  const favoritesListArray: Array<string> = [...favoritesList];

  const onClickButtonHandler = (event: React.MouseEvent<HTMLButtonElement>, item: string): void => {
      event.preventDefault();
      dispatch(getWeather(item));
  };

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
              onClick={(event) => onClickButtonHandler(event, item)}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
