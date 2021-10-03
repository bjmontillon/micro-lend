import * as React from 'react';
import Axios from 'axios';

import { Grid }  from '@material-ui/core';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = themes => ({
    previewContainer: {
        padding: '20px',
        height: '100%',
        borderRadius: '5px',
        boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    },
    clientName: {
        backgroundColor: 'red',
        listStyle: 'none',
    },
})

class ClientPreview extends React.Component {
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
              clients: res.data,
              clientId: res.data.id,
              clientName: res.data[0].name,
              amount: res.data[0].amount,
              date: res.data[0].date,
              duration: res.data[0].duration,
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

        <Grid container xs={12} className={classes.previewContainer}>
            {this.state.clients.map(clients => (
                <Card>
                    <CardContent>
                    <h3>{clients.name}</h3>
                    </CardContent>
                </Card>
            ))}
        </Grid>
       ) 
   } 
    
};

export default withStyles (styles) (ClientPreview);