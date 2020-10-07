import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

// actions type
const SET_CARD_DATA = 'SET_CARD_DATA';
const FETCHING_ERROR = 'FETCHING_ERROR';
const SET_FAVORITES_LIST = 'SET_FAVORITES_LIST';
const SET_IS_FAVORITE_CITY = 'SET_IS_FAVORITE_CITY';

// api
const API = '9f35c9f77e6ec0ef94c0fdf3ff482571';

const initialState = { data: {}, favoritsList: [] };

// rootReducer
const rootReducer = (state = initialState, action) => {
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
    case SET_FAVORITES_LIST:
      return {
        ...state,
        favoritsList: action.favoritsList,
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

// Async (redux-thunk)

export const getWeather = (inputCity) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API}&units=metric`);
    const { data: { name, main: { temp } } } = response;
    const roundTemp = Math.round(temp);
    dispatch(setCardData(name, roundTemp, true));
    localStorage.setItem('history', JSON.stringify({ city: name, temp: roundTemp }));
  } catch (error) {
    dispatch(errorHandler(error, false));
  }
};

// createStore

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
