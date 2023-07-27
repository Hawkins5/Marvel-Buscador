import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCharacters } from '../../API/marvelAPI';
import { CharactersContainer, CharactersHeader, CharactersInput, CharacterCard, CharacterImage, CharacterName, FavoriteButton, ErrorMessage } from '../../Components/CharacterStyles';
import { AppContext } from '../../Contexts/AppContext';

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const { addCharacterToFavorites, removeCharacterFromFavorites, characters: favoriteCharacters } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const charactersData = await fetchCharacters(searchTerm);
      setCharacters(charactersData);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handleCharacterClick = (character) => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <CharactersContainer>
      <CharactersHeader>Marvel Characters</CharactersHeader>
      <CharactersInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a character"
      />
      <button onClick={handleSearch}>Search</button>

      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character.id}>
            <CharacterImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <CharacterName>{character.name}</CharacterName>
            <FavoriteButton
              onClick={() =>
                favoriteCharacters.some((favCharacter) => favCharacter.id === character.id)
                  ? removeCharacterFromFavorites(character.id)
                  : addCharacterToFavorites(character)
              }
              isFavorite={favoriteCharacters.some((favCharacter) => favCharacter.id === character.id)}
            >
              {favoriteCharacters.some((favCharacter) => favCharacter.id === character.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </FavoriteButton>
            <button onClick={() => handleCharacterClick(character)}>View Details</button>
          </CharacterCard>
        ))
      ) : (
        <ErrorMessage>No characters found.</ErrorMessage>
      )}
    </CharactersContainer>
  );
};

export default Characters;
