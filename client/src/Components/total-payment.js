import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography, Paper } from '@mui/material';
import {makeStyles} from '@mui/styles'



const useStyles = makeStyles ({
    totalsContainer: {
        padding: '10px',
    }
})

const Totalpayment = () => {
    
    const [totalPayment, setTotalPayment] = useState([{
        _id: 'client',
        count: '0'
    }]);

    useEffect(() => {

        Axios.get ('http://localhost:3001/payment-sum')
        .then (res => {
            setTotalPayment(res.data);
          })
    }, [])

    const classes = useStyles()
    return (
        <>
           {
            totalPayment.map((el, index)  => {
                return(
                    
                    <Paper elevation={2} className={classes.totalsContainer} key={index}>

                            
                                <Typography variant="h6" >{el._id}</Typography>
                                    <br />
                                <Typography variant='body2' >{el.count}</Typography>
                           
                        </Paper>
                        
                    )
                })
           } 
        </>
    )
}

export default Totalpayment