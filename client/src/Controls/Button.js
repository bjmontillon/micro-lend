import React from 'react';
import { Button as MuiButton } from '@material-ui/core';



export default function Button(props) {

    const { text, size, color, variant, onClick, classes, ...other } = props; 
    
    return(
        <>
            <MuiButton
                variant = { variant || "outlined"}
                size = { size || "small" }
                onClick={onClick}
                color={color}
                classes={classes}
                {...other}
                >
                {text}
            </MuiButton>
        </>
    )
}