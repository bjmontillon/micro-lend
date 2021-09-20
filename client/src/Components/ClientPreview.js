import { React, useState} from 'react';
import Axios from 'axios';

function ClientPreview () {

    const [clientList, setClientList] = useState([]);

    const getClients = () => {
        Axios.get('http://localhost:3001/clients').then((response) => {
            setClientList(response.data);
            console.log(response.data);
          })
    };
    console.log(clientList);
   return (
       <div>
        <h1>Preview</h1>
        <button onClick={getClients}>Client List</button>
        <div>
            {clientList.map((val, key) => {

                //Interest computation
                const newAmount = Math.floor((val.amount * .20) + val.amount);
                //Due date computation
               // const dueDate = val.date;

                return <div>
                    <li>Name: {val.name}</li>
                    <li>Amount: {val.amount}</li>
                    <li>Amount After %:{newAmount}</li>
                    <li>Date: {val.date}</li>
                    <li>Contract duraton: {val.duration}</li>
                </div>
            })}
        </div>
       </div>
   )  
};

export default ClientPreview;