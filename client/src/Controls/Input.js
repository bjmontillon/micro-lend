import React from 'react';
import { TextField as MuiInput } from '@material-ui/core'



export default function Input (props) {

    const {children, label, margin, type, value, onChange, variant, ...other } = props;
    
    return (
        <>
            <MuiInput
                type = {type}
                value = {value}
                onChange = {onChange}
                variant = { variant }
                margin = {margin}
                label= {label}
                {...other}
                >
                {children}
            </MuiInput>
        </>
        
        )
};