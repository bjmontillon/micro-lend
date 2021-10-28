export default function Status(props) {
    
const amount = props.amount;


       function clientStatus ()  {



            if (amount === 1 ) {
                return ('Paid')
            } else {
                return ('---')
            }
        }
    return(
        <>
            <p>{clientStatus()}</p>
        </>
    )
}