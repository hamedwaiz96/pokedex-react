import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
export const START_LOADING_SINGLE_POKEMON = 'START_LOADING_SINGLE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const receiveSinglePokemon = (whole) => ({
    type: RECEIVE_SINGLE_POKEMON,
    whole
})

export const receivePokemonErrors = (errors) => ({
    type: RECEIVE_POKEMON_ERRORS,
    errors
})

export const startLoadingSinglePokemon = () => ({
    type: START_LOADING_SINGLE_POKEMON
})

export const startLoadingAllPokemon = () => ({
    type: START_LOADING_ALL_POKEMON
})

export const requestAllPokemon = () => dispatch => {
    dispatch(startLoadingAllPokemon());
    return APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)));
}

export const requestSinglePokemon = (id) => dispatch => {
    dispatch(startLoadingSinglePokemon());
    return APIUtil.fetchSinglePokemon(id).then((poke) => {dispatch(receiveSinglePokemon(poke)); return poke;});
}

export const createPokemon = (pokemon) => dispatch => (
    APIUtil.createSinglePokemon(pokemon).then(((poke) => {dispatch(receiveSinglePokemon(poke)); return poke;}), (errors) => dispatch(receivePokemonErrors(errors.responseJSON)))
)