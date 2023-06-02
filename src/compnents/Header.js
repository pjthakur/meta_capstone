import React from 'react'
import rfood from "../icons_assets/restauranfood.jpg"
const Header = () => {
  return (
    <header>
        <section>
          <div className='header-card'>
            <h1>
                Little Lemon
            </h1>
            <h3 style={{color:'white', marginBottom:'20px', width:'200px'}}>Chicago</h3>
            <p style={{color:'white', maxWidth:'200px'}}>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
          </div>
        </section>
        <div className='header-image'>
        <img src={rfood}/>
        </div>
    </header>
  )
}

export default Header