import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Contexts/AppContext';

const FavoriteComics = () => {
  const { comics } = useContext(AppContext);

  return (
    <div>
      <h1>Favorite Comics</h1>
      {comics.length > 0 ? (
        <ul>
          {comics.map((comic) => (
            <li key={comic.id}>
              <Link to={`/comics/${comic.id}`}>{comic.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes cómics favoritos.</p>
      )}
    </div>
  );
};

export default FavoriteComics;
