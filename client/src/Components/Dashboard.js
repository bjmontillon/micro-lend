import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { getAllClients } from '../Slice/client-slice'
import { useSelector } from 'react-redux'



const useStyles = makeStyles ({
    dashboardContainer: {
        fontFamily: 'var(--font-spartan)',
        maxHeight: '40vh',
        display: 'flex',
        justifyContent: 'flex-end',
        //backgroundColor: `var(--dashboard-background-color)`,
        padding: '0 20px',
      },
    activeClients: {
        padding: '20px',
        backgroundColor: `var(--active-clients)`,
        //border: '1px solid black',
        borderRadius: '3px',
    },

})

export default function Dashboard() {

    const newData = useSelector(getAllClients)
    
    const classes = useStyles();

    function objectLength(obj) {
        var result = 0;
        for(var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            result++;
          }
        }
        return result;
      }

    return (

        <Grid container className={classes.dashboardContainer}>
          
          <Grid item xs={2}>
                  <div className={classes.activeClients}>
                          <Typography variant='h6'>Active Clients</Typography>
                          <br />
                          <Typography variant="body2">
                                  {objectLength(newData)}
                          </Typography>
                  </div>
            
        </Grid>
            
      
        </Grid>
       ) 
   
    
};
