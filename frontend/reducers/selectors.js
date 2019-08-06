
export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon);
}

export const selectPokeItems = (state, pokemon) => {
    return pokemon.item_ids.map((id) => state.entities.items[id])
}

export const selectPokemonItem = (state, itemId) => {
   return state.entities.items[itemId];
}