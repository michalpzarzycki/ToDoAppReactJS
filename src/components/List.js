import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        const { items } = this.props;
        return(
            <div>
              {
    items.map(item => {
        return(
            <Item item={item.item}/>
        )
    })
}
           
             
            </div>
        );
    }
}

export default List;