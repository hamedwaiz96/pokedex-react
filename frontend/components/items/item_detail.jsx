import React from 'react';

class ItemDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src={this.props.item.image_url} height="144" width="144" alt="" />
                <p>{this.props.item.name}</p>
                <p>Price: {this.props.item.price}</p>
                <p>Happiness: {this.props.item.happiness}</p>
            </div>
        )
    }
}

export default ItemDetail;