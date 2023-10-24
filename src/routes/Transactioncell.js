import "./Transactioncell.css";
const Transactioncell = (props) => {
  console.log(props.payload.desc);
  return (
    <>
      {props.payload?.type === "Expense" ? (
        <div className="cell">
          <span>{props.payload.desc}</span>
          <span>${props.payload.amount}</span>
        </div>
      ) : (
        <div className="cell1">
          <span>{props.payload.desc}</span>
          <span>${props.payload.amount}</span>
        </div>
      )}
    </>
  );
};
export default Transactioncell;
