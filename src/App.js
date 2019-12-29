import React, { Component } from 'react';
import Navbar from './components/Navbar'
import ToDoApp from './screens/ToDoApp'
import DeletedItems from './screens/DeletedItems'
import DoneItems from './screens/DoneItems'
import Dashboard from './screens/Dashboard'
import uuid from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import styles from './App.module.css'

class App extends Component {

  state = {
    item: "",
    items: [],
    id: uuid(),
    date: new Date(), 
    
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

handleSubmit = (e) => {
  e.preventDefault();
  console.log("STANY PO KLIKNIECIU", this.state)
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
 
    <Router>
    <Navbar/>
    <div className={styles.routeDiv}> <Switch>
        
        <Route strict exact path="/todoapp" component={ToDoApp}/>
        <Route strict exact path="/deleteditems" component={DeletedItems}/>
        <Route strict exact path="/doneitems" component={DoneItems}/>
        <Route strict exact path="/dashboard" component={Dashboard}/>
        <Route strict exact path="/" component={ToDoApp}/>
        <Route component={() => <h1>Nie ma takiej strony</h1>} />
      
      
      </Switch></div>
     

  </Router>
  );
}
 
}

export default App;
