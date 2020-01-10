
import React, { Component } from 'react';
import { InfoConsumer } from '../Context'



class DeletedItems extends Component {

  render = () => {
    return(
      <div>
      <InfoConsumer>
    {(x) => <p>{x}</p>}
      </InfoConsumer>
       
      </div>
    
    )
  }
}

export default DeletedItems;