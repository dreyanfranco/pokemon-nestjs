import { Pokemon as PokemonInterface } from "../interfaces/Pokemon.interface";

import { Card, Button } from 'antd';

const { Meta } = Card;

export const Pokemon = ({ name, type, imageUrl, health, onDeletePokemon }: any) => {

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt={name}
            src={imageUrl}
          />
        }
      >
        <Meta
          title={name}
          description={health}
        />
      </Card>
      {/* <Button danger >
        Delete
      </Button> */}
    </>

  );
};


