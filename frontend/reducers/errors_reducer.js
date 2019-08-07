import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';
import merge from 'lodash/merge'

const errorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_POKEMON_ERRORS):
            return merge([], state, action.errors);
        default:
            return state;
    }
}

export default errorsReducer;