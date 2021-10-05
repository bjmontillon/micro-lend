import {React, } from 'react';
import Axios from 'axios';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined'
import Controls from '../Controls/Controls'



const Delete = props => {

   
    const deleteName = (id) => {
        var result = window.confirm("Are you sure you want to delete?")
            if (result) {
                Axios.delete (`http://localhost:3001/delete/${id}`)
                console.log(props.clientId)
            }
            
        }

    return (
        <div>
        <Controls.Button 
            variant="text"
            size="small"
            text={<BackspaceOutlinedIcon fontSize="small" />}
            onClick={() => deleteName(props.clientId)}
        />
        </div>
        
    )
}

export default Delete;