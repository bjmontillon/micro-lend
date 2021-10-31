import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardContent, Typography, Paper } from '@mui/material';
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
            totalPayment.map(el => {
                return(
                    <Paper elevation={2} className={classes.totalsContainer}>

                            <div key={el._id}>
                                <Typography variant="h6" className={classes.root}>{el._id}</Typography>
                                <br />
                                <Typography variant='body2' className={classes.root}>{el.count}</Typography>
                            </div>
                        </Paper>
                    )
                })
           } 
        </>
    )
}

export default Totalpayment