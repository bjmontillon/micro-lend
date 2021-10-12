import { useEffect, useState } from "react";
import Axios from 'axios';

export default function Totalpaymet (props) {
        
        const [totalPayment, setTotalPayment] = useState('');

        useEffect(() => {
            Axios.get ('http://localhost:3001/payment-sum')
            .then (res => {
                setTotalPayment(res.data);
              })
        }, [totalPayment])
    return(

        <>
            <p>{totalPayment}</p>
        </>
    )
}