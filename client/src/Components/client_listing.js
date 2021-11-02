import React from 'react';
import {makeStyles} from '@mui/styles';
import { useSelector } from 'react-redux'
import { getAllClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
import { Typography, Card, Grid, CardActions, CardHeader, Avatar } from '@mui/material';
import Controls from '../Controls/Controls';
import NumberFormat from 'react-number-format';
 



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
  mainCard: {
    
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
        const total = sumTotal(clients.payment);
        const colors = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#651fff', '#3d5afe']
        const amount = <NumberFormat value={clients.amount} displayType={'text'} thousandSeparator={true} prefix={'₱ '} />

          return(
            <Grid item xs={12} md={3} lg={2} key={index} className={classes.cardWrapper}>
              <Card className={classes.mainCard} >
                  <CardHeader
                  style={{ backgroundColor: colors[index] }}
                  avatar={
                    <Avatar>{clients.name}</Avatar>
                  }
                  title = {<Typography variant='body1'>{clients.name}</Typography>}
                  subheader = {
                    <Typography variant='body2'>{amount} / {total}</Typography> 
                    
                  }
                  />
                  <CardActions>
                    <Link to={`/clientDetails/${clients._id}`} style={{ textDecoration: 'none' }}>
                      <Controls.Button
                        type='text'
                        text={<Typography variant='button'>Profile</Typography>}     
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
