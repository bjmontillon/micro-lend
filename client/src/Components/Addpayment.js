import React from 'react';
import Controls from '../Controls/Controls'
import Axios from 'axios';

export default function Addpayment(props)  {

    const [newPayment, setNewPayment] = React.useState('')
    const [newPaymentDate, setNewPaymentDate] = React.useState(new Date())

    const addPayment = (id) => {
      
        Axios.put ('http://localhost:3001/add-payment', {
            
          id: props.clientId,
          newPayment: newPayment,
          newPaymentDate: newPaymentDate,
          
        })
        console.log(id)
      };

    return(
        <>
        <Controls.Input
            size="small"
            type="text"
            label='Amount'
            onChange={event => {setNewPayment(event.target.value)}}
            variant ='outlined'
          >

        </Controls.Input>
        <Controls.Input
            size="small"
            type="date"
            onChange={event => {setNewPaymentDate(event.target.value)}}
            variant ='outlined'
          >

        </Controls.Input>
        

        <Controls.Button 
        size="small"
        variant="text"
        onClick={() => addPayment(props.clientId)}
        text='submit'
        />
        
        </>
    )
}