import {React, } from 'react';
import Axios from 'axios';
import Controls from '../Controls/Controls'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';



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
            text={<DeleteForeverOutlinedIcon fontSize='small' />}
            onClick={() => deleteName(props.clientId)}
        />
        </div>
        
    )
}

export default Delete;