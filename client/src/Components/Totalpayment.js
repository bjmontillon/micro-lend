import { useState, useEffect } from 'react';
import Axios from 'axios';



const Totalpayment = () => {

    const [totalPayment, setTotalPayment] = useState([{
        _id: '',
        count: ''
    }]);

    useEffect(() => {

        Axios.get ('http://localhost:3001/payment-sum')
        .then (res => {
            setTotalPayment(res.data);
          })
    }, [])

    return (
        <>
           {
            totalPayment.map(el => {return(<div key={el._id}><p>{el._id}</p><p>{el.count}</p></div>)})
           } 
        </>
    )
}

export default Totalpayment