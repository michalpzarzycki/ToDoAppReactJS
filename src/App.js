import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
import DateInput from './components/DateInput'
import styles from './App.module.css'
import uuid from 'uuid';

class App extends Component {

  state = {
    item: "",
    items: [],
    id: uuid(),
    date: new Date()
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    date: new Date()
  })
  console.log("DATA :", this.state.date)
  console.log(this.state.item)
  const newItem = {
    item: this.state.item,
    id: uuid(),
    date: this.state.date
  }
   if(newItem.item) {
     console.log("JUHU")
   
  const updatedItems = [...this.state.items, newItem]

  this.setState({
    items: updatedItems,
    item:"",
    
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
      <List items={this.state.items} deleteAllList={this.deleteAllList} itemDelete={this.itemDelete}/>
    </div>
  );
}
 
}

export default App;
