import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import {HashRouter, Route} from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});