import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {selectPokeItems, selectPokeLocations} from '../../reducers/selectors';
import {createSingleLocation} from '../../actions/location_actions';

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
    createSingleLocation: (location, pokemonId) => dispatch(createSingleLocation(location, pokemonId))
})

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: selectPokeItems(state, state.entities.pokemon[ownProps.match.params.pokemonId]),
    locations: selectPokeLocations(state.entities.locations),
    image: state.entities.pokemon[ownProps.match.params.pokemonId].image_url,
    loading: state.ui.loading.detailLoading
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)