import { useEffect, useState } from 'react';
import { getPokemons, deletePokemonById } from '../services/pokemon.service';
import { Pokemon } from './Pokemon';

import { Row, Col } from 'antd';

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemons().then((response) => {
      setPokemonData(response.data);
    });
  }, []);

  const deletePokemonHandler = (deletedPokemonId: string) => {
    deletePokemonById(deletedPokemonId);
    getPokemons().then((response) => {
      setPokemonData(response.data);
    });
  }

  return (
    <>
      {pokemonData.length > 0 ? (
        <Row>
          {pokemonData.map((pokemon: any) => {
            return (
              <Col sm={12} xl={6} key={pokemon._id}><Pokemon {...pokemon} onDeletePokemon={deletePokemonHandler} /></Col>
            );
          })}
        </Row>
      ) : (
        <div>No pokemon Found</div>
      )}
    </>
  );
};


