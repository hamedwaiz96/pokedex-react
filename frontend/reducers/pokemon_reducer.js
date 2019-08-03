import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ALL_POKEMON):
            return action.pokemon;
        case(RECEIVE_SINGLE_POKEMON):
            let new_state = Object.assign({}, state);
            new_state[action.whole.pokemon.id] = action.whole.pokemon;
            return new_state;
        default:
            return state;
    }
}

export default pokemonReducer;