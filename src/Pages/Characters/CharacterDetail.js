  import React, { useContext, useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import { fetchComics } from "../../API/marvelAPI"
  import {
    CharacterDetailContainer,
    CharacterDetailHeader,
    CharacterName,
    CharacterDescription,
    CharacterImage,
    ComicsContainer,
    ComicCard,
    ComicImage,
    ComicTitle,
    ComicDescription,
    ComicPages,
    ErrorMessage,
  } from './CharacterDetailStyles';
  import { AppContext } from '../../Contexts/AppContext';

  const CharacterDetail = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
    const [comics, setComics] = useState([]);
    const { characters, addCharacterToFavorites, removeCharacterFromFavorites } = useContext(AppContext);

    useEffect(() => {
      const character = characters.find((char) => char.id === parseInt(characterId));
      if (character) {
        setCharacter(character);
      }
    }, [characters, characterId]);

    useEffect(() => {
      const fetchComicsData = async () => {
        try {
          const comicsData = await fetchComics(character.name);
          setComics(comicsData);
        } catch (error) {
          console.error('Error fetching comics:', error);
        }
      };
      fetchComicsData();
    }, [character]);

    const handleAddToFavorites = () => {
      addCharacterToFavorites(character);
    };

    const handleRemoveFromFavorites = () => {
      removeCharacterFromFavorites(character.id);
    };

    if (!character) {
      return <ErrorMessage>No se encontró el personaje.</ErrorMessage>;
    }

    return (
      <CharacterDetailContainer>
        <CharacterDetailHeader>
          <CharacterName>{character.name}</CharacterName>
          {characters.some((char) => char.id === character.id) ? (
            <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
          ) : (
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
          )}
        </CharacterDetailHeader>
        <CharacterImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <CharacterDescription>{character.description || 'No description available.'}</CharacterDescription>

        <ComicsContainer>
          {comics.map((comic) => (
            <ComicCard key={comic.id}>
              <ComicImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <ComicTitle>{comic.title}</ComicTitle>
              <ComicDescription>{comic.description || 'No description available.'}</ComicDescription>
              <ComicPages>Pages: {comic.pageCount}</ComicPages>
            </ComicCard>
          ))}
        </ComicsContainer>
      </CharacterDetailContainer>
    );
  };

  export default CharacterDetail;
