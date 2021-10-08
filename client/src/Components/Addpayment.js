import React from 'react';
import Controls from '../Controls/Controls'
import Axios from 'axios';
import Popup from '../Controls/Popup';


export default function Addpayment(props)  {

    const [newPayment, setNewPayment] = React.useState(0)
    const [newPaymentDate, setNewPaymentDate] = React.useState(new Date())
    const [openPopup, setOpenPopup] = React.useState(false);

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
          <Controls.Button
          text='+'
          onClick = {() => setOpenPopup(true)}
          variant="text"
          >
          
          </Controls.Button>
         
          

          



          <Popup
            openPopup={openPopup}
            setOpenPopup = {setOpenPopup}
            >
            <Controls.Input
            size="small"
            type="number"
            label='amount'
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
          </Popup>
        </>
    )
}