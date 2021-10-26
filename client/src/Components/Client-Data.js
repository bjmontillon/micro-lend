import React from 'react'

function ClientData(props) {
    const newData = props.newData


    return ( 
        <div>


        <h1>client table 2</h1> 
        {newData.map((item) => (
            <button>{item.name}</button>
        ))}
        </div>
     );
}

export default ClientData;