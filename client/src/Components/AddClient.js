import { React, useState } from 'react';
import Axios from 'axios';
import { Grid }  from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Controls from '../Controls/Controls';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles({
  addClientContainer: {
      display: 'flex',
      minHeight: '50vh',
      minWidth: '14vw',
      flexWrap: 'wrap',
      alignItems:'center',
      justifyContent: 'normal',
      alignContent: 'center',
      borderRadius: '5px',
      boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  },
    clientForm: {
      minHeight: '40vh',
      //padding: '10px',
     // maxWidth: '100%',
      alignContent: 'space-around',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems:'baseline',
      flexWrap: 'wrap',
      flexDirection: 'column',
      
    },
    inputs: {
      minHeight: '20px', 
    },
    clientFormButton: {
      display: 'flex',
      justifyContent: 'center',
    },
    addCLientButton: {
      
    },
  
});




function AddClient () {

    const classes = useStyles()

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState(0);

    const newClient = () => {
      console.log(setName)
      Axios.post('http://localhost:3001/add-client', {
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
    <Grid container xs={12} className={classes.addClientContainer}>
      <Grid item xs={12} className={classes.clientForm}>
        <label>Name:</label>
        <input className={classes.inputs} type="text" onChange={(event) => {setName(event.target.value)}} />
        <label>Amount:</label>
        <input className={classes.inputs}  type="number" onChange={(event) => {setAmount(event.target.value)}} />
        <label>Date issued:</label>
        <input className={classes.inputs}  type="date" min="2018-01-01" max="2025-01-01" onChange={(event) => {setDate(event.target.value)}} placeholder='YYYY-MM-DD' />
        <label>Duration:</label>
        <input className={classes.inputs}  type="number" onChange={(event) => {setDuration(event.target.value)}} />
        
      </Grid>
      <Grid item xs={12} className={classes.clientFormButton}>
        <Controls.Button 
          text='Add New'
          type='text'
          startIcon={<AddOutlinedIcon />}
          onClick={() => newClient()}
        />
      </Grid>
    </Grid>
  );
}

export default AddClient;