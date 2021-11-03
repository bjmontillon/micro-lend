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
        padding: '5px 0'
    },
    profileContent: {
        padding: '5px 20px'
    },
})

export default function Clientdetails() {
    const classes = useStyles()
    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedClientDetails);

    useEffect(() => {
        dispatch(fetchAsyncClientDetails(id))
    }, [dispatch, id])

    return (
        <Grid container={true} className={classes.clientProfileContainer}>
   
                <div className={classes.profileWrapper}>
                    <Grid item xs={12}className={classes.profileHeader}>
                        <div>
                            <Link to={'/home'} style={{ textDecoration: 'none' }}>
                                <IconButton aria-label='return'>
                                    <CgArrowLongLeftL />
                                </IconButton>
                            </Link>
                        </div>
                         <div>
                            <Typography variant='h6'>PROFILE</Typography>
                        </div>
                    </Grid>
                    <div className={classes.profileContent}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Typography variant='body1'>{data.name}</Typography>
                            <br />
                            <Typography variant='body2'>ID: {data._id}</Typography>
                        </Grid>
                        
                    </div>
                </div>
     
            </Grid>
    )

    
}