import React from "react";
import style from "./style.module.scss";
import placeholder from "../../assets/imgs/placeholder.png";

const UploadCard = (props: any) => {
  const handleDrop = (e: any) => {
    const data = e.dataTransfer;
    const { files } = data;
    props.handleFiles(files);
  };

  const preventDefault = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className={style["card"]}>
      <h3 className={style["card__title"]}>Upload your image</h3>
      <p className={style["card__description"]}>File should be Jpeg, Png...</p>
      <div
        className={style["card__drop-area"]}
        onDragEnter={(e) => preventDefault(e)}
        onDragOver={(e) => preventDefault(e)}
        onDragEnd={(e) => preventDefault(e)}
        onDrop={(e) => {
          preventDefault(e);
          handleDrop(e);
        }}
      >
        <img src={placeholder} alt="drop area" />
        <p>Drag & Drop you image here</p>
      </div>
      <p className={style["card__divider"]}>Or</p>
      <div>
        <input
          onChange={(e) => props.handleFiles(e.target.files)}
          multiple={true}
          type="file"
          className={style["card__input"]}
        ></input>
      </div>
    </div>
  );
};

export default UploadCard;
