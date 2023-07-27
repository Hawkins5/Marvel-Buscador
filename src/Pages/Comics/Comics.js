import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';

const Comics = () => {
  const { comics } = useContext(AppContext);

  return (
    <div>
      <h2>Marvel Comics</h2>
      <Link to="/">Volver a personajes</Link>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comics;
