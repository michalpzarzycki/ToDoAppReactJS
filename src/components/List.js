import React, { Component } from 'react';
import Item from './Item';
import styles from './Item.module.css'

class List extends Component {
    render() {
        const { items, deleteAllList, itemDelete } = this.props;
        return (
            <div style={{ overflow: "scroll" }}>
                {
                    items.map(item => {
                        return (
                            <Item key={item.id} item={item.item} id={item.id} date={item.date} value={item.value} deadline={item.deadline} itemDelete={() => itemDelete(item.id)} />
                        )
                    })
                }
                <button className="btn btn-outline-danger" onClick={deleteAllList}>DELETE ALL ITEMS</button>
            </div>
        );
    }
}

export default List;