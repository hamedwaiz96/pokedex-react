import React from 'react';
import {withRouter} from 'react-router-dom';

class LocationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lat: this.props.lat,
            lng: this.props.lng,
            pokemon_id: this.props.pokemonId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createSingleLocation(this.state, this.props.pokemonId).then((loc) => {
            this.props.history.push(`/pokemon/${this.props.pokemonId}`)
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Latitude:
                    <input type="text" value={this.state.lat.toString()} disabled />
                </label>
                <label>
                    Longitude:
                    <input type="text" value={this.state.lng.toString()} disabled />
                </label>
                <input type="submit" value="Add Location" />
            </form>
        )
    }
}

export default withRouter(LocationForm);