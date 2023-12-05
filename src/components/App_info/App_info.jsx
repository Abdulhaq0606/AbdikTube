import React, { useContext } from "react";
import "./app_info.css";
import { context } from "../App/context";

const AppInfo = ({ Allinfo, Favauriteinfo }) => {
  const { state } = useContext(context);
  return (
    <div className="appInfo">
      <p className="fc-3 text-uppercase">
        barliq kinolar sani:{state.data.length}
      </p>
      <p className="fc-3 text-uppercase">
        {" "}
        korilgen kinolar sani:{state.data.filter((c) => c.favaurite).length}
      </p>
    </div>
  );
};

export default AppInfo;
