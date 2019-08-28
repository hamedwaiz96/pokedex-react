import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import {RECEIVE_SINGLE_LOCATION} from '../actions/location_actions';
import merge from 'lodash/merge';

const locationReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_SINGLE_POKEMON):
            if(action.whole.locations===undefined){
                return {};
            } else {
                return action.whole.locations;
            }
        case(RECEIVE_SINGLE_LOCATION):
            let new_state = {
                [action.location.id]: action.location
            };
            return merge({}, state, new_state);
        default:
            return state;
    }
}

export default locationReducer;