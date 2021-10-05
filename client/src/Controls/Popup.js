import {React, useState} from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Axios from 'axios';
import Controls from '../Controls/Controls'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Delete from '../Components/Delete';

export default function Popup(props) {

    const useStyles = makeStyles({

    })

    const [newName, setNewName] = useState ('');

    const updateName = (id) => {
        console.log(props.clientId)
        console.log(newName);
        Axios.put ('http://localhost:3001/update', {
          id: id,
          newName: newName, 
        })
      };

    const { title, children, openPopup, setOpenPopup } = props
    const classes = useStyles()
    return(
        <div>
            <Dialog open={openPopup}>
                <DialogTitle>
                    <h3>hello</h3>
                </DialogTitle>
                <DialogContent>
                    <input
                        className={classes.updateInput}
                        type="text"
                        onChange={event => {setNewName(event.target.value)}}
                     />
                     <Controls.Button
                        className={classes.updateButton}
                        size="small"
                        text={<EditOutlinedIcon fontSize="small" />}
                        variant="text"
                        onClick={() => updateName(props.clientId)}
                    />
                    <Delete />
                    <Controls.Button
                        className={classes.updateButton}
                        size="small"
                        text={<EditOutlinedIcon fontSize="small" />}
                        variant="text"
                        onClick={() => setOpenPopup(true)}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}