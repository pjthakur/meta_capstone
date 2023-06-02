import order from "../icons_assets/Basket.svg"
import React from "react"
export const Card =(props) =>{
    return(
    <div className='card'>
        <div className="card-image" style={{overflow:'hidden', height:'160px'}}>
        <img src={props.img}/>
        </div>
        <h3 style={{padding:'10px'}}>{props.heading}</h3>
        <p style={{padding:'10px'}}>{props.details}</p>
        <h4 style={{padding:'10px'}}>order of delivery<img src={order} height={20} /></h4>
    </div> 
    ) 
}