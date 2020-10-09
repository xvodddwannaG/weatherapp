import axios from 'axios';
import { setCardData, errorHandler } from './actionCreator';

const API = '9f35c9f77e6ec0ef94c0fdf3ff482571';

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
