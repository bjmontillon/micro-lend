import React from 'react';
import {makeStyles} from '@mui/styles';
import { useSelector } from 'react-redux'
import { getAllClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, Grid, CardActions, CardHeader, Avatar } from '@mui/material';
import Addpayment from './add_payment'
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
        {newData.map((clients, index) => {
          
          const sumTotal = arr => arr.reduce((sum, { paymentAmount }) => sum + paymentAmount, 0)  
        const total = sumTotal(clients.payment)
        console.log(total)

          return(
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
                    {total}
                    
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
            
        )})}
          
        </Grid>
    </div>
    </div>
  );
};

export default ClientListing;
