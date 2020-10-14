import { useSelector } from "react-redux";

const favoritesListReduxFunc = (state: any) => state.favoritesList;
const isFavoriteCityRedux = (state: any) => state.cardData.data.isFavoriteCity;
const isCityNameValidRedux = (state: any) => state.cardData.isCityNameValid;
const dataRedux = (state: any) => state.cardData.data;

export const useFavoritesList = () => useSelector(favoritesListReduxFunc);
export const useIsFavoriteCity = () => useSelector(isFavoriteCityRedux);
export const useIsCityNameValid = () => useSelector(isCityNameValidRedux);
export const useData = () => useSelector(dataRedux);