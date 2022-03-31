import { pokemonApi } from "../api/pokemonApi";
import {
  FetchAllPokemonResponse,
  Pokemon,
  SmallPokemon,
} from "../interfaces/fetchAllPokemonResponse";

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  const resp = await pokemonApi.get<FetchAllPokemonResponse>(
    "/pokemon?limit=1500"
  );
  // console.log(resp);
  const smallPokemonList = resp.data.results;
  // resp.data.results[0].
  return transformSmallPokemonIntoPokemon(smallPokemonList);
};

const transformSmallPokemonIntoPokemon = (
  smallPokemonList: SmallPokemon[]
): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map((poke) => {
    const pokeArr = poke.url.split("/");
    const id = pokeArr[6];
    // console.log(pokeArr);
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id: id,
      name: poke.name,
      pic: pic,
    };
  });

  // console.log(pokemonArr);

  return pokemonArr;
};
