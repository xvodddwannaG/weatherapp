import { useSelector } from "react-redux";

const favoritesListReduxFunc = (state) => state.favoritesList;
const isFavoriteCityRedux = (state) => state.cardData.data.isFavoriteCity;
const isCityNameValidRedux = (state) => state.cardData.isCityNameValid;
const dataRedux = (state) => state.cardData.data;

export const useFavoritesList = () => useSelector(favoritesListReduxFunc);
export const useIsFavoriteCity = () => useSelector(isFavoriteCityRedux);
export const useIsCityNameValid = () => useSelector(isCityNameValidRedux);
export const useData = () => useSelector(dataRedux);