import React from 'react';
import MarkerManager from '../../util/marker_manager';
import {withRouter, Route} from 'react-router-dom';
import LocationFormContainer from './location_form_container';

class PokemonMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showCoords: false,
            lat: "",
            lng: ""
        }
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.locations);
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map.setCenter(pos);
            })
        };
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this), this.props.image);
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.locations);
    }

    registerListeners(){
        const getCoordsObj = latLng => ({
            lat: latLng.lat(),
            lng: latLng.lng()
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        })
    }

    handleMarkerClick(loc){
        this.setState({showCoords: true, lat: loc.lat, lng: loc.lng})
    }

    handleClick(coords){
        const self = this;
        this.props.history.push({
            pathname:  `/pokemon/${self.props.pokemonId}/location/new`,
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render(){
        return(
            <div>
                <div className="pokemon-map" ref={map => this.mapNode = map}></div>
                {this.state.showCoords ? (<p>
                    Latitude: {this.state.lat}
                    Longitude: {this.state.lng}
                    </p>) : ""}
                <Route path='/pokemon/:pokemonId/location/new' component={LocationFormContainer} />
            </div>
        )
    }
}

export default withRouter(PokemonMap);