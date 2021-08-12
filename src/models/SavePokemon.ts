import { Schema, Model, model } from 'mongoose';
import IPokemon from './interface/IPokemon';

const SavePokemonSchema = new Schema(
  {
    abilities: { type: String },
    against_bug: { type: String },
    against_dark: { type: String },
    against_dragon: { type: String },
    against_electric: { type: String },
    against_fairy: { type: String },
    against_fight: { type: String },
    against_fire: { type: String },
    against_flying: { type: String },
    against_ghost: { type: String },
    against_grass: { type: String },
    against_ground: { type: String },
    against_ice: { type: String },
    against_normal: { type: String },
    against_poison: { type: String },
    against_psychic: { type: String },
    against_rock: { type: String },
    against_steel: { type: String },
    against_water: { type: String },
    attack: { type: String },
    base_egg_steps: { type: String },
    base_happiness: { type: String },
    base_total: { type: String },
    capture_rate: { type: String },
    classfication: { type: String },
    defense: { type: String },
    experience_growth: { type: String },
    height_m: { type: String },
    hp: { type: String },
    japanese_name: { type: String },
    name: { type: String },
    percentage_male: { type: String },
    pokedex_number: { type: String },
    sp_attack: { type: String },
    sp_defense: { type: String },
    speed: { type: String },
    type1: { type: String },
    type2: { type: String },
    weight_kg: { type: String },
    generation: { type: String },
    is_legendary: { type: String },
  },
  { timestamps: true, collection: 'save_pokemon' },
);
const SavePokemonModel: Model<IPokemon> = model<IPokemon>('SavePokemon', SavePokemonSchema);
export default { SavePokemonModel };