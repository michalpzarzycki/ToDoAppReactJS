
import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import styles from './ToDoApp.module.css'
import uuid from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import DatePicker from "react-datepicker";
import { deleted } from '../Context'
import "react-datepicker/dist/react-datepicker.css";
   
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};

class App extends Component {
 
  state = {
    item: "",
    items: [],
    id: uuid(),
    date: new Date().toLocaleString('pl', options),
    value: "1",
    deadline: new Date(),
    deleted: deleted
    
  }
     


  handleChange = (e) => {
      console.log("e", e)
      console.log("deleted ",deleted)
    this.setState({
      item: e.target.value,
    })
  }

  handleSelectChange = (e) => {
    console.log("e", e)
  this.setState({
  
    value: e.target.value
  })
 
}
handleDateChange = (date) => {
    console.log("e", date.toString())
    this.setState({
        deadline: date.toString()
      });
 
 
}



handleSubmit = (e) => {
    console.log("VALUE W SUBMICIE: " ,  this.state.value)
    console.log("DEADLINE W SUBMICIE", this.state.deadline)

  e.preventDefault();

  this.setState({
    date: new Date().toLocaleString('pl', options)
  })

  console.log("DEADLINE:w subic", this.state.deadline )

  const newItem = {
    item: this.state.item,
    id: uuid(),
    date: this.state.date,
    value: this.state.value,
    deadline: this.state.deadline.toLocaleString('pl', options).toString()
  }

  console.log(newItem)
   if(newItem.item) {
   
  const updatedItems = [...this.state.items, newItem]

  this.setState({
    items: updatedItems,
    item:"",
    date: new Date().toLocaleString('pl', options),
    value: "1",
    deadline:  new Date()
    
  })
}
}

deleteAllList = () => {
  this.setState({
    items: []
  })
}

itemDelete = (id) => {
  let deletedItem = this.state.items.filter(item => (item.id == id))
  console.log("DELETED ITEM: ", deletedItem)

  const filteredItems = this.state.items.filter(item => (item.id !== id))
  this.setState({
    items: filteredItems,
    deleted: [deletedItem]
  })
}
render() {
  return (
<div className={styles.mainDiv}>
  <div>{this.state.deadline.toString()}</div>
<Input item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
<DatePicker
                         dateFormat="mm-dd-yyyy"
                        selected={this.state.deadline}
                        onChange={date => this.setState({deadline: date})}
                        />
<label>
          Wybierz poziom trudności/złożoności taska:
          <select value={this.state.value} onChange={this.handleSelectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </label>
<List items={this.state.items} deleteAllList={this.deleteAllList} itemDelete={this.itemDelete}/>
</div>


  );
}
 
}

export default App;
