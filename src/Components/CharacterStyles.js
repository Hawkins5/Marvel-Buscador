import styled from 'styled-components';

export const CharactersContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const CharactersHeader = styled.h1`
  text-align: center;
`;

export const CharactersInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CharacterCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const CharacterImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CharacterName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FavoriteButton = styled.button`
  background-color: ${(props) => (props.isFavorite ? 'red' : 'green')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 18px;
`;
