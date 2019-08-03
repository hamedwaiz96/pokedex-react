import React from 'react';
import {Link} from 'react-router-dom';

class PokemonIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
        return(
                <li><Link to={`/pokemon/${self.props.poke.id}`}><img height="140" width="140" src={self.props.poke.image_url} alt="" /> {self.props.poke.name}</Link></li>
            
        )
    }
}

export default PokemonIndexItem;