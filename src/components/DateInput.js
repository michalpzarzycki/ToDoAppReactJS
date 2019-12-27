import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateInput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return(
            <div>
                <form  onSubmit = {handleSubmit}>
                <DatePicker/>
                    <button className="btn btn-primary" type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

export default DateInput;