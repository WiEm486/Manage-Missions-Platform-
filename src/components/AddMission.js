import React, {  useEffect, useRef, useState } from "react";
import {
  Button,

  Container,

  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import MyComponent from "./MyComponent";

export const AddMission = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const [jsonData, setJsonData] = useState(null);
/*   const [selectedWay, handleWaySelect] = useState(true); */
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const parsedData = JSON.parse(contents);
        setJsonData(parsedData);
      };
      reader.readAsText(file);
    }
  };
  const handleEdit = () => {
    setJsonData((prevObject) => ({
      ...prevObject,
      distance: inputRef1.current.value, // Nouvelle valeur de l'attribut distance
      id: inputRef2.current.value, // Nouvelle valeur d'un autre attribut
      origin: {
        latitude: inputRef3.current.value,
        longitude: inputRef4.current.value,
      },
    }));

    inputRef1.current.value = "";

    inputRef2.current.value = "";

    inputRef3.current.value = "";

    inputRef4.current.value = "";
  };
  useEffect(() => {
    if (inputRef1.current !== null) {
      inputRef1.current.value = jsonData?.distance || "";
    }
    if (inputRef2.current !== null) {
      inputRef2.current.value = jsonData?.id || "";
    }
    if (inputRef3.current !== null) {
      inputRef3.current.value = jsonData?.origin.latitude || "";
    }
    if (inputRef4.current !== null) {
      inputRef4.current.value = jsonData?.origin.longitude || "";
    }
  }, [jsonData]);
  return (
    <div>
      <div className="d-flex  flex-column  justify-content-center  align-items-center mb-5  mt-5 ">
        <Row>
          <h3 className=" mb-5" style={{ fontFamily: "Montserrat Alternates" }}>
            Edit Files
          </h3>
        </Row>
        <Row>
          <input type="file" accept=".json" onChange={handleFileUpload} />
        </Row>
      </div>

      <Container className="d-flex justify-content-center  align-items-center  flex-column mb-5 ">
        <Row>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Distance"
              className="mb-3"
              sm={4}
            >
              <Form.Control ref={inputRef1} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Id"
              className="mb-3"
            >
              <Form.Control ref={inputRef2} />
            </FloatingLabel>
          </>
        </Row>
        <Row>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="origin latitude"
              className="mb-3"
              sm={4}
            >
              <Form.Control ref={inputRef3} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="origin longitude "
              className="mb-3"
            >
              <Form.Control ref={inputRef4} />
            </FloatingLabel>
          </>
        </Row>

        <Row>
          {" "}
          <Button className="btn_holder" onClick={handleEdit}>
            Save{" "}
          </Button>{" "}
          <MyComponent MyObject={jsonData}></MyComponent>
        </Row>
      </Container>
    </div>
  );
};
