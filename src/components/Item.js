import React, { Component } from 'react';
import styles from "./Item.module.css";


class Item extends Component {
    render() {
        const { item, itemDelete } = this.props;
        return(
            <div className={styles.mainDiv}>
    <p>{item}</p>
                <button className="btn btn-danger" onClick={itemDelete}>DELETE</button>
                <button className="btn btn-outline-success">DONE</button>
            </div>
        );
    }
}

export default Item;