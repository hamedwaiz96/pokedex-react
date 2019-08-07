import React from 'react';
import {Link, Route} from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const self = this;
        this.props.requestSinglePokemon(self.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps){
        const self = this;
        if(prevProps.match.params.pokemonId !== self.props.match.params.pokemonId){
            this.props.requestSinglePokemon(self.props.match.params.pokemonId)
        }
    }

    render(){
        const self = this;
        return(
            <div>
                <h1>{self.props.pokemon.name}</h1>
                <img src={self.props.pokemon.image_url} height="144" width="144" alt=""/>
                <p>{self.props.pokemon.poke_type}</p>
                <p>Attack: {self.props.pokemon.attack}</p>
                <p>Defense: {self.props.pokemon.defense}</p>
                <ul>
                    {self.props.items.map((item) => {
                        return(
                            <li key={item.id}><Link to={`/pokemon/${self.props.match.params.pokemonId}/items/${item.id}`}>{item.name}</Link></li>
                        )
                    })}
                </ul>
                <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
            </div>
        )
    }
}

export default PokemonDetail;