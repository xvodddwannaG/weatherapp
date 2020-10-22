import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import { setCardData, setFavoritsList, setIsFavoriteCity } from '../../redux/actionCreator';
import { useFavoritesList, useIsFavoriteCity } from '../../redux/selectors';

type PreviousRequestType = {
    city: string,
    temp: number,
} | null


const Weather = () => {
  const dispatch = useDispatch();
  const favoritesList = useFavoritesList();
  const isFavoriteCity = useIsFavoriteCity();

  useEffect(() => {
    const previousRequest: PreviousRequestType = JSON.parse(localStorage.getItem('history') || 'null');
    if (previousRequest) {
      dispatch(setCardData(previousRequest.city, previousRequest.temp));
    }

    const favoritsList: Set<string> | null= new Set(JSON.parse(localStorage.getItem('favorites') || 'null'));
    dispatch(setFavoritsList(favoritsList));

    const isFavoriteCityEffect: boolean = Boolean(previousRequest && favoritesList.has(previousRequest.city));
    dispatch(setIsFavoriteCity(isFavoriteCityEffect));
  }, [isFavoriteCity]);

  return (
    <div className="weather">
      <Form />
      <Card />
      <Favorites
        favoritesList={favoritesList}
      />
    </div>
  );
};

export default Weather;
