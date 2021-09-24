import {React, useState} from 'react';
import Axios from 'axios';

const Update = props => {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState(new Date());
  // const [duration, setDuration] = useState();
  const [newName, setNewName] = useState ('');
  const [newAmount, setNewAmount] = useState (0);
  const [newDate, setNewDate] = useState (new Date ());
  const [newDuration, setNewDuration] = useState (0);

  const [newOption, setOption] = useState('');

  console.log (props.clientId);

  const updateName = id => {
    Axios.put ('http://localhost:3001/update', {name: newName, id: id}).then (
      'alert '
    );
  };
  const updateAmount = id => {
    Axios.put ('http://localhost:3001/update', {
      amount: newAmount,
      id: id,
    }).then ('alert');
  };
  const updateDate = id => {
    Axios.put ('http://localhost:3001/update', {amount: newDate, id: id}).then (
      'alert'
    );
  };
  const updateDuration = id => {
    Axios.put ('http://localhost:3001/update', {
      amount: newDuration,
      id: id,
    }).then ('alert');
  };

  return (
    <div>
      <input
        type="text"
        onChange={event => {
          setNewName(event.target.value);
        }}
      />
      
      <button
        onClick={() => {
          updateName (props.clientId);
        }}
      >
        Update Name
      </button>


      <input
        type="text"
        onChange={event => {
          setNewAmount (event.target.value);
        }}
      />
      <button
        onClick={() => {
          updateAmount (props.clientId);
        }}
      >
        Update Amount
      </button>

      <input
        type="text"
        onChange={event => {
          setNewDate (event.target.value);
        }}
      />
      <button
        onClick={() => {
          updateDate (props.clientId);
        }}
      >
        Update Date
      </button>
      <input
        type="text"
        onChange={event => {
          setNewDuration (event.target.value);
        }}
      />
      <button
        onClick={() => {
          updateDuration (props.clientId);
        }}
      >
        Update Duration
      </button>
    </div>
  );
};

export default Update;
