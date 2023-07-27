import styled from 'styled-components';

export const CharacterDetailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const CharacterDetailHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  button {
    font-size: 14px;
    padding: 8px 12px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const CharacterName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const CharacterDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ComicCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  span {
    display: block;
    margin-bottom: 5px;
  }
`;

export const ComicImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const ComicTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ComicDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ComicPages = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;
