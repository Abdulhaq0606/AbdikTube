import { useContext } from "react";
import "./app_filter.css";
import { context } from "../App/context";

const AppFilter = () => {
  const { state, dispatch } = useContext(context);

  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch({ type: "ON_FILTER", payload: btn.name })}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
