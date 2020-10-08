import React from "react";

import style from "./style.module.scss";

export enum Type {
  SUCCESS,
  WARNING,
}

type PropsType = {
  message: string;
  type: Type;
};

const Toastify = (props: PropsType) => {
  let type = "";
  if (props.type === Type.SUCCESS) {
    type = "success";
  }
  if (props.type === Type.WARNING) {
    type = "warning";
  }
  return (
    <div className={style["toastify"] + " " + style[type]}>{props.message}</div>
  );
};

export default Toastify;
