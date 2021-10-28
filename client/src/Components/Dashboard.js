//import * as React from 'react';
//import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Totalpayment from './Totalpayment'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@material-ui/core';
import { getAllClients } from '../Slice/client-slice'
import { useSelector } from 'react-redux'



const useStyles = makeStyles ({
    dashboardContainer: {
        padding: '20px',
        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        fontFamily: 'var(--font-spartan)',
        maxHeight: '40vh'
      },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
})

export default function Dashboard(props) {
    const newData = useSelector(getAllClients)

    const classes = useStyles();

    function objectLength(obj) {
        var result = 0;
        for(var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
          // or Object.prototype.hasOwnProperty.call(obj, prop)
            result++;
          }
        }
        return result;
      }

    return (

        <Grid container className={classes.dashboardContainer}>
         <Grid item xs={2}><div className={classes.card2}><Totalpayment /></div></Grid>
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>Active Clients</Typography>
                        <Typography variant="body2">
                            {objectLength(newData)}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
      
        </Grid>
       ) 
   
    
};
