export default function Interest(props) {
  const amount = props.amount;
  const duration = 45;

  const dailyPayment = (amount / duration).toString();
  const newDailyPayment = dailyPayment.substr(0, 5);

  return (
    <>
      <p>{newDailyPayment}</p>
    </>
  );
}
