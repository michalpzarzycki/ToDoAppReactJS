import React, { Component } from 'react';
import styles from "./Item.module.css";


class Item extends Component {
    render() {
        console.log("PROPSY", this.props)
        const { item, date, itemDelete, value, deadline } = this.props;
        return (
            <div className={styles.mainDiv}>
                <div className={styles.taskDiv}>{item}</div>
                <div className={styles.datesDiv}>
                    <div>{date}</div>
    <div>{deadline}</div>
                </div>
        <div className={styles.rateDiv}>{value}</div>
                <div className={styles.btnsDiv}>
                    <div className={styles.leftBtns}>
                        <button className="btn btn-danger" onClick={itemDelete}>DELETE</button>
                        <button className="btn btn-outline-info">EDIT</button>
                    </div>
                   <div className={styles.rightBtns}>
                   <button className="btn btn-outline-success">DONE</button>
                   </div>
                    
                </div>

            </div>
        );
    }
}

export default Item;