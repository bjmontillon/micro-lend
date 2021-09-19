import { useState } from 'react';
import Axios from 'axios';

function ClientPreview () {

    const [clientList, setClientList] = useState([]);

    const getClients = () => {
        Axios.get('http://localhost:3001/clients').then((response) => {
            console.log(response)
          })
    };


   return (
       <div>
        <h1>Preview</h1>
        <button onClick={getClients}>Client List</button>
       </div>
   )

    
}

export default ClientPreview;