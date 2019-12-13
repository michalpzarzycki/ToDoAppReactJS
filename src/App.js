import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
import styles from './App.module.css'
import uuid from 'uuid';

class App extends Component {

  state = {
    item: "HEJKA",
    items: [],
    id: uuid()
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

handleSubmit = (e) => {
  e.preventDefault();
  
  const newItem = {
    item: this.state.item,
    id: uuid()
  }
    
  const updatedItems = [...this.state.items, newItem]

  this.setState({
    items: updatedItems
  })
}

render() {
  return (
    <div className={styles.mainDiv}>
      <Input item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <List items={this.state.items}/>
    </div>
  );
}
 
}

export default App;
