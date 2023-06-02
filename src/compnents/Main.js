import React from 'react'
import order from "../icons_assets/Basket.svg"
import green from "../icons_assets/greek salad.jpg"
import bru from "../icons_assets/bruchetta.svg"
import lemon from "../icons_assets/lemon dessert.jpg"
import { Card } from './Card'
import Testimonial from './Testimonial'


const Main = () => {
  return (
    <main>
        <>        <div className='main-heading'>
            <h1 >This weeks specials!</h1>
            <button type='submit' style={{cursor:'pointer'}}>Online Menu</button>
        </div>
        <div className='main-cards'>
            <Card img={green} heading="Greek Salad" details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            <Card img={bru} heading="Bruchetta"  details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Card img={lemon} heading="Lemon dessert" details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        </>
        <div style={{backgroundColor: '#FBDABB', width:'100vw', display:'flex', flexDirection:'column', alignItems:'center', height:'72vh', marginTop:'60px'}}>
        <h1 style={{textAlign:'center', color:'#F$CE14', marginTop:'40px'}}>Testimonials</h1>
        <div className='testimonials'>
            <Testimonial img={green} heading="Greek Salad" details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            <Testimonial img={bru} heading="Bruchetta"  details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Testimonial  img={lemon} heading="Lemon dessert" details ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        </div>
    </main>
  )
}

export default Main