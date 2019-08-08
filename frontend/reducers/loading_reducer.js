import {START_LOADING_SINGLE_POKEMON, START_LOADING_ALL_POKEMON, RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const initialState = {
    indexLoading: false,
    detailLoading: false
}

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(START_LOADING_ALL_POKEMON):
            return merge({}, state, {indexLoading: true});
        case(START_LOADING_SINGLE_POKEMON):
            return merge({}, state, { detailLoading: true });
        case(RECEIVE_ALL_POKEMON):
            return merge({}, state, { indexLoading: false });
        case(RECEIVE_SINGLE_POKEMON):
            return merge({}, state, { detailLoading: false });
        default: 
            return state;
    }
}

export default loadingReducer;