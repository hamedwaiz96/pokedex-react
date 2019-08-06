import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import {selectPokeItems} from '../../reducers/selectors';

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

const mapStateToProps = (state, ownProps) => (
    {pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: selectPokeItems(state, state.entities.pokemon[ownProps.match.params.pokemonId])}
)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)