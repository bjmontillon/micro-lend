import { React, useState } from 'react';
import Axios from 'axios';
import { Grid }  from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    clientForm: {
      minHeight: '40vh',
      padding: '10px',
      maxWidth: '100%',
      alignContent: 'space-around',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems:'baseline',
      flexWrap: 'wrap',
      flexDirection: 'column',
      borderRadius: '5px',
      boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    inputs: {
      minHeight: '20px', 
    },
    addCLientButton: {
      
    },
  
})




function AddClient () {

    const classes = useStyles()

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
    <Grid container xs={12}>
      <Grid item xs={12} className={classes.clientForm}>
        <label>Name:</label>
        <input className={classes.inputs} type="text" onChange={(event) => {setName(event.target.value)}} />
        <label>Amount:</label>
        <input className={classes.inputs}  type="text" onChange={(event) => {setAmount(event.target.value)}} />
        <label>Date issued:</label>
        <input className={classes.inputs}  type="text" onChange={(event) => {setDate(event.target.value)}} placeholder='YYYY-MM-DD' />
        <label>Duration:</label>
        <input className={classes.inputs}  type="text" onChange={(event) => {setDuration(event.target.value)}} />
        <Button className={classes.addClientButton} variant='contained' size='small' onClick={newClient}>Add Client</Button>
      </Grid>
    </Grid>
  );
}

export default AddClient;