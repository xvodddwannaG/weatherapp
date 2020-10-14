import {
  SET_CARD_DATA, FETCHING_ERROR, SET_FAVORITES_LIST, SET_IS_FAVORITE_CITY, IS_CITY_NAME_VALID
} from './actionType';

// Actions Creators

export const setIsFavoriteCity = (payload: boolean) => ({
  type: SET_IS_FAVORITE_CITY,
  payload,
});

export const setCardData = (city: string, temp: number) => ({
  type: SET_CARD_DATA,
  city,
  temp,
});

export const errorHandler = (error: any) => ({
  type: FETCHING_ERROR,
  error,
});

export const setFavoritsList = (favoritsList: Set<any>) => ({
  type: SET_FAVORITES_LIST,
  favoritsList,
});

export const setIsCityNameValid = (payload: boolean) => ({
  type: IS_CITY_NAME_VALID,
  payload,
});
