import {
  SET_CARD_DATA, FETCHING_ERROR, SET_FAVORITES_LIST, SET_IS_FAVORITE_CITY, IS_CITY_NAME_VALID
} from './actionType';

// Actions Creators
type SetIsFavoriteCityType = {type: string, payload: boolean};
type SetCardDataType = {type: string, city: string, temp: number};
type ErrorHandlerType = {type: string, error: any};
type SetFavoritesListType = {type: string, favoritsList: Set<string>};
type SetIsCityNameValidType = {type: string, payload: boolean};


export const setIsFavoriteCity = (payload: boolean): SetIsFavoriteCityType => ({
  type: SET_IS_FAVORITE_CITY,
  payload,
});

export const setCardData = (city: string, temp: number): SetCardDataType => ({
  type: SET_CARD_DATA,
  city,
  temp,
});

export const errorHandler = (error: any): ErrorHandlerType => ({
  type: FETCHING_ERROR,
  error,
});

export const setFavoritsList = (favoritsList: Set<any>): SetFavoritesListType => ({
  type: SET_FAVORITES_LIST,
  favoritsList,
});

export const setIsCityNameValid = (payload: boolean): SetIsCityNameValidType => ({
  type: IS_CITY_NAME_VALID,
  payload,
});
