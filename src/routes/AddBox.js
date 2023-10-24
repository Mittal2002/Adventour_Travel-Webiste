import "./AddBox.css";
import Overview from "./Overview";
import Transaction from "./Transaction";
import { useEffect, useState } from "react";
export default function App() {
  const addtransaction = (payload) => {
    const transactionarr = [...transactiion];
    transactionarr.push(payload);
    updatetransaction(transactionarr);
  };
  const [income, updateinc] = useState(0);
  const [expence, updateexc] = useState(0);
  const [transactiion, updatetransaction] = useState([]);
  const calculatebalance = () => {
    let exc = 0;
    let inc = 0;
    transactiion.map((payload) => {
      payload.type === "Expense"
        ? (exc = exc + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateexc(exc);
    updateinc(inc);
  };

  useEffect(() => calculatebalance(), [transactiion]);
  return (
    <div className="Mainn">
      <h2 className="heading">Create Your Own trip</h2>
      <Overview
        addtransaction={addtransaction}
        expence={expence}
        income={income}
      />
      <Transaction transacttions={transactiion} />
    </div>
  );
}
