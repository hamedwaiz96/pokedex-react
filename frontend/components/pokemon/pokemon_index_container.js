import {connect} from 'react-redux';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: (pokemon) => dispatch(requestAllPokemon(pokemon))
})

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)