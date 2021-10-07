import * as React from 'react';
import Axios from 'axios';
import { Grid }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = themes => ({
    dashboardContainer: {
        padding: '20px',
        height: '100%',
        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        fontFamily: `'Montserrat', sans-serif`,
      },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
})

class Dashboard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
          clients: [],
          clientId: null,
          clientName: null,
          amount: null,
          date: null,
          duration: null,
        };
      }

      componentDidMount () {
        Axios.get ('http://localhost:3001/read')
          .then (res => {
            //console.log(res.data[0].id)
            this.setState ({
              clients: res.data[0],
            });
          })
          .catch (function (error) {
            console.log (error);
          });
      }

    
   render () {

 //   const [clientList, setClientList] = useState([]);

    

    const classes = this.props.classes;
    return (

        <Grid container xs={12} className={classes.dashboardContainer} spacing={2}>
            <Grid item xs={3}><h3>Total Balance</h3></Grid>
            <Grid item xs={3}><h3>hello</h3></Grid>
            <Grid item xs={3}><h3>hello</h3></Grid>
            <Grid item xs={3}><h3>hello</h3></Grid>
      
        </Grid>
       ) 
   } 
    
};

export default withStyles (styles) (Dashboard);