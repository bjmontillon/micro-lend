import Popup from '../../src/Controls/Popup'
import Update from '../Components/Update'
import Controls from '../Controls/Controls';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


export default function Updelete(props) {

    const [openPopup, setOpenPopup] = React.useState(false)

    const {clientId} = props;
    return(
        <>
        <Controls.Button
            text={<EditOutlinedIcon />}
            onClick = {() => setOpenPopup(true)}
            variant="text"
        >
        
        </Controls.Button>
        <Popup
            openPopup={openPopup}
            setOpenPopup = {setOpenPopup}
            
        >
            
            <Update 
                clientId={clientId}
                />
        </Popup>
        </>
    )
}