import React, { useContext } from "react";
import Movi_item from "../movi-list-item/Movi_item";
import "./movi-list.css";
import { context } from "../App/context";
import { Saerch, filterhandle } from "../utils/data";
const MoviList = () => {
  const { state } = useContext(context);

  const data = filterhandle(Saerch(state.data, state.term), state.filter);

  return (
    <ul className="movi_list">
      {data.map((item, id) => (
        <Movi_item key={item.name + item.viewers} {...item} />
      ))}
    </ul>
  );
};

export default MoviList;
