import { React, useState } from 'react';
import Axios from 'axios';


function AddClient () {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState();

    const newClient = () => {
      Axios.post('http://localhost:3001/create', {
        name: name, 
        amount: amount, 
        date: date,
        duration: duration,
      })
      .then(() => {
        alert ('New client added!')
      })
    };
    
    // const displayInfo = () => {
    //     console.log(name + " " + amount + " " + date + " " + duration)
    // }

  return (
    <form className="client-form">
      <label>Name:</label>
      <input type="text" onChange={(event) => {setName(event.target.value)}} />
      <label>Amount:</label>
      <input type="text" onChange={(event) => {setAmount(event.target.value)}} />
      <label>Date issued:</label>
      <input type="text" onChange={(event) => {setDate(event.target.value)}} placeholder='yyyy-mm-dd' />
      <label>Duration:</label>
      <input type="text" onChange={(event) => {setDuration(event.target.value)}} />
      <button onClick={newClient}>Add Client</button>
    </form>
  );
}

export default AddClient;