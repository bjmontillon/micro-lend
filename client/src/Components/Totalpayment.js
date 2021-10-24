import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography } from '@mui/material';
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles ({
    root: {
        
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
                    <div key={el._id}>
                        <Typography variant='h1' className={classes.root}>{el._id}</Typography>
                        <Typography variant='body1' className={classes.root}>{el.count}</Typography>
                    </div>)
                })
           } 
        </>
    )
}

export default Totalpayment