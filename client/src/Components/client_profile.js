import React,  {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncClientDetails, getSelectedClientDetails } from '../Slice/client-slice';
import { useParams,} from 'react-router';
import { Link } from 'react-router-dom'
//MATERIAL-UI
import { makeStyles } from '@mui/styles';
import { Typography, Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton';
//CSS.GG
import { CgArrowLongLeftL } from "react-icons/cg";
//ILLUSTRATIONS
import profile_data from '../illustrations/profile_data.svg'
//COMPONENTS
import Delete from './Delete'


const useStyles = makeStyles ({
    clientProfileContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
        
    },
    profileWrapper: {
        minWidth: '80vw',   
        minHeight: '50vh',
        border: '1px solid black',
        backgroundImage: `url(${profile_data})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'contain',
    },
    profileHeader: {
        maxHeight: '10vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '5px 10px',
        justifyContent: 'space-between'
    },
    profileContent: {
        padding: '5px 20px'
    },
    profile_col_1: {
    }
})

export default function Clientdetails() {
    const classes = useStyles()
    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedClientDetails);
    useEffect(() => {
        dispatch(fetchAsyncClientDetails(id))
    }, [dispatch, id])
    console.log(data)
    const _id = data._id
    const name = data.name;
    const principal = data.amount;
    const date = data.date;
    const rate = data.rate;
    const cosigner = data.cosigner
    //const duration = data.duration;
    //const payment = data.payment;
    const total_paid = null
    //const sumTotal = arr => arr.reduce((sum, { paymentAmount }) => sum + paymentAmount, 0)  
    //const total_paid = sumTotal(data.payment);
    const final = Math.round((data.amount * data.rate) + data.amount);
    const balance = Math.round(final - total_paid);
    
    
    return (
        <Grid container={true} className={classes.clientProfileContainer}>
   
                <div className={classes.profileWrapper}>
                    <Grid item xs={12}className={classes.profileHeader}>
                        <div>
                            <Link to={'/home'} style={{ textDecoration: 'none' }}>
                                <IconButton aria-label='return'>
                                    <CgArrowLongLeftL /><Typography variant='h6'>Home</Typography>
                                </IconButton>
                            </Link>
                        </div>
                        <div><Delete clientId={_id}/></div>
                    </Grid>
                    <Grid container className={classes.profileContent}>
                        <Grid item xs={6} md={4} lg={6} className={classes.profile_col_1}>
                            <table className={classes.tables}>
                                <tr>
                                    <td><Typography variant='body1'>ID:</Typography></td>
                                    <td><Typography variant='body1'>{_id}</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant='body1'>Name:</Typography></td>
                                    <td><Typography variant='body1'>{name}</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant='body1'>Principal</Typography></td>
                                    <td><Typography variant='body1'>{principal}</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant='body1'>Date</Typography></td>
                                    <td><Typography variant='body1'>{date}</Typography></td>
                                </tr>
                            </table>
                        </Grid>
                        <Grid item xs={6} md={4} lg={6} className={classes.profile_col_1}>
                            <table className={classes.tables}>
                                <tr>
                                    <td><Typography variant='body1'>Rate:</Typography></td>
                                    <td><Typography variant='body1'>{rate}</Typography></td>
                                </tr>
                            <tr>
                                <td><Typography variant='body1'>Co-signer</Typography></td>
                                <td><Typography variant='body1'>{cosigner}</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography variant='body1'>Total Payments</Typography></td>
                                <td><Typography variant='body1'>{total_paid}</Typography></td>
                            </tr>
                            <tr>
                                <td><Typography variant='body1'>Balance</Typography></td>
                                <td><Typography variant='body1'>{balance}</Typography></td>
                            </tr>
                           </table>
                        </Grid>
                    </Grid>
                </div>
     
            </Grid>
    )

    
}