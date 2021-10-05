import {React, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import Delete from './Delete';
import Controls from '../Controls/Controls'

import Popup from '../../src/Controls/Popup'

const Update = props => {

  const useStyles = makeStyles ({
    updateDeletecontainer: {
      display: 'flex',
    },
    updateIcon: {
      width: "20",
      height: "20"
    },
    updateButton: {
      padding: "0",
      width: "5vw",
      fontFamily: `'Montserrat', sans-serif`,
    },
    updateInput: {
      width: "10vw",
    }
  })
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState(new Date());
  // const [duration, setDuration] = useState();
  
 //const [newAmount, setNewAmount] = useState (0);
 // const [newDate, setNewDate] = useState (new Date ());
  //const [newDuration, setNewDuration] = useState (0);

 // const [newOption, setOption] = useState('');

  

const [openPopup, setOpenPopup] = useState(false);

  const classes = useStyles()
  
  return (
    <div className={classes.updateDeletecontainer}>
      
      <Delete />
      <Controls.Button
        className={classes.updateButton}
        size="small"
        text={<EditOutlinedIcon fontSize="small" />}
        variant="text"
        onClick={() => setOpenPopup(true)}
      />
      <Popup 
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
        >
    </Popup>
    </div>
  );
};

export default Update;
