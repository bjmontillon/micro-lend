import {React, useState} from 'react';
import Axios from 'axios';

const Update = props => {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState(new Date());
  // const [duration, setDuration] = useState();
  const [newName, setNewName] = useState ('');
 //const [newAmount, setNewAmount] = useState (0);
 // const [newDate, setNewDate] = useState (new Date ());
  //const [newDuration, setNewDuration] = useState (0);

 // const [newOption, setOption] = useState('');

  console.log (props.clientId);

  const updateName = (id) => {
    Axios.put ('http://localhost:3001/update', {
      name: newName, 
      id: id
    })
  };

  
  //console.log(props.clientId)
  return (
    <div>
      <input
        type="text"
        onChange={event => {
          setNewName(event.target.value);
        }}
      />
      
      <button onClick={() => {updateName (props.clientId)}}>Update Name</button>

    </div>
  );
};

export default Update;
