import { React, useState} from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { Grid }  from '@material-ui/core';
import Button from '@mui/material/Button';


const useStyles = makeStyles ({
    previewContainer: {
        padding: '20px',
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
            <h1>Preview</h1>
            <Button variant='outlined' onClick={getClients}>Client List</Button>
            <div>
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
            </div>
            </Grid>
        </Grid>
   )  
};

export default ClientPreview;