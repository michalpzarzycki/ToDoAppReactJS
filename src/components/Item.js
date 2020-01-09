import React, { Component } from 'react';
import styles from "./Item.module.css";
import { deleted as lol } from '../Context'
import '../index.css'


class Item extends Component {

    render() {
        const { Provider } = lol;

        const { item, date, itemDelete, value, deadline } = this.props;
        return (
            <Provider value={item}>
            <div className={styles.mainDiv}>
                <div className={styles.taskDiv}>{item}</div>
                <div className={styles.datesDiv}>
                    <div>Data dodanie:{date}</div>
    <div>Deadline:{deadline}</div>
                </div>
        <div className={styles.rateDiv, `bgColor${value}`}>{value}</div>
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
            </Provider>
        );
    }
}
{/* <Provider value={this.state.color}>
<Consumer>
  {(color) => <p style={{ color }}>HELLO FROM CONSUMER</p>}
</Consumer>
          <WelcomeText />
          <button onClick={this.onColorChange}>ZMIEÑ KOLOR</button>
        </Provider> */}
export default Item;