import React from "react";
import style from "./style.module.scss";

const LoadingCard = () => {
  return (
    <div className={style["card"]}>
      <h3 className={style["card__title"]}>Uploading...</h3>
      <div className={style["progress-bar"]}>
        <div className={style["progress-bar__loading-bar"]}></div>
      </div>
    </div>
  );
};

export default LoadingCard;
