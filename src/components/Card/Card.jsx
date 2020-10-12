import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavoritsList, setIsFavoriteCity } from '../../redux/actionCreator';
import { useFavoritesList, useIsFavoriteCity, useData } from '../../redux/selectors';

const Card = () => {
  const dispatch = useDispatch();
  const { city, temp } = useData();
  const isFavoriteCity = useIsFavoriteCity();
  const favoritesListRedux = useFavoritesList();

  const favoriteButtonHandler = () => {
    const newFavoritesList = new Set([...favoritesListRedux]);
    if (isFavoriteCity) {
      newFavoritesList.delete(city);
      dispatch(setIsFavoriteCity(false));
    } else {
      newFavoritesList.add(city);
      dispatch(setIsFavoriteCity(true));
    };
    dispatch(setFavoritsList(newFavoritesList));
    localStorage.setItem('favorites', JSON.stringify([...newFavoritesList]));
  };

  if (!city) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card">
          City: {city},
          Temp: {temp}
        </div>
        <button
          className={`btn btn-sm ${isFavoriteCity ? 'btn-danger' : 'btn-success'}`}
          type="button"
          onClick={favoriteButtonHandler}
        >
          {isFavoriteCity ? 'Remove from Favorites' : 'Add city to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default Card;
