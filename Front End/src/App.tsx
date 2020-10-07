import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import UploadCard from "./components/UploadCard";
import LoadingCard from "./components/LoadingCard";
import ImageReview from "./components/ImageReview";

enum StatusEnum {
  IDLE,
  PENDING,
  RESOVED,
  REJECT,
}

function App() {
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.IDLE);

  const handleFiles = (files: FileList): void => {
    const validFiles = Object.values(files).filter((file) => {
      return isFileValid(file);
    });
    previewAndUpload(validFiles);
  };

  const isFileValid = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSizeInBytes = 10e6;
    return validTypes.indexOf(file.type) !== -1 && file.size <= maxSizeInBytes;
  };

  const previewAndUpload = (files: Array<File>): void => {
    setStatus(StatusEnum.PENDING);
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }
    console.log(data);
    axios
      .post("http://localhost:8000/upload", data)
      .then((response) => {
        setStatus(StatusEnum.RESOVED);
      })
      .catch((error) => {
        setStatus(StatusEnum.REJECT);
      });
  };

  let showedComponent = null;
  console.log(status);

  switch (status) {
    case StatusEnum.IDLE:
      showedComponent = <UploadCard handleFiles={handleFiles} />;
      break;
    case StatusEnum.PENDING:
      showedComponent = <LoadingCard />;
      break;
    case StatusEnum.RESOVED:
      showedComponent = <ImageReview />;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <ImageReview />
    </div>
  );
}

export default App;
