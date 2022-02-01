import React from "react";
import { Hearts } from "react-loader-spinner";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    className="mt-5">
      <Hearts heigth="200" width="200" color="white" ariaLabel="loading" style={{marginTop:"200px"}}/>
    </div>
  );
};

export default Loading;
