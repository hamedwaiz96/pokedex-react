import React from 'react';
import {Link} from 'react-router-dom';

class PokemonIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
        return(
            <li><Link to={`/pokemon/${self.props.poke.id}`}><span>{self.props.poke.id}</span> <img src={self.props.poke.image_url} alt="" /> <span>{self.props.poke.name}</span></Link></li>
            
        )
    }
}

export default PokemonIndexItem;