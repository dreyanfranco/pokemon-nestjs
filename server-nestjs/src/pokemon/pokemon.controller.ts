import { Controller, Get, Post, Res, Body, Param, NotFoundException, Delete, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dto/pokemon.dto';

@Controller('pokemon')
export class PokemonController {
    constructor(private pokemonService: PokemonService) { }
    
    @Get()
    async getPokemons(@Res() res) {
        const pokemonsList = await this.pokemonService.getPokemons();
        return res.status(200).json(pokemonsList);
    }

    @Post()
    async createPokemon(@Res() res, @Body() createPokemonDTO: CreatePokemonDTO) {
        const createdPokemon = await this.pokemonService.createPokemon(createPokemonDTO);
        return res.status(200).json(createdPokemon);
    }

    @Get('/:pokemon_id')
    async getPokemon(@Res() res, @Param('pokemon_id') pokemon_id) {
        const findPokemonById = await this.pokemonService.getPokemon(pokemon_id);
        // if(!findPokemonById) throw new NotFoundException('Pokemon does not exists');
        return res.status(200).json(findPokemonById);
    }

    @Delete('/:pokemon_id')
    async deletePokemon(@Res() res, @Param('pokemon_id') pokemon_id) {
        const pokemonIdAndDelete = await this.pokemonService.deletePokemon(pokemon_id);
        return res.status(200).json(pokemonIdAndDelete);
    }

    @Put('/:pokemon_id')
    async updatePokemon(@Res() res, @Body() createPokemonDTO, @Param('pokemon_id') pokemon_id) {
        const pokemonUpdatedById = await this.pokemonService.updatedPokemon(pokemon_id, createPokemonDTO);
        return res.status(200).json(pokemonUpdatedById)
    }


}
