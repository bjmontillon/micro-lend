import React, { useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getAllClients, fetchAsyncClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, Grid, CardActions, CardHeader, Avatar } from '@mui/material';
import Addpayment from './add-payment'
import Controls from '../Controls/Controls';
 



const useStyles = makeStyles ({
  clientListingHeader: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardsContainer: {
    display: 'flex'
  },
  cardWrapper: {
    padding: '10px',
  },
  cardHeader: {
    backgroundColor: `var(--cardHeader-background-color)`
  }

});



const ClientListing = () => {
  const newData = useSelector(getAllClients)
  const dispatch = useDispatch()
  
    useEffect (() => {
      dispatch(fetchAsyncClients())
    }, [dispatch]);


  const classes = useStyles();
    

  return (
    <div className={classes.clientListingMain}>
    <div className={classes.clientListingHeader}>
        <Typography variant='h5'>
          Clients
        </Typography>
      </div>   
      <div className={classes.cardsContainer}>
        <Grid container>
          {newData.map((clients, index) => (
              <Grid item xs={12} md={6} lg={3} key={index} className={classes.cardWrapper}>
                <Card >
                    <CardHeader
                    avatar={
                      <Avatar>{clients.name}</Avatar>
                    }
                    title={clients.name}
                    />
                    <CardContent>
                      -----
                      
                    </CardContent>
                    <CardActions>
                      <Addpayment clientId={clients._id}/>
                      <Link to={`/clientDetails/${clients._id}`} style={{ textDecoration: 'none' }}>
                        <Controls.Button
                          type='text'
                          text={<Typography variant='body1'>Profile</Typography>}     
                          size='small'
                          variant='text'                
                        />
                      </Link>
                    </CardActions>
                  
                </Card>
              </Grid>
          ))}
        </Grid>
    </div>
    </div>
  );
};

export default ClientListing;
