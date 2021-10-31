import React,  {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncClientDetails, getSelectedClientDetails } from '../Slice/client-slice';

export default function Clientdetails() {
   
    const { _id } = useParams()
    console.log(_id)
    const dispatch = useDispatch()

    
    const data = useSelector(getSelectedClientDetails);
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncClientDetails(_id))
    }, [dispatch, _id])
    return (
        <div>clientID: - { _id }</div>
    )

    
}