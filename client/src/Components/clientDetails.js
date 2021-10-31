import React,  {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncClientDetails, getSelectedClientDetails } from '../Slice/client-slice';

export default function Clientdetails() {
   
    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    
    const data = useSelector(getSelectedClientDetails);
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncClientDetails(id))
    }, [dispatch, id])
    return (
        <div>clientID: - { id }</div>
    )

    
}