import {React, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Axios from 'axios';

import Controls from '../Controls/Controls'

const Update = props => {

  

  const useStyles = makeStyles ({
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
  const [newName, setNewName] = useState ('');
 //const [newAmount, setNewAmount] = useState (0);
 // const [newDate, setNewDate] = useState (new Date ());
  //const [newDuration, setNewDuration] = useState (0);

 // const [newOption, setOption] = useState('');

  
const updateName = (id) => {
  console.log(props.clientId)
  console.log(newName);
  Axios.put ('http://localhost:3001/update', {
    id: id,
    newName: newName, 
  })
};
  

  const classes = useStyles()
  
  return (
    <>
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
    </>
  );
};

export default Update;
