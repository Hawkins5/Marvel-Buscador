import React, { useContext, useState } from 'react';
import { AppContext } from '../Contexts/AppContext';

const Favorites = () => {
  const { characters, comics, removeCharacterFromFavorites, removeComicFromFavorites, addSearchToFavorites } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    
    addSearchToFavorites(searchTerm);
    setSearchTerm('');
  };

  return (
    <div>
      <h1>Favorites</h1>
      <h2>Favorite characters</h2>
      {characters.map((character) => (
        <div key={character.id}>
          <span>{character.name}</span>
          <button onClick={() => removeCharacterFromFavorites(character.id)}>Remove from Favorites</button>
        </div>
      ))}

      <h2>Favorite Comics</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <span>{comic.title}</span>
            <button onClick={() => removeComicFromFavorites(comic.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>

      <h2>Favorite Searches</h2>
      <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default Favorites;
