import React from 'react'
import logo from "../icons_assets/Logo .svg"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li><img src ={logo}/></li>
            <li><Link to='/'>Home</Link></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><a href='#order'>Order</a></li>
            <li><a href='#footer'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav