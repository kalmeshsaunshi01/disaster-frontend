import React from "react";
import UploadForm from "../components/UploadForm";

const Flood = () => {
  return (
    <div>
      <h1>Flood Segmentation</h1>
      <UploadForm disasterType="flood" />
    </div>
  );
};

export default Flood;
