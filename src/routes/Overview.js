import "./Overview.css";
import { useState } from "react";
import TransactionCont from "./TransactionCont";
// const addtransaction = () => {
//   return <TransactionCont />;
// };
const Overview = (props) => {
  const [addcont, setaddcont] = useState(false);
  return (
    <>
      <div className="mainn">
        <div className="homemain">
          <div className="balance">
            Balance: ${props.income - props.expence}
          </div>
          <button className="btn" onClick={() => setaddcont(!addcont)}>
            {addcont ? "Cancel" : "ADD"}
          </button>
        </div>
        <div>
          {addcont ? (
            <TransactionCont
              setaddcont={setaddcont}
              addtransaction={props.addtransaction}
            />
          ) : null}
        </div>
        <div className="expensecontainer">
          <div className="expensebox">
            Expense<span className="expencespan1">${props.expence}</span>
          </div>
          <div className="expensebox">
            Income<span className="expencespan2">${props.income}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
