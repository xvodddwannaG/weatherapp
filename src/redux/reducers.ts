import { combineReducers } from 'redux';
import {
  SET_CARD_DATA, FETCHING_ERROR, SET_FAVORITES_LIST, SET_IS_FAVORITE_CITY, IS_CITY_NAME_VALID
} from './actionType';

const initialStateCardData = { data: {} };

const cardData = (state = initialStateCardData, action: CardDataActionType) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return {
        ...state,
        data: {
          city: action.city,
          temp: action.temp,
        },
      };
    case FETCHING_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case IS_CITY_NAME_VALID:
      return {
        ...state,
        isCityNameValid: action.payload,
      }
    case SET_IS_FAVORITE_CITY:
      return {
        ...state,
        data: {
          ...state.data,
          isFavoriteCity: action.payload,
        },
      };
    default:
      return state;
  }
};

const favoritesList = (state = new Set(), action: FavoritesListActionType) => {
  switch (action.type) {
    case SET_FAVORITES_LIST:
      return action.favoritsList || state;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cardData,
  favoritesList,
});

type FavoritesListActionType = {
  type: string,
  favoritsList?: Set<any>,
}

type CardDataActionType = {
  type: string,
  city?: string,
  temp?: number,
  payload?: boolean,
  error?: any,
}