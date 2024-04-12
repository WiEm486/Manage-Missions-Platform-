import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function MyComponent({ MyObject }) {
  const [jsonData, setJsonData] = useState("");

  useEffect(() => {
    console.log(MyObject);
    const jsonString = JSON.stringify(MyObject, null, 2);
    setJsonData(jsonString);
  }, [MyObject]);

  const downloadJSONFile = () => {
    const element = document.createElement("a");
    const file = new Blob([jsonData], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    //element.download = "ResultMission.json";
    element.setAttribute("download", "data/fichier.json");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="d-flex justify-content-center ">
      <Button className="btn-primary  btn_holder" onClick={downloadJSONFile}>
        Download File
      </Button>
    </div>
  );
}

export default MyComponent;
