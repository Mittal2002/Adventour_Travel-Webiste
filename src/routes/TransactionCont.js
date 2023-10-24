import { useState } from "react";
import "./Transactioncont.css";
const Transactioncont = (props) => {
  const [amount, setamount] = useState();
  const [desc, setdesc] = useState();
  const [type, settype] = useState("Expense");
  console.log(type);
  const apptrans = () => {
    props.addtransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now()
    });
    props.setaddcont();
  };
  return (
    <>
      <div className="contentin">
        <div className="firstdiv">
          <input
            className="content"
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
          <input
            className="content"
            placeholder="Description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />

          <div className="radioo">
            <input
              type="radio"
              className="radio1"
              id="expense"
              name="type"
              value="Expence"
              checked={type === "Expense"}
              onChange={(e) => settype(e.target.value)}
            />
            <label htmlfor="expense" className="radiio">
              Expense
            </label>
            <input
              type="radio"
              className="radio1"
              id="income"
              name="Income"
              value="Income"
              checked={type === "Income"}
              onChange={(e) => settype(e.target.value)}
            />
            <label htmlfor="income" className="radiio">
              Income
            </label>
          </div>
          <button className="bttn" onClick={apptrans}>
            Add Transaction
          </button>
        </div>
      </div>
    </>
  );
};
export default Transactioncont;
