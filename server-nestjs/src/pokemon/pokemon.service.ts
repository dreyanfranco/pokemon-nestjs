import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Pokemon } from './interfaces/Pokemon.interface';
import { CreatePokemonDTO } from './dto/pokemon.dto';

@Injectable()
export class PokemonService {
    constructor(@InjectModel('Pokemon') private pokemonModel: Model<Pokemon>) { }

    async getPokemons(): Promise<Pokemon[]> {
        const pokemonsList = await this.pokemonModel.find()
        return pokemonsList;
    }

    async getPokemon(pokemon_id: string): Promise<Pokemon> {
        const findPokemonById = await this.pokemonModel.findById(pokemon_id);
        return findPokemonById;
    }

    async createPokemon(createPokemonDTO: CreatePokemonDTO): Promise<Pokemon> {
        const createdPokemon = new this.pokemonModel(createPokemonDTO);
        return await createdPokemon.save();
    }

    async deletePokemon(pokemon_id: string): Promise<Pokemon> {
        const deletedPokemon = await this.pokemonModel.findByIdAndDelete(pokemon_id);
        return deletedPokemon;
    }

    async updatedPokemon(pokemon_id: string, createPokemonDTO: CreatePokemonDTO): Promise<Pokemon> {
        const updatedPokemon = await this.pokemonModel.findByIdAndUpdate(pokemon_id, createPokemonDTO, { new: true });
        return updatedPokemon;
    }
}
