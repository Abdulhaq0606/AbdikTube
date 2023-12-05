import React, { useContext, useState } from "react";

import "./appscr.css";
import { context } from "../App/context";
import AppFilter from "../App_filter/App_filter";

const SaerchPanel = () => {
  const [term, setTerm] = useState("");
  console.log(term);
  const { state, dispatch } = useContext(context);
  const uptdatehandler = (e) => {
    const tern = e.target.value.toLowerCase();
    setTerm(tern);
    dispatch({ type: "ON_TERM", payload: term });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control search-input"
        placeholder="kinolardi izlew"
        onChange={uptdatehandler}
        value={term}
      />
    </div>
  );
};

export default SaerchPanel;
