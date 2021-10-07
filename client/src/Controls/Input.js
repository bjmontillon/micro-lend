import React from 'react';
import { TextField as MuiInput } from '@mui/material'



export default function Input(props) {

    const { type, value, onChange, ...other } = props;
    
    return (
        <>
            <MuiInput
                type = {type}
                value = {value}
                onChange = {onChange}
                {...other}
                >
            </MuiInput>
        </>
        
        )
};