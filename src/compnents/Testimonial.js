import React from 'react'

const Testimonial = (props) => {
  return (
    <div className='card' style={{gridTemplateRows:'40px 160px 20px '}}>
        <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
        <div className="card-image" style={{overflow:'hidden', height:'160px'}}>
        <img src={props.img}/>
        </div>
        <h3 style={{padding:'10px'}}>{props.heading}</h3>
        <p style={{padding:'10px'}}>{props.details}</p>
    </div> 
  )
}

export default Testimonial;