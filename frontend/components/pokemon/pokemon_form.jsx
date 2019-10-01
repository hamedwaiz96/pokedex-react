import React from 'react';
import {withRouter} from 'react-router-dom';
import { CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET} from '../../util/keys';

let ERRORS = {
    'name': "Name can't be blank",
    'attack': "Attack can't be blank",
    'defense': "Defense can't be blank",
    'poke_type': "Type can't be blank",
    'moves': "Moves can't be blank",
    'photo': "Image Upload Error"
}

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
        let Formdata = new FormData();
        Formdata.append('file', this.file);
        Formdata.append('upload_preset', CLOUDINARY_PRESET)
        Formdata.append('folder', "pokedex-location/pokemon")
        if (this.state.name != "" && this.state.hours != "") {
            axios({
                url: CLOUDINARY_IMAGE_URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: Formdata
            }).then(
                (res) => {
                    self.state.photo = res.data.secure_url;
                    self.props.createPokemon(self.state).then((poke) => {
                        self.props.history.push(`pokemon/${poke.pokemon.id}`)
                    })
                },
                (err) => {
                    this.props.receiveErrors(err);
                }
            )
        } else {
            let errors = [];
            if (this.state.name === "") {
                errors.push(ERRORS['name'])
            }
            if (this.state.attack === "") {
                errors.push(ERRORS['attack'])
            }
            if (this.state.defense === "") {
                errors.push(ERRORS['defense'])
            }
            if (this.state.poke_type === "") {
                errors.push(ERRORS['poke_type'])
            }
            if (this.state.moves.length === 0) {
                errors.push(ERRORS['moves'])
            }
            if (this.state.image_url === "") {
                errors.push(ERRORS['photo'])
            }
            this.props.receiveErrors(errors)
        }
        // S3Client.uploadFile(this.file).then((data) => {
        //     console.log(data.location); 
        //     self.setState({image_url: data.location})
        //     self.props.createPokemon(self.state).then((poke) => {
        //         self.props.history.push(`pokemon/${poke.pokemon.id}`);
        //     })
        // })

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