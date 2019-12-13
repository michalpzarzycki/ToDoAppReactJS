import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { item, itemDelete } = this.props;
        return(
            <div>
    <p>{item}</p>
                <button onClick={itemDelete}>DELETE</button>
                <button>EDIT</button>
            </div>
        );
    }
}

export default Item;