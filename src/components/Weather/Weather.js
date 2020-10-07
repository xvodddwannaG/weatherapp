import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import { setCardData, setFavoritsList, setIsFavoriteCity } from '../../redux/index';

const Weather = () => {
  const dispatch = useDispatch();
  const favoritesListRedux = useSelector((state) => state.favoritsList);
  const isFavoriteCity = useSelector((state) => state.data.isFavoriteCity);

  useEffect(() => {
    const previousRequest = JSON.parse(localStorage.getItem('history'));
    if (previousRequest) {
      dispatch(setCardData(previousRequest.city, previousRequest.temp));
    }

    const favoritsList = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(setFavoritsList(favoritsList));

    const isFavoriteCityEffect = previousRequest !== null && favoritesListRedux.includes(previousRequest.city);
    dispatch(setIsFavoriteCity(isFavoriteCityEffect));
  }, [isFavoriteCity]);

  return (
    <div className="weather">
      <Form />
      <Card/>
      <Favorites
        favoritesList={favoritesListRedux}
      />
    </div>
  );
};

export default Weather;
