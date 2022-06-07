import { PokemonTypes } from "../interfaces/enums/PokemonTypes.enum";

export class CreatePokemonDTO {
    name: string;
    imageUrl: string;
    health: number;
    type: PokemonTypes;
}