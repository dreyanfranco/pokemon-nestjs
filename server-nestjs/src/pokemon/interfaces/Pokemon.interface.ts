import { PokemonTypes } from "./enums/PokemonTypes.enum";

export interface Pokemon {
    name: string,
    imageUrl: string,
    health: number,
    type: PokemonTypes
}



