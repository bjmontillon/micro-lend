import React from 'react';
import Controls from '../Controls/Controls'
import Popup from '../Controls/Popup';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PaymentOutlined from '@mui/material/Icon';


const PaymentsList = (props) => {
    //const clientsPayment = props.clientsPayments
    const [openPopup, setOpenPopup] = React.useState(false);

    return (
        <>
        <Controls.Button
            variant='text'
            text={<PaymentOutlined fontSize='small' />}
            onClick={() => setOpenPopup(true)}
        />
        <Popup
            title = 'Payments'
            openPopup={openPopup}
            setOpenPopup = {setOpenPopup}
        >
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
          </TableBody>
        </Table>
      </TableContainer>
        </Popup>
        </>
    )
}
export default PaymentsList;