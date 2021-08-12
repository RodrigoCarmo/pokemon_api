import Pokemon from '../../../models/Pokemon';
import SavePokemon from '../../../models/SavePokemon';

async function findPokemons() {
  const pokemons = await Pokemon.PokemonModel.find().skip(Math.random() * 801).limit(10).exec();

  pokemons.forEach((pokemon) => SavePokemon.SavePokemonModel.create({ _id: pokemon.id }));

  return pokemons;
}

export default {
  Query: {
    pokemons: findPokemons,

  },
  Mutation: {
    createPokemon: (_: any, { data }: any) => Pokemon.PokemonModel.create(data),
  },
};
