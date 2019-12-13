import React, { Component } from 'react';
import styles from './Input.module.css'

class Input extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return(
            <div>
                <form className={styles.form} onSubmit = {handleSubmit}>
                    <input
                    className="form-control" 
                    type="text"
                    value={item}
                    onChange={handleChange}
                    />
                    <button className="btn btn-primary" type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

export default Input;