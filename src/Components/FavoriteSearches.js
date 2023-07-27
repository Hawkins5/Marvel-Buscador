import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';

const FavoriteSearches = () => {
  const { favoriteSearches } = useContext(AppContext);

  return (
    <div>
      <h1>Favorite Searches</h1>
      {favoriteSearches.length > 0 ? (
        <ul>
          {favoriteSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      ) : (
        <p>No tienes búsquedas favoritas.</p>
      )}
    </div>
  );
};

export default FavoriteSearches;
