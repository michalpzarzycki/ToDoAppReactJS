
import React from 'react';
import { deleted } from '../Context'



function DeletedItems() {
  const { Consumer, Provider } = deleted
  return (
   <div>
     <Consumer>
       {(deleted) =>  <p>{deleted}</p>}
     </Consumer>
      
   </div>
  );
}

export default DeletedItems;