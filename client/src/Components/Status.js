export default function Status(props) {
const amount = props.amount;
       function clientStatus ()  {
            if (amount === 1 ) {
                return ('paid')
            } else {
                return ('Current Balance')
            }
        }
    return(
        <>
            <p>{clientStatus()}</p>
        </>
    )
}