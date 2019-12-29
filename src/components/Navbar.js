import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

class Navbar extends Component {
    render() {
      
        return(
     <nav className={styles.mainNav}>
         <div className={styles.logoSection}>
            <p>✓ ToDoApp</p>
         </div>
         <ul>
             <li><Link to='/todoapp'>HOME</Link></li>
             <li><Link to='/deleteditems'>ZROBIONE</Link></li>
             <li><Link to='doneitems'>USUNIĘTE</Link></li>
             <li><Link to='dashboard'>DASHBOARD</Link></li>
         </ul>
     </nav>
        );
    }
}



export default Navbar;