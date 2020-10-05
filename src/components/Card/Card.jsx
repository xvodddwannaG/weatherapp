import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({
  addToFavorites, isFavoriteCity, deleteFavorites,
}) => {
  const data = useSelector((state) => state.data);
  const changeFavoriteButtonHandler = () => {
    if (isFavoriteCity === true) {
      deleteFavorites(data.city);
    } else {
      addToFavorites(data.city);
    }
  };

  if (data.city === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="card">
          City: {data.city},
          Temp: {data.temp}
        </div>
        <button
          className={`btn btn-sm ${isFavoriteCity ? 'btn-danger' : 'btn-success'}`}
          type="button"
          onClick={() => { changeFavoriteButtonHandler(); }}
        >
          {isFavoriteCity ? 'Remove from Favorites' : 'Add city to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default Card;
