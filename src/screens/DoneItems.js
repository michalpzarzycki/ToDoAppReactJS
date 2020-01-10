
import React, { Component } from 'react';
import { InfoProvider } from '../Context'



class DoneItems extends Component {
    state= {
        newName: "HELLO"
    }
  render = () => {

    changeValue = () => {
      let newName = 
    }
    return (
      <div>
        <InfoProvider value={this.state.newName}>
        <button onClick={this.changeValue}>KLIK</button>
        </InfoProvider>
        
      </div>
    )
  }
}

export default DoneItems;