import React from 'react';
import {Link, Route} from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import PokemonMap from './pokemon_map';

class PokemonDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount(){
        const self = this;
        self.props.requestSinglePokemon(self.props.match.params.pokemonId).then(() => {
            self.setState({loading: false})
        })
    }

    componentDidUpdate(prevProps){
        const self = this;
        if(prevProps.match.params.pokemonId !== self.props.match.params.pokemonId){
            this.props.requestSinglePokemon(self.props.match.params.pokemonId)
        }
    }

    render(){
        const self = this;
        if(self.state.loading) {
            return(
                <div id="loading-pokeball-container">
                    <div id="loading-pokeball"></div>
                </div>
            )
        } 
        return(
                <div className="pokemon-detail">
                    <h1>{self.props.pokemon.name}</h1>
                    <img src={self.props.pokemon.image_url} height="144" width="144" alt="" />
                    <p>{self.props.pokemon.poke_type}</p>
                    <p>Attack: {self.props.pokemon.attack}</p>
                    <p>Defense: {self.props.pokemon.defense}</p>
                    <ul className="items">
                        {self.props.items.map((item) => {
                            return (
                                <li key={item.id}><Link to={`/pokemon/${self.props.match.params.pokemonId}/items/${item.id}`}>{item.name}</Link></li>
                            )
                        })}
                    </ul>
                    <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
                    <h1>Locations: </h1>
                    <PokemonMap locations={self.props.locations} createSingleLocation={self.props.createSingleLocation} pokemonId={self.props.match.params.pokemonId} image={this.props.image} />
                </div>
        )
    }
}

export default PokemonDetail;