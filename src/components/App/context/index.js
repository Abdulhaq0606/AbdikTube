import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialvalue = {
  data: [],
  term: "",
  filter: "",
};

export const context = createContext();

const reducer = (state = initialvalue, action) => {
  const { type, payload } = action;
  //   console.log(payload);
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_DELETE":
      const newar = state.data.filter((c) => c.id !== payload);
      return { ...state, data: newar };
    case "ON_TOGGLE_PROP":
      const { id, prop } = payload;
      const toggleArr = state.data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      );
      return { ...state, data: toggleArr };
    case "ADD_FROM":
      const { name, viewers } = payload;
      const Addform = {
        name: name,
        viewers: viewers,
        id: uuidv4(),
        favaurite: false,
        like: false,
      };
      return { ...state, data: [...state.data, Addform] };
    case "ON_TERM":
      return { ...state, term: payload };
    case "ON_FILTER":
      return { ...state, filter: payload };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <context.Provider value={{ state, dispatch }}> {children}</context.Provider>
  );
};

export default Provider;
