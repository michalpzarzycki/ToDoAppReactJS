import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { item, itemDelete } = this.props;
        return(
            <div>
    <p>{item}</p>
                <button className="btn btn-danger" onClick={itemDelete}>DELETE</button>
                <button className="btn btn-outline-success">DONE</button>
            </div>
        );
    }
}

export default Item;