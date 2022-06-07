import { PokemonTypes } from "./enums/PokemonTypes.enum";

export interface Pokemon {
    id: string,
    index: string,
    name: string,
    type: PokemonTypes,
    imageUrl: string,
    health: number
}