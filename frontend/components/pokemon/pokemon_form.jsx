import React from 'react';
import {withRouter} from 'react-router-dom';

class PokemonForm extends React.Component {
    constructor(props){
        super(props);
        this.TYPES = [
            'fire',
            'electric',
            'normal',
            'ghost',
            'psychic',
            'water',
            'bug',
            'dragon',
            'grass',
            'fighting',
            'ice',
            'flying',
            'poison',
            'ground',
            'rock',
            'steel'
        ];
        this.state = {name: "", attack: "", defense: "", image_url: "", poke_type: this.TYPES[0], moves: ["", ""]};
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateMoves = this.updateMoves.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        const self = this;
        this.props.createPokemon(self.state).then((poke) => {
            this.props.history.push(`pokemon/${poke.pokemon.id}`);
        })
    }

    updateMoves(key){
        const self = this;
        return e => {
            const new_moves = self.state.moves.slice();
            new_moves[key] = e.target.value;
            self.setState({moves: new_moves})
        }
    }

    update(key){
        const self = this;
        return e => self.setState({[key]: e.target.value});
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.errors.map((error) => {
                        return (
                            <li>{error}</li>
                        )
                    })}
                </ul>
                <h1>Create a new Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Name <input type="text" onChange={this.update('name')} /></label>
                    <label htmlFor="">Attack <input type="number" onChange={this.update('attack')} /></label>
                    <label htmlFor="">Defense <input type="number" onChange={this.update('defense')} /></label>
                    <label htmlFor="">Image <input type="text" onChange={this.update('image_url')} /></label>
                    <select name="poke_type" id="" onChange={this.update('poke_type')} >
                        {this.TYPES.map((type, idx) => {
                            return (
                                <option key={idx} value={type}>{type}</option>
                            )
                        })}
                    </select>
                    <label htmlFor="">Move 1 <input type="text" onChange={this.updateMoves('0')}/></label>
                    <label htmlFor="">Move 2 <input type="text" onChange={this.updateMoves('1')} /></label>
                    <input type="submit" value="Create Pokemon" />
                </form>
            </div>
            
        )
    }
}

export default withRouter(PokemonForm);