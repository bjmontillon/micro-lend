import {React, } from 'react';
import Axios from 'axios';

const Delete = props => {

   
    const deleteName = (id) => {
        Axios.delete (`http://localhost:3001/delete/${id}`)
        console.log(props.clientId)
    }

    return (
        <div><button onClick={() => {deleteName (props.clientId)}}>Delete</button></div>
    )
}

export default Delete;