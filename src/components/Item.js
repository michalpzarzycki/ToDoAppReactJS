import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { item } = this.props;
        return(
            <div>
    <p>{item}</p>
                <button>DELETE</button>
                <button>EDIT</button>
            </div>
        );
    }
}

export default Item;