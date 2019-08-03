import React from 'react';

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
                <img src={self.props.pokemon.image_url} alt=""/>
                <p>{self.props.pokemon.poke_type}</p>
                <p>Attack: {self.props.pokemon.attack}</p>
                <p>Defense: {self.props.pokemon.defense}</p>
            </div>
        )
    }
}

export default PokemonDetail;