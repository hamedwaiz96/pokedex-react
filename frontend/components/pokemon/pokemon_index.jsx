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
        let form = document.getElementsByClassName('Form')[0]
        form.className = 'Form';
    }

    render(){
        const self = this;
        return(
            <div>
                {self.props.loading ? (<div id="loading-pokeball-container">
                        <div id="loading-pokeball"></div>
                </div>) : (<section className="pokedex">
                    <ul>
                        {self.props.pokemon.map((poke) => {
                            return (
                                <PokemonIndexItem key={poke.id} poke={poke} />
                            )
                        })}
                    </ul>
                    <div className="front">
                        <PokemonFormContainer />
                        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                    </div>
                </section>)}
            </div>
            
            
        )
    }
}

export default PokemonIndex;