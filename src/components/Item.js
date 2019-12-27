import React, { Component } from 'react';
import styles from "./Item.module.css";


class Item extends Component {
    render() {
        console.log("PROPSY", this.props)
        const { item, date, itemDelete } = this.props;
        return(
            <div className={styles.mainDiv}>
    <p>{`TASK: ${item} DATE: ${date}`}</p>
                <button className="btn btn-danger" onClick={itemDelete}>DELETE</button>
                <button className="btn btn-outline-success">DONE</button>
            </div>
        );
    }
}

export default Item;