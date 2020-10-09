import { combineReducers } from 'redux';
import {
  SET_CARD_DATA, FETCHING_ERROR, SET_FAVORITES_LIST, SET_IS_FAVORITE_CITY,
} from './actionType';

const initialStateCardData = { data: {} };

const cardData = (state = initialStateCardData, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return {
        ...state,
        data: {
          city: action.city,
          temp: action.temp,
        },
        isCityNameValid: action.isCityNameValid || state.isCityNameValid,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        isCityNameValid: false,
        error: action.error,
      };
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

const favoritesList = (state = new Set([]), action) => {
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
