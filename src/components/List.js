import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        const { items } = this.props;
        console.log(items);
        return(
            <div>
              {
    items.map(item => {
        return(
            <Item key={item.id} item={item.item} id={item.id}/>
            
        )
    })
}
           
             
            </div>
        );
    }
}

export default List;