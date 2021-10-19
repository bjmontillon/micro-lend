import React from 'react';
import { Button as MuiButton } from '@material-ui/core';



export default function Button(props) {

    const { text, size, color, variant, onClick, className, ...other } = props; 
    
    return(
        <>
            <MuiButton
                variant = { variant || "outlined"}
                size = { size }
                onClick={onClick}
                color={color}
                className={className}
                {...other}
                >
                {text}
            </MuiButton>
</>
    )
}