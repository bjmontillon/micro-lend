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
        padding: '0 5px',
      },
    boxesWrapper: {
      padding: '5px'
    },
    boxes: {
        width: '100%',
        height: '20vh',
        padding: '10px',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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

      const Activeclients = () => {
        return (
                  <>
                  <div>
                  <Typography variant='h6'>Active Clients</Typography>
                  </div>
                  <div>
                  <Typography variant="h1">
                          {objectLength(newData)}
                  </Typography>
                  </div>
                  </>
        )}
        const Dashboard1 = () => {
          return (
                    <Typography variant='h6'>dashboard1</Typography>
          )}
          const Dashboard2 = () => {
            return (
                    <Typography variant='h6'>dashboard2</Typography>
            )}
            const Dashboard3 = () => {
              return (
                      <Typography variant='h6'>dashboard3</Typography>
              )}


        const dashboard = [ <Activeclients />, <Dashboard1 />, <Dashboard2 />, <Dashboard3 />]
        const boxesColor = [ '#ede7f6', '#f0f4c3', '#fff9c4', '#d7ccc8' ]
    return (

        <Grid container className={classes.dashboardContainer}>
          
         {dashboard.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index} className={classes.boxesWrapper}>
              <div className={classes.boxes} style = {{ backgroundColor: boxesColor[index] }}>
                {item}
              </div>
            </Grid>
         )})}
      
        </Grid>
       ) 
   
    
};
