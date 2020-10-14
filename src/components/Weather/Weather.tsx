import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import { setCardData, setFavoritsList, setIsFavoriteCity } from '../../redux/actionCreator';
import { useFavoritesList, useIsFavoriteCity } from '../../redux/selectors';

const Weather = () => {
  const dispatch = useDispatch();
  const favoritesListRedux = useFavoritesList();
  const isFavoriteCity = useIsFavoriteCity();

  useEffect(() => {
    const previousRequest = JSON.parse(localStorage.getItem('history')!);
    if (previousRequest) {
      dispatch(setCardData(previousRequest.city, previousRequest.temp));
    }

    const favoritsList = new Set(JSON.parse(localStorage.getItem('favorites')!));
    dispatch(setFavoritsList(favoritsList));

    const isFavoriteCityEffect = previousRequest && favoritesListRedux.has(previousRequest.city);
    dispatch(setIsFavoriteCity(isFavoriteCityEffect));
  }, [isFavoriteCity]);

  return (
    <div className="weather">
      <Form />
      <Card />
      <Favorites
        favoritesList={favoritesListRedux}
      />
    </div>
  );
};

export default Weather;
