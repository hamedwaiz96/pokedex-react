import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";
import merge from 'lodash/merge';

const pokemonReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ALL_POKEMON):
            return merge({}, state, action.pokemon);
        case(RECEIVE_SINGLE_POKEMON):
            return merge({}, state, {[action.whole.pokemon.id]: action.whole.pokemon})
        default:
            return state;
    }
}

export default pokemonReducer;