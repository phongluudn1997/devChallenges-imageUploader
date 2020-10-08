import React, { useEffect, useState } from "react";

import style from "./style.module.scss";
import Toastify, { Type } from "./Toastify";
interface PropsType {
  url: string;
}

const ImageReview = (props: PropsType) => {
  const fullUrl = `http://localhost:8000/${props.url}`;
  const [copyObject, setCopyObject] = useState<any>(null);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopyObject({
        message: "Copy to clipboard successfully!",
        type: Type.SUCCESS,
      });
    } catch (error) {
      setCopyObject({
        message: "Something wrong! Please try again!",
        type: Type.WARNING,
      });
    }
  };
  return (
    <div className={style["card"]}>
      <img
        className={style["card__successfull-icon"]}
        src="https://img.icons8.com/cute-clipart/64/000000/checked.png"
      />
      <h3>Uploaded Successfully!</h3>
      <div className={style["card__image-wrapper"]}>
        <img src={fullUrl} alt="Image" />
      </div>
      <div className={style["copy-input-wrapper"]}>
        <input readOnly type="text" defaultValue={fullUrl} />
        <button onClick={handleCopyToClipboard}>Copy Link</button>
      </div>
      {copyObject && (
        <Toastify type={copyObject.type} message={copyObject.message} />
      )}
    </div>
  );
};

export default ImageReview;
