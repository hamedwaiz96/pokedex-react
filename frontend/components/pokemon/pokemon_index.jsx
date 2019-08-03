import React from 'react';

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
            <ul>
                {self.props.pokemon.map((poke) => {
                    return(
                        <li key={poke.id}>{poke.name} <img height="140" width="140" src={poke.image_url} alt=""/></li>
                    )
                })}
            </ul>
        )
    }
}

export default PokemonIndex;