import React,  {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncClientDetails, getSelectedClientDetails } from '../Slice/client-slice';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material'


const useStyles = makeStyles ({
    clientProfileContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    profileWrapper: {
        minWidth: '80%',
        border: '1px solid black'

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
        <div className={classes.clientProfileContainer}>
            <div className={classes.profileWrapper}>
                <Typography variant='body1'>Name: {data.name}</Typography>
            </div>
        </div>
    )

    
}