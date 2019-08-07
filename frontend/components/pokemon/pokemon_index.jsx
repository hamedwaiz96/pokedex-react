import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.requestAllPokemon()
    }

    render(){
        const self = this;
        return(
            <section className="pokedex">
                <PokemonFormContainer />
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul>
                    {self.props.pokemon.map((poke) => {
                        return (
                            <PokemonIndexItem key={poke.id} poke={poke} />
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default PokemonIndex;