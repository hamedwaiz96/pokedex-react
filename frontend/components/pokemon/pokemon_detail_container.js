import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {selectPokeItems, selectPokeLocations} from '../../reducers/selectors';
import {createSingleLocation} from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => {
    const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
    debugger;
    return {
        pokemon,
        items: selectPokeItems(state, pokemon),
        locations: selectPokeLocations(state.entities.locations),
        image: pokemon.image_url,
        loading: state.ui.loading.detailLoading
    }
};

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
    createSingleLocation: (location, pokemonId) => dispatch(createSingleLocation(location, pokemonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)