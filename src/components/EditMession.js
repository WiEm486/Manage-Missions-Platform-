import { Input } from "@mui/material";
import M1 from "../data/mission1.json";
import M2 from "../data/missionDemo.json";
import M3 from "../data/mission-map.json";
import img1 from "../assets/StrollingDoodle.png";
import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import MyComponent from "./MyComponent";
export const EditMession = ({ list }) => {
  const input1 = useRef();
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState({});
  const [selectedDSegment, setSelectedSegment] = useState({});
  const [missions, setMissions] = useState({});
  const [distance, setDistance] = useState("");
  const [oneWay, setoneWay] = useState(false);
  const [IdPoint, setIDPoint] = useState("");
  const [detection, setDetection] = useState(false);
  const [SafePoint, setSafePoint] = useState("");
  const [pause, setPause] = useState(false);
  const [pauseDuration, setPauseDuration] = useState("");
  const [Tourelle, setTourelle] = useState("");
  const [IdSegment, setIdSegment] = useState("");
  const [vitesse, setVitesse] = useState("");
  const [vitesseMaximale, setVitesseMaximal] = useState("");
  const [Evitement, setEvitement] = useState(false);
  const [detectionS, setDetectionS] = useState(false);
  const [Point1, setPoint1] = useState("");
  const [Point2, setPoint2] = useState("");
  const [orientation, setOrientation] = useState("");
  const handleFileUpload = (event) => {
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;

        const Data = JSON.parse(fileContent);
        console.log(Data);
        missions.push(Data);
        console.log(missions);
      };
      console.log(missions);
      reader.readAsText(file);
    }
    // handleResult();
  };
  const handleMissionChange = (event) => {
    const missionId = parseInt(event.target.value);
    console.log(missionId);
    const selectedMission = list.find(
      (mission, index) => mission.distance === missionId
    );

    setSelectedMission(selectedMission);
    setDistance(selectedMission.distance);
    setoneWay(selectedMission.one_way);
    setSafePoint(selectedMission.safe_point_id);
    console.log(selectedMission);
    console.log(selectedMission.segments);
  };
  const handlePointChange = (event) => {
    const PointId = parseInt(event.target.value);

    const selectedPoint = selectedMission?.points.find(
      (point, index) => index === PointId
    );

    setSelectedPoint(selectedPoint);
    setIDPoint(PointId);
    setDetection(selectedPoint.detection);
    setPause(selectedPoint.pause);
    setPauseDuration(selectedPoint.pause_duration);
    setTourelle(selectedPoint.dome_orientations);
    console.log(PointId);
    console.log(selectedPoint);
    handleSubmit();
  };
  const handleSegmentChange = (event) => {
    const SegmentId = parseInt(event.target.value);

    const selectedSegment = selectedMission?.segments.find(
      (segment, index) => segment.id === SegmentId
    );
    console.log(selectedSegment);
    setSelectedSegment(selectedSegment);
    setIdSegment(SegmentId);
    setVitesse(selectedSegment.speed);
    setVitesseMaximal(selectedSegment.max_speed);
    setEvitement(selectedSegment.avoiding);
    setDetectionS(selectedSegment.detection);
    setOrientation(selectedSegment.orientation);

    console.log(selectedSegment.points[0]);
    console.log(selectedSegment.points[1]);
    setPoint1(selectedSegment.points[0]);
    setPoint2(selectedSegment.points[1]);
    console.log(selectedDSegment.points);
  };
  const handleSubmit = () => {
    const updatedPoints = selectedMission.points.map((point) =>
      point === selectedPoint
        ? {
            ...point,
            id: IdPoint,
            detection: detection,
            tourelle: Tourelle,
            pause: pause,
            pause_duration: pauseDuration,
          }
        : point
    );
    const updatedSegments = selectedMission.segments.map((segment) =>
      segment === selectedDSegment
        ? {
            ...segment,
            id: IdSegment,
            detection: detectionS,
            avoiding: Evitement,
            orientation: orientation,
            speed: vitesse,
            max_speed: vitesseMaximale,
            points: [Point1, Point2],
          }
        : segment
    );
    const newMission = {
      ...selectedMission,
      distance: distance,
      one_way: oneWay,
      safe_point_id: SafePoint,
      points: updatedPoints,
      segments: updatedSegments,
    };
    setSelectedMission(newMission);
    console.log(newMission);
  };

  return (
    <div className="d-flex    justify-content-center  align-items-center mb-5  mt-5 editStyle ">
      <div>
        <p
          style={{
            fontFamily: "FontsFree-Net-Arboria-Bold",
            fontSize: "2.5rem",
            marginBottom: "4rem",
          }}
        >
          Select Missions <br></br>to Edit Here{" "}
        </p>
        <label for="fileInput" class="custom-file-label">
          Choose JSON Files
        </label>
        <input
          type="file"
          id="fileInput"
          accept=".json"
          onChange={handleFileUpload}
          multiple
        />
        <img src={img1} alt="" style={{ width: "30rem" }}></img>
      </div>
      <div
        style={{
          width: "50vw",
          backgroundColor: "rgb(214, 254, 241)",
          borderRadius: "50px",
        }}
      >
        <Row>
          <h3
            className=" d-flex   justify-content-center mb-5"
            style={{
              fontFamily: "FontsFree-Net-Arboria-Bold",
              fontSize: "3rem",
            }}
          >
            Edit Mission
          </h3>
        </Row>

        <Container
          className="d-flex  justify-content-space-between mr-5"
          sm={4}
          style={{fontFamily:""}}
        >
          <Col sm={4}>
            <Row className="m-5">
              <p>Liste des Missions</p>
              <Form.Select
                aria-label="Default select example"
                onChange={handleMissionChange}
              >
                <option disabled>Select Mission </option>

                {list.map((mission, index) => (
                  <option key={index} value={mission.distance}>
                    Mission {index + 1}
                  </option>
                ))}
              </Form.Select>
            </Row>
            {selectedMission && (
              <Row className="m-5">
                <p>Points</p>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handlePointChange}
                >
                  <option value="">Sélectionnez un point</option>

                  {selectedMission?.points.map((point, index) => (
                    <option key={point.id} value={index}>
                      Point {index}
                    </option>
                  ))}
                </Form.Select>
              </Row>
            )}
            {selectedMission && (
              <Row className="m-5">
                <p>Segments</p>
                <Form.Select
                  aria-label="Default select example"
                  onClick={handleSegmentChange}
                >
                  <option disabled>Select Mission </option>

                  {selectedMission?.segments.map((segment, index) => (
                    <option key={index} value={index}>
                      [ {segment.points}]
                    </option>
                  ))}
                </Form.Select>
              </Row>
            )}
          </Col>
          <Col>
            <Container className="ml-5" sm={4}>
              <Row>
                <p>Mission </p>
                <InputGroup className="mb-3">
                  une direction
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={oneWay}
                    onChange={(e) => setoneWay(e.target.checked)}
                  />
                </InputGroup>
              </Row>
              <Row sm={4}>
                Distance Depart{" "}
                <Input
                  ref={input1}
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                ></Input>
              </Row>
              <Row sm={4}>
                Safe Point{" "}
                <Input
                  value={SafePoint}
                  sm={4}
                  onChange={(e) => {
                    setSafePoint(e.target.value);
                  }}
                ></Input>
              </Row>
              <Row sm={4}>
                Id{" "}
                <Input
                  disabled
                  value={IdPoint}
                  sm={4}
                  onChange={(e) => {
                    setIDPoint(e.target.value);
                  }}
                ></Input>
              </Row>
              <Row sm={4}>
                <InputGroup className="mb-3">
                  detection
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={detection}
                    onChange={(e) => {
                      setDetection(e.target.checked);
                    }}
                  />
                </InputGroup>
              </Row>
              <Row sm={4}>
                <InputGroup className="mb-3">
                  Pause
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={pause}
                    onChange={(e) => {
                      setPause(e.target.checked);
                    }}
                  />
                  <Input
                    value={pauseDuration}
                    onChange={(e) => {
                      setPauseDuration(e.target.value);
                    }}
                  ></Input>
                </InputGroup>
              </Row>
              <Row sm={4}>
                Tourelle{" "}
                <Input
                  value={Tourelle}
                  onChange={(e) => {
                    setTourelle(e.target.value);
                  }}
                ></Input>
              </Row>

              <Row sm={4}>
                Id{" "}
                <Input
                  disabled
                  sm={4}
                  value={IdSegment}
                  onChange={(e) => {
                    setIdSegment(e.target.value);
                  }}
                ></Input>
              </Row>

              <Row sm={4}>
                Point liée{" "}
                <Input
                  sm={4}
                  value={Point1}
                  onChange={(e) => {
                    setPoint1(e.target.value);
                  }}
                ></Input>{" "}
                <Input
                  sm={4}
                  value={Point2}
                  onChange={(e) => {
                    setPoint2(e.target.value);
                  }}
                ></Input>
              </Row>

              <Row sm={4}>
                Vitesse{" "}
                <Form.Control
                  type="number"
                  value={vitesse}
                  onChange={(e) => {
                    setVitesse(e.target.value);
                  }}
                />
              </Row>
              <Row sm={4}>
                Vitesse Maximale{" "}
                <Form.Control
                  type="number"
                  sm={4}
                  value={vitesseMaximale}
                  onChange={(e) => {
                    setVitesseMaximal(e.target.value);
                  }}
                />
              </Row>
              <Row sm={4}>
                <InputGroup className="mb-3">
                  Detection
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={detectionS}
                    onChange={(e) => {
                      setDetectionS(e.target.checked);
                    }}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  Evitement
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={Evitement}
                    onChange={(e) => {
                      setEvitement(e.target.checked);
                    }}
                  />
                </InputGroup>
              </Row>
              <Row sm={4}>
                Orientation{" "}
                <Input
                  sm={4}
                  value={orientation}
                  onChange={(e) => {
                    setOrientation(e.target.value);
                  }}
                ></Input>
              </Row>
            </Container>
          </Col>
        </Container>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleSubmit}>Save Changes</Button>
        </div>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {selectedMission && (
            <MyComponent MyObject={selectedMission}></MyComponent>
          )}
        </div>
      </div>
    </div>
  );
};
