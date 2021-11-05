import React from 'react';
import {makeStyles} from '@mui/styles';
import { useSelector } from 'react-redux'
import { getAllClients } from '../Slice/client-slice'
import { Link } from 'react-router-dom'
import { Typography, Card, Grid, CardActions, CardHeader, Avatar } from '@mui/material';
import Controls from '../Controls/Controls';
import NumberFormat from 'react-number-format';
 



const useStyles = makeStyles ({
  ClientListingHeader: {
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
    minHeight: '15vh'
  },  
  cardHeader: {
    backgroundColor: `var(--cardHeader-background-color)`,
    minHeight: '10vh'
  }

});



const ClientListing = () => {

  const newData = useSelector(getAllClients)

  const classes = useStyles();


  return (
    <div className={classes.ClientListingMain}> 
      <div className={classes.cardsContainer}>
        <Grid container>
        {newData.map((clients, index) => {
 
        const colors = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#651fff', '#3d5afe', '#29b6f6', 
        '#26c6da', '#26a69a', '#66bb6a', '#9ccc65', '#d4e157', '#ffee58', '#ffca28', '#ffa726', '#ff7043', '#8d6e63', '#bdbdbd', '#78909c']
        const amount = <NumberFormat value={clients.amount} displayType={'text'} thousandSeparator={true} prefix={'₱ '} />

          return(
            <Grid item xs={12} sm={4} md={6} lg={3} key={index} className={classes.cardWrapper}>
              <Card className={classes.mainCard} >
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={
                      <Avatar sx={{ bgcolor: colors[index] }}>{clients.name}</Avatar>
                    }
                    title = {<Typography variant='h5'>{clients.name}</Typography>}
                    subheader = {
                      <Typography variant='body2'>{amount}</Typography> 
                      
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
