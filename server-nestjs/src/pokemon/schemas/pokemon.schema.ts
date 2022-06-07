import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PokemonTypes } from '../interfaces/enums/PokemonTypes.enum';
// import { Schema } from 'mongoose';

export type PokemonDocument = Pokemon & Document;

@Schema({ timestamps: true })
export class Pokemon {
    @Prop({ require: true })
    name: string;

    @Prop(String)
    imageUrl: string;

    @Prop(Number)
    health: number

    @Prop(raw({
        type: {
            type: String,
            enum: PokemonTypes,
            default: PokemonTypes.normal
        }
    }))
    details: Record<string, any>;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

// export const PokemonSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     imageUrl: {
//         type: String
//     },
//     health: {
//         type: Number
//     },
// }, {
//     timestamps: true
// });





