
export const selectAllPokemon = (state) => {
    let values = Object.values(state.entities.pokemon);
    let pokemon_arr = [];
    values.map((key) => {
        pokemon_arr.push(key);
    })
    return pokemon_arr;
}