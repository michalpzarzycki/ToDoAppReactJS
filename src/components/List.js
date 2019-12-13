import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        const { items, deleteAllList, itemDelete } = this.props;
        console.log(items);
        return(
            <div>
              {
    items.map(item => {
        return(
            <Item key={item.id} item={item.item} id={item.id} itemDelete={() => itemDelete(item.id)}/>
            
        )
    })
}

<button className="btn btn-outline-danger"onClick={deleteAllList}>DELETE ALL ITEMS</button>
           
             
            </div>
        );
    }
}

export default List;