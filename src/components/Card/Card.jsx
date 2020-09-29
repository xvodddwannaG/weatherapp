import React from 'react';


export const Card = ({ temp, city, addToFavorites, isIncludeInFavorite, deleteFavorites }) => {
  let previousRequest;
  let button;


  const history = JSON.parse(localStorage.getItem('history'));
  if (history !== null) {
    previousRequest = JSON.parse(localStorage.getItem('history'));
  } else {
    previousRequest = { city: '', temp: '' }
  }



  if (isIncludeInFavorite === true) {
    button = <button
      className="btn btn-danger btn-sm"
      type="button"
      onClick={() => buttonDeliteFavoriteClickHandler(city)}
    >
      Remove from Favorites
    </button>
  } else {
    button = <button
      className="btn btn-success btn-sm"
      type="button"
      onClick={() => buttonAddFavoriteClickHandler(city)}

    >
      Add city to Favorites
        </button>
  }


  const card = city && temp !== ''
    ? <div className="card">City: {city}, Temp: {temp}</div>
    : <div className="card">City: {previousRequest.city}, Temp: {previousRequest.temp}</div>


  const buttonAddFavoriteClickHandler = (city) => {
    if (city !== '') {
      addToFavorites(city)
    } else if (previousRequest.city !== '') {
      addToFavorites(previousRequest.city)
    }
  }

  const buttonDeliteFavoriteClickHandler = (city) => {
    if (city !== '') {
      console.log('object');
      deleteFavorites(city)
    } else if (previousRequest.city !== '') {
      deleteFavorites(previousRequest.city)
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        {card}
        {button}
      </div>
    </div>
  );
};
