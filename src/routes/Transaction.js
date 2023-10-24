import "./Transaction.css";
import { useEffect, useState } from "react";
import Transactioncell from "./Transactioncell";
const Transaction = (props) => {
  const [searchtext, updatesearchtext] = useState("");
  const [filtertransaction, updatetransaction] = useState(props.transacttions);
  const filterdata = (searchtext) => {
    if (!searchtext || !searchtext.trim().length) {
      updatetransaction(props.transacttions);
      return;
    } else {
      let trn = [...props.transacttions];
      trn = trn.filter((payload) =>
        payload.desc.toLowerCase().includes(searchtext.toLowerCase().trim())
      );
      updatetransaction(trn);
    }
  };

  useEffect(() => filterdata(searchtext), [props.transacttions]);

  return (
    <>
      <div className="mainn">
        <div className="homemain1">
          Transaction
          <input
            className="inn"
            placeholder="Search"
            value={searchtext}
            onChange={(e) => {
              updatesearchtext(e.target.value);
              filterdata(e.target.value);
            }}
          />
          {filtertransaction?.length
            ? filtertransaction.map((payload) => (
                <Transactioncell payload={payload} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};
export default Transaction;
