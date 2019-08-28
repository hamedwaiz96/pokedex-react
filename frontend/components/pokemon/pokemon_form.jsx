import React from 'react';
import {withRouter} from 'react-router-dom';
import S3 from 'aws-s3';
import * as Keys from '../../util/keys';

const config = {
    bucketName: 'pokedexham',
    region: 'us-west-1',
    accessKeyId: Keys.accessKeyId,
    secretAccessKey: Keys.secretAccessKey
}

const S3Client = new S3(config);

class PokemonForm extends React.Component {
    constructor(props){
        super(props);
        this.TYPES = POKEMON_TYPES;
        this.state = {name: "", attack: "", defense: "", image_url: "", poke_type: this.TYPES[0], moves: ["", ""]};
        this.file = "";
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateMoves = this.updateMoves.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const self = this;
        S3Client.uploadFile(this.file).then((data) => {
            console.log(data.location); 
            self.setState({image_url: data.location})
            self.props.createPokemon(self.state).then((poke) => {
                self.props.history.push(`pokemon/${poke.pokemon.id}`);
            })
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

    fileChangeHandler(e){
        this.file = e.target.files[0];
    }

    render(){
        return(
            <div className="Form">
                <ul>
                    {this.props.errors.map((error) => {
                        return (
                            <li>{error}</li>
                        )
                    })}
                </ul>
                <img src="http://aa-pokedex.herokuapp.com/assets/pokemon-logo.svg" alt=""/>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" type="text" onChange={this.update('name')} />
                    <br/>
                    <input type="number" onChange={this.update('attack')} placeholder="Attack" />
                    <br/>
                    <input type="number" onChange={this.update('defense')} placeholder="Defense" />
                    <br/>
                    <input type="file" onChange={this.fileChangeHandler} />
                    <br/>
                    <select name="poke_type" id="" onChange={this.update('poke_type')} >
                        {this.TYPES.map((type, idx) => {
                            return (
                                <option key={idx} value={type}>{type}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <input type="text" onChange={this.updateMoves('0')} placeholder="Move 1" />
                    <br/>
                    <input type="text" onChange={this.updateMoves('1')} placeholder="Move 2" />
                    <br/>    
                    <input type="submit" value="Create Pokemon" />
                </form>
            </div>
            
        )
    }
}

export default withRouter(PokemonForm);