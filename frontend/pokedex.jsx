import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import {fetchAllPokemon, fetchSinglePokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon, receiveSinglePokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors';
import {HashRouter, Route} from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

window.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    window.fetchAllPokemon = fetchAllPokemon;
    window.fetchSinglePokemon = fetchSinglePokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.requestSinglePokemon = requestSinglePokemon;
    window.receiveSinglePokemon = receiveSinglePokemon;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});