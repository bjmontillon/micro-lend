import { React, useState } from 'react';
import Axios from 'axios';
import { Grid }  from '@mui/material';
import { makeStyles } from '@mui/styles';
import Controls from '../Controls/Controls';
import Popup from '../Controls/Popup';
//import AddReactionIcon from '@mui/icons-material/AddReaction';
import addEntry from '../illustrations/addEntry.svg'





function AddClient () {
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
        backgroundImage: `url(${addEntry})`,
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
        fontFamily: 'var(--font-spartan)',
        fontSize: '1.5vmin'
        
      },
      inputs: {
        minHeight: '20px', 
      },
      clientFormButton: {
        display: 'flex',
        justifyContent: 'center',
      },
      root: {
        fontFamily: 'var(--font-spartan)',
        margin: '2px',
        minWidth: 0,
      },
    
  });
  
    const [openPopup, setOpenPopup] = useState(false);
    const classes = useStyles()

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [rate, setRate] = useState(0);
    const [duration, setDuration] = useState(0);

    const newClient = () => {
      
      console.log(setName)
      Axios.post('http://localhost:3001/add-client', {
        name: name, 
        amount: amount, 
        date: date,
        duration: duration,
        rate: rate,
      })
      .then(() => {
        alert ('New client added!')
      })
    };

  return (
    <>
    <Controls.Button className={classes.root}
          //endIcon={<AddReactionIcon  fontSize='small' />}
          onClick = {() => setOpenPopup(true)}
          variant="contained"
          color='secondary'
          size='small'
          text='ADD CLIENT'
          />

          
    <Popup 
      openPopup={openPopup}
      setOpenPopup = {setOpenPopup}>
      <Grid container className={classes.addClientContainer}>
        <Grid item xs={12} className={classes.clientForm}>
          <Controls.Input size='small' placeholder='Name' margin='dense' className={classes.inputs} type="text" onChange={(event) => {setName(event.target.value)}} />

          <Controls.Input size='small' placeholder='Amount' margin='normal' className={classes.inputs}  type="number" onChange={(event) => {setAmount(event.target.value)}} />

          <Controls.Input size='small' margin='normal' className={classes.inputs} type='date' min="2018-01-01" max="2025-01-01" onChange={(event) => {setDate(event.target.value)}} />

          <Controls.Input size='small' placeholder='duration' margin='normal' className={classes.inputs}  type="number" onChange={(event) => {setDuration(event.target.value)}} />

          <Controls.Input size='small' placeholder='ex: .15'margin='normal' className={classes.inputs}  type="number" onChange={(event) => {setRate(event.target.value)}} />

        </Grid>
        <Grid item xs={12} className={classes.clientFormButton}>
          <Controls.Button 
            text='Submit'
            type='text'
            onClick={() => newClient()}
            color='secondary'
          />
        </Grid>
      </Grid>
    </Popup>
    </>
  );
}

export default AddClient;