import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import UploadCard from "./components/UploadCard";

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
    axios
      .post("http://localhost:8000", files)
      .then((response) => {
        setStatus(StatusEnum.RESOVED);
        console.log(response);
      })
      .catch((error) => {
        setStatus(StatusEnum.REJECT);
        console.log(error);
      });
  };

  return (
    <div className="App">
      <UploadCard handleFiles={handleFiles} />
    </div>
  );
}

export default App;
