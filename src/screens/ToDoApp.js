
import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import DateInput from '../components/DateInput'
import styles from './ToDoApp.module.css'
import uuid from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
   
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
    value: "1" 
    
  }
     


  handleChange = (e) => {
      console.log("e", e)
    this.setState({
      item: e.target.value,
    })
  }

  handleSelectChange = (e) => {
    console.log("e", e)
  this.setState({
  
    value: e.target.value
  })
  console.log("VALUE : " ,  this.state.value)
}

handleSubmit = (e) => {
    console.log("VALUE W SUBMICIE: " ,  this.state.value)

  e.preventDefault();

  this.setState({
    date: new Date().toLocaleString('pl', options)
  })

  const newItem = {
    item: this.state.item,
    id: uuid(),
    date: this.state.date,
    value: this.state.value
  }
   if(newItem.item) {
   
  const updatedItems = [...this.state.items, newItem]

  this.setState({
    items: updatedItems,
    item:"",
    date: new Date().toLocaleString('pl', options),
    value: "1"
    
  })
}
}

deleteAllList = () => {
  this.setState({
    items: []
  })
}

itemDelete = (id) => {
  const filteredItems = this.state.items.filter(item => (item.id !== id))
  this.setState({
    items: filteredItems
  })
}
render() {
  return (
<div className={styles.mainDiv}>

<Input item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
<DateInput />
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
