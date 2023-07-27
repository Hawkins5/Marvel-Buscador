import axios from 'axios';
import { MD5 } from 'crypto-js';

const BASE_URL = 'http://gateway.marvel.com/v1/public/';
const API_KEY = "4ac51ffe073806ebf937e32961a744a4"
const PRIVATE_KEY = "3969c9450749f7677defc74ff283ee72dc26a04c"

const generateHash = (timestamp) => {
  const hashString = timestamp + PRIVATE_KEY + API_KEY;
  return MD5(hashString).toString();
};

const fetchCharacters = async (searchTerm) => {
  try {
    const timestamp = Date.now().toString();
    const hash = generateHash(timestamp);

    const response = await axios.get(`${BASE_URL}/characters`, {
      params: {
        apikey: API_KEY,
        ts: timestamp,
        hash: hash,
        name: searchTerm,
        orderBy: 'name',
      },
    });

    if (response?.data?.data?.results && response.data.data.results.length > 0) {
      return response.data.data.results;
    } else {
      throw new Error('No se encontraron personajes.');
    }
  } catch (error) {
    throw new Error('Error al obtener los personajes:', error);
  }
};

const fetchComics = async (characterName) => {
  try {
    const timestamp = Date.now().toString();
    const hash = generateHash(timestamp);

    const response = await axios.get(`${BASE_URL}/characters`, {
      params: {
        apikey: API_KEY,
        ts: timestamp,
        hash: hash,
        name: characterName,
        orderBy: 'name',
      },
    });

    if (response?.data?.data?.results && response.data.data.results.length > 0) {
      const characterId = response.data.data.results[0].id;

      const comicsResponse = await axios.get(`${BASE_URL}/characters/${characterId}/comics`, {
        params: {
          apikey: API_KEY,
          ts: timestamp,
          hash: hash,
          orderBy: '-modified',
        },
      });

      if (comicsResponse?.data?.data?.results) {
        return comicsResponse.data.data.results;
      } else {
        throw new Error('No se pudieron obtener los comics relacionados con el personaje.');
      }
    } else {
      throw new Error('No se encontro el personaje especificado.');
    }
  } catch (error) {
    throw new Error('Error al obtener los comics del personaje:', error);
  }
};

export { fetchCharacters, fetchComics };
