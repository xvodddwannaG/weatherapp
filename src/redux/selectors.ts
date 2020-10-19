import { useSelector } from "react-redux";
type DataType = {
    city: string
    temp: number
    isFavoriteCity?: boolean
};

type StateType = {
    cardData: {
        data: {
            city: string
            temp: number
            isFavoriteCity: boolean
        },
        isCityNameValid: boolean
        error: any
    },
    favoritesList: Set<string>
}

const favoritesListReduxFunc = (state: StateType): Set<string> => state.favoritesList;
const isFavoriteCityRedux = (state: StateType): boolean => state.cardData.data.isFavoriteCity;
const isCityNameValidRedux = (state: StateType): boolean => state.cardData.isCityNameValid;
const dataRedux = (state: StateType): DataType => state.cardData.data;

export const useFavoritesList = () => useSelector(favoritesListReduxFunc);
export const useIsFavoriteCity = () => useSelector(isFavoriteCityRedux);
export const useIsCityNameValid = () => useSelector(isCityNameValidRedux);
export const useData = () => useSelector(dataRedux);