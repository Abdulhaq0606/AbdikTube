import React, { useContext, useState } from "react";
import "./movi_list_item.css";
import { context } from "../App/context";
function Movi_item({ name, viewers, id, favaurite, like }) {
  console.log(viewers);
  const { state, dispatch } = useContext(context);
  const Delateitem = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };
  const ontogleprob = (e) => {
    const payload = {
      id,
      prop: e.currentTarget.getAttribute("data-toggle"),
    };
    dispatch({ type: "ON_TOGGLE_PROP", payload });
  };
  return (
    <li
      className={`list-gourp-item   d-flex justify-content-between 
       ${favaurite && "favaurite"} ${like && "like"}  `}
    >
      <span
        onClick={ontogleprob}
        className="list-gruop-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-gruop-item-input "
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-item-center">
        <button
          onClick={ontogleprob}
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="favaurite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={Delateitem}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default Movi_item;
