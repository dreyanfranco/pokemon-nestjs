import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Pokemon', schema: PokemonSchema}
    ])
  ],
  controllers: [PokemonController],
  providers: [PokemonService]
})
export class PokemonModule {}
