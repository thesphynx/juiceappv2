import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

let Navbar = (props) => {
    return(
        <nav className='navbar'>
          <span className='navbar_item'>
            <NavLink to='/main'><span>Main</span></NavLink>
          </span>
          <span className='navbar_item'>
            <NavLink to='/recipes'><span>Recipes</span></NavLink>
          </span>
          <span className='navbar_item'>
            <NavLink to='/news'><span>News</span></NavLink>
          </span>
          <span className='navbar_item'>
            <NavLink to='/contacts'><span>Contacts</span></NavLink>
          </span>
        </nav>
    );
}


export default Navbar