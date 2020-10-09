import {SET_CARD_DATA, FETCHING_ERROR, SET_FAVORITES_LIST, SET_IS_FAVORITE_CITY} from './actionType';

// Actions Creators

export const setIsFavoriteCity = (payload) => ({
  type: SET_IS_FAVORITE_CITY,
  payload,
});

export const setCardData = (city, temp, isCityNameValid) => ({
  type: SET_CARD_DATA,
  city,
  temp,
  isCityNameValid,
});

export const errorHandler = (error, isCityNameValid) => ({
  type: FETCHING_ERROR,
  error,
  isCityNameValid,
});

export const setFavoritsList = (favoritsList) => ({
  type: SET_FAVORITES_LIST,
  favoritsList,
});