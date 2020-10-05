import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({
  addToFavorites, isFavoriteCity, deleteFavorites,
}) => {
  const changeFavoriteButtonHandler = () => {
    if (isFavoriteCity === true) {
      deleteFavorites(data.city);
    } else {
      addToFavorites(data.city);
    }
  };

  const dispatch = useDispatch()
  const data = useSelector(state => state.data);

  if (data.city === undefined) {
    return (
      <div></div>
    )
  } else {
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
  }
};

export default Card;
