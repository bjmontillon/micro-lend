import {React, useState} from 'react';
import Axios from 'axios';

const Delete = props => {


    const deleteName = (id) => {
        console.log(props.clientId)
    }

    return (
        <div><button onClick={() => {deleteName (props.clientId)}}>Delete</button></div>
    )
}

export default Delete;