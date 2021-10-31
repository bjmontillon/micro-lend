import Popup from '../../src/Controls/Popup'
import Update from '../Controls/Update'
import Controls from '../Controls/Controls';
import React from 'react';
import EditOutlinedIcon from '@mui/material/Icon';
import Delete from '../Components/Delete'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles ({
    updeleteContainer: {
        display: 'flex',
        justifyContent:' center',
        alignContent: 'center',
        alignItems: 'center',
    }
})


export default function Updelete(props) {

    const [openPopup, setOpenPopup] = React.useState(false);
    const classes = useStyles()

    const {clientId} = props;
    return(
        <div className={classes.updeleteContainer}>
        <Controls.Button
            text={<EditOutlinedIcon fontSize='small'/>}
            onClick = {() => setOpenPopup(true)}
            variant="text"
        >
        
        </Controls.Button>
        <Delete clientId={props.clientId}/>
        <Popup
            openPopup={openPopup}
            setOpenPopup = {setOpenPopup}
        >
            <Update clientId={clientId}/>
        </Popup>
        </div>
    )
}