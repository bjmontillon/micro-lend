import { React, useState} from 'react';
import Axios from 'axios';

function ClientPreview () {

    const [clientList, setClientList] = useState([]);

    const getClients = () => {
        Axios.get('http://localhost:3001/clients').then((response) => {
            setClientList(response.data);
          })
    };

   return (
       <div>
        <h1>Preview</h1>
        <button onClick={getClients}>Client List</button>
        <div>
            {clientList.map((val, key) => {

                //Interest computation
                const newAmount = Math.floor((val.amount * .20) + val.amount);
                
                const dueDate = val.date;

                    //fix the date!!!!!

                return <div>
                    <li>{val.name}</li>
                    <li>{newAmount}</li>
                    <li>{dueDate}</li>
                </div>
            })}
        </div>
       </div>
   )  
};

export default ClientPreview;