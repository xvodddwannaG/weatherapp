import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFavoritsList, setIsFavoriteCity } from '../../redux/actionCreator';
import { favoritesListReduxFunc, isFavoriteCityRedux, dataRedux } from '../../redux/selectors';

const Card = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => dataRedux(state));
  const isFavoriteCity = useSelector((state) => isFavoriteCityRedux(state));
  const favoritesListRedux = useSelector((state) => favoritesListReduxFunc(state));
  const changeFavoriteButtonHandler = () => {
    if (isFavoriteCity) {
      deleteFavorites(data.city);
    } else {
      addToFavorites(data.city);
    }
  };

  const addToFavorites = (city) => {
    if (favoritesListRedux.has(city)) {
      dispatch(setIsFavoriteCity(false));
    } else {
      favoritesListRedux.add(city);
      dispatch(setFavoritsList(favoritesListRedux));
      dispatch(setIsFavoriteCity(true));
      localStorage.setItem('favorites', JSON.stringify([...favoritesListRedux]));
    }
  };

  const deleteFavorites = (city) => {
    favoritesListRedux.delete(city);
    dispatch(setIsFavoriteCity(false));
    dispatch(setFavoritsList(favoritesListRedux));
    localStorage.setItem('favorites', JSON.stringify([...favoritesListRedux]));
  };

  if (!data.city) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card">
          City: {data.city},
          Temp: {data.temp}
        </div>
        <button
          className={`btn btn-sm ${isFavoriteCity ? 'btn-danger' : 'btn-success'}`}
          type="button"
          onClick={() => { changeFavoriteButtonHandler(); }}
        >
          {isFavoriteCity ? 'Remove from Favorites' : 'Add city to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default Card;
