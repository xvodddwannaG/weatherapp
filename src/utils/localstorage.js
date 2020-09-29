export const initLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('favorites')) === null) {
    localStorage.setItem('favorites', JSON.stringify([]));
    return [];
  }
  return JSON.parse(localStorage.getItem('favorites'));
};
