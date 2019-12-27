import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateInput extends Component {
    state = {
        deadlineDate: new Date()
    };

    handleChange = date => {
        this.setState({
            deadlineDate: date
            
        });
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <DatePicker
                        selected={this.state.deadlineDate}
                        onChange={this.handleChange} />
                    <button className="btn btn-primary" type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

export default DateInput;