import { React, useState} from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { Grid }  from '@material-ui/core';
import Button from '@mui/material/Button';


const useStyles = makeStyles ({
    previewContainer: {
        padding: '20px',

        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
})

function ClientPreview () {

    const classes = useStyles()

    const [clientList, setClientList] = useState([]);

    const getClients = () => {
        Axios.get('http://localhost:3001/clients')
        .then((response) => {
            setClientList(response.data);
           
          });
    };
    
   return (

    <Grid container xs={12} className={classes.previewContainer}>
        <Grid item xs={12}>
            <h1>Preview Client</h1>
            <Button variant='outlined' onClick={getClients} >Client List</Button>
        </Grid>
        <Grid item xs={12}>
            {clientList.map((val, key) => {

                //Interest computation
                const newAmount = Math.floor((val.amount * .20) + val.amount);
                //Due date computation
            // const dueDate = val.date;

                return <div>
                    <li className={classes.clientName}>Name: {val.name}</li>
                    <li>Amount: {val.amount}</li>
                    <li>Amount After %:{newAmount}</li>
                    <li>Date: {val.date}</li>
                    <li>Contract duraton: {val.duration}</li>
                </div>
            })}
        </Grid>
    </Grid>
   )  
};

export default ClientPreview;