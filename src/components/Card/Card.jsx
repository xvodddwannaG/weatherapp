import React from 'react';

export const Card = ({
  temp, city, addToFavorites, isFavoriteCity, deleteFavorites,
}) => {

  const changeFavoriteButtonHandler = () => {
    if (isFavoriteCity === true) {
      deleteFavorites(city)
    } else if (isFavoriteCity === false && city !== '') {
      addToFavorites(city)
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card">
          City: {city},
          Temp: {temp}
        </div>

        <button
          className={`btn btn-sm ${isFavoriteCity ? 'btn-danger' : 'btn-success'}`}
          type="button" onClick={() => { changeFavoriteButtonHandler() }}>
          {isFavoriteCity ? 'Remove from Favorites' : 'Add city to Favorites'}
        </button>
      </div>
    </div>
  );
};
