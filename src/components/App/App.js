import React, { useContext, useEffect, useState } from "react";
import AppInfo from "../App_info/App_info";
import SaerchPanel from "../search/App_src";
import MoviList from "../Movi-list/Movi_list";
import Movi_add_form from "../Movies-add-form/Movi_add_form";
import AppFilter from "../App_filter/App_filter";

import "./app.css";
import { context } from "./context";

const App = () => {
  const [data, SetData] = useState([]);
  const { state, dispatch } = useContext(context);
  console.log(data);
  const [isLoading, setIsLoading] = useState(false);
  // const [term, setTerm] = useState("");
  // const [filter, setfilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=4")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({ name: item.title, id: item.id }));
        dispatch({ type: "GET_DATA", payload: newArr });
        SetData(newArr);
      });
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="app font-monospace">
          <div className="content">
            <div>
              <AppInfo />
            </div>
            <div>
              <div className="src_panel">
                <SaerchPanel />
                <AppFilter />
              </div>
              <div>
                <MoviList />
              </div>
              <div>
                <Movi_add_form />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <div className="src1"></div>
          <div className="src2"></div>
          <div className="src3"></div>
          <div className="src3"></div>
          <div className="src4"></div>
        </div>
      )}
    </>
  );
};

export default App;
