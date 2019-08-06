import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const receiveSinglePokemon = (whole) => ({
    type: RECEIVE_SINGLE_POKEMON,
    whole
})

export const requestAllPokemon = () => dispatch => (
    APIUtil.fetchAllPokemon().then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => dispatch => (
    APIUtil.fetchSinglePokemon(id).then((poke) => {dispatch(receiveSinglePokemon(poke)); return poke;})
)