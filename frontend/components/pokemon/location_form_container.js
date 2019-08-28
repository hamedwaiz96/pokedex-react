import {connect} from 'react-redux';
import LocationForm from './location_form';
import { createSingleLocation } from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => ({
    lat: parseFloat(new URLSearchParams(ownProps.location.search).get('lat')),
    lng: parseFloat(new URLSearchParams(ownProps.location.search).get('lng')),
    pokemonId: parseInt(ownProps.match.params.pokemonId)
});

const mapDispatchToProps = dispatch => ({
    createSingleLocation: (location, pokemonId) => dispatch(createSingleLocation(location, pokemonId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
