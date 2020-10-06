import React from "react";
import style from "./style.module.scss";
import placeholder from "../../assets/imgs/placeholder.png";

const UploadCard = () => {
  return (
    <div className={style["card"]}>
      <h3 className={style["card__title"]}>Upload your image</h3>
      <p className={style["card__description"]}>File should be Jpeg, Png...</p>
      <div className={style["card__drop-area"]}>
        <img src={placeholder} alt="drop area" />
        <p>Drag & Drop you image here</p>
      </div>
      <p className={style["card__divider"]}>Or</p>
      <div>
        <button className={style["card__input"]}>Choose a file</button>
      </div>
    </div>
  );
};

export default UploadCard;
