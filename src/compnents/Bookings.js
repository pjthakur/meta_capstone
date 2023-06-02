import React, { useState } from 'react'

const Bookings = () => {
  const [data, setData] = useState({
    name:"",
    date: "",
    time:"",
    guests:"",
    ocassion:"",
  })

  const handle=(e)=>{
    const id = e.target.id;
    const value = e.target.value;
    setData ({...data, [id]:value})
  }
  const submission =(e) =>{
    e.preventDefault();
    console.log(data);

  }
  return (
    <section className='bookings'>
      
      <form onSubmit={submission}>
        <label>
          Name :
          <br/>
          <input type="text" value={data.name} id='name' onChange={handle}/>
        </label>
        <label>
          Date :
          <br/>
          <input type="date" id='date' value={data.date} onChange={handle}/>
        </label>
        <label>
          Choose time :
          <br/>
          <select id='time' onChange={handle} value={data.time}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </label>
        <label>
          Number of guests :
          <br/>
          <input type="number" id='guests' onChange={handle} value={data.guests}/>
        </label>
        <label>
          Ocassion :
          <br/>
          <select id='ocassion' onChange={handle} value={data.ocassion}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </label>
        <button type='submit'>Reserve your Table</button>
      </form>  
    </section>
  )
}

export default Bookings