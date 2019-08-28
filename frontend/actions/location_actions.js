import * as APIUtil from '../util/api_util';

export const RECEIVE_SINGLE_LOCATION = 'RECEIVE_SINGLE_LOCATION';

export const receiveSingleLocation = (location) => ({
    type: RECEIVE_SINGLE_LOCATION,
    location
});

export const createSingleLocation = (location, pokemonId) => dispatch => (
    APIUtil.createSingleLocation(location, pokemonId).then((location) => dispatch(receiveSingleLocation(location)))
);