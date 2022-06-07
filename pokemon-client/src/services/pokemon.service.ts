import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const getPokemons = async () => {
  return axiosInstance.get('/pokemon')
};

export const getPokemonById = (pokemon_id: string) => {
  return axiosInstance.get(`/pokemon/${pokemon_id}`);
};

export const newPokemon = (pokemonData: any) => {
  return axiosInstance.post('/pokemon', pokemonData);
};

export const deletePokemonById = (pokemon_id: string) => {
  return axiosInstance.delete(`/pokemon/${pokemon_id}`)
};

export const editPokemonById = (pokemon_id: string) => {
  return axiosInstance.delete(`/pokemon/${pokemon_id}`)
};


