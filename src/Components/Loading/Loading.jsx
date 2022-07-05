import React from "react";
import style from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loadingCircle}></div>
    </div>
  );
};

export default Loading;
