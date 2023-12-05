import React, { useContext, useState } from "react";
import "./Movi_add_form.css";
import { context } from "../App/context";

function Movi_add_form({ Addform }) {
  const [state, SetState] = useState({ name: "", viewer: "" });
  const changename = (e) => {
    SetState({ ...state, [e.target.name]: e.target.value });
  };
  const { _, dispatch } = useContext(context);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.viewer === "")
      return alert("inputdi toltirin!");
    const data = { name: state.name, viewer: state.viewer };
    dispatch({ type: "ADD_FROM", payload: data });

    SetState({ name: "", viewer: "" });
  };
  return (
    <div className="movi_add_form">
      <h3>Taza kino qosiw</h3>
      <form className="movies-add-from d-flex" onSubmit={handlesubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          className="from-control new-post-label"
          placeholder="Qanday kino"
          onChange={changename}
        />
        <input
          type="number"
          name="viewer"
          value={state.viewer}
          className="from-control new-past-label"
          placeholder="neshe marte korilgen?"
          onChange={changename}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qosiw
        </button>
      </form>
    </div>
  );
}

export default Movi_add_form;
