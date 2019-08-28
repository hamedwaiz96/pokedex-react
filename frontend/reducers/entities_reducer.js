import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
import locationReducer from './location_reducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    items: itemsReducer,
    locations: locationReducer,
});

export default entitiesReducer;