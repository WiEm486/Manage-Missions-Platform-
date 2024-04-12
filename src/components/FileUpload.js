import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import MyComponent from "./MyComponent";
import Map from "../components/Map";
import { EditMession } from "./EditMession";
import img1 from "../assets/GroovySittingDoodle.png";

function FileUpload() {
  // Initialiser la mission concaténée

  const [missionsV, setMissionsV] = useState([]);
  const [missionsF, setMissionsF] = useState([]);
  const [finalMission, setFinalMissions] = useState({});
  const missions = [];
  const [position, setPosition] = useState(false);

  const HandleConcatenate = () => {
    console.log(missionsV);
    const ResultMission = {
      distance: missionsV[0].distance,
      id: "ConcatenatedMission",
      one_way: false,
      origin: {
        latitude: missionsV[0].origin?.latitude,
        longitude: missionsV[0].origin?.longitude,
      },
      points: [],
      safe_point_id: -2,
      segments: [],
      start_threshold: -1,
    };

    missionsV.forEach((mission) => {
      ResultMission.points.push(...mission.points);
      ResultMission.segments.push(...mission.segments);
      console.log(mission.segments);

      console.log(ResultMission);
    });
    console.log(missionsV.length);
    console.log(ResultMission.segments);
    for (let i = 0; i < ResultMission.points.length; i++) {
      ResultMission.points[i].id = i;
    }
    for (let i = 0; i < ResultMission.segments.length; i++) {
      ResultMission.segments[i].id = i;
      ResultMission.segments[i].points = [i, i + 1];
    }
    console.log(finalMission);
    setFinalMissions(ResultMission);
    setPosition(true);
  };

  const handleFileUpload = (event) => {
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;

        const Data = JSON.parse(fileContent);
        console.log(Data);
        missions.push(Data);
        console.log(missions);
        setMissionsV(missions);
        setMissionsF(missions);
      };
      reader.readAsText(file);
    }
    // handleResult();
  };

  return (
    <>
      {" "}
      <div className="mt-30 section">
        <div
          style={{
            width: "80vw",
            backgroundColor: "rgb(214, 254, 241)",
            borderRadius: "50px",
          }}
        >
          {" "}
          <h3
            className="d-flex justify-content-center mb-5  mt-5"
            style={{
              fontFamily: "FontsFree-Net-Arboria-Bold",
              fontSize: "2.5rem",
            }}
          >
            Concatenate Missions
          </h3>
          <Container className="d-flex justify-content-center ">
            <div>
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
              <Button
                className="btn-primary  btn_holder"
                onClick={HandleConcatenate}
              >
                {" "}
                Concatenate{" "}
              </Button>
            </div>
          </Container>
          {console.log(finalMission)}
        </div>
      </div>
      <div style={{ marginTop: "8rem" }}>
        <div className="d-flex  flex-column justify-content-center  align-items-center">
          {position && (
            <p
              style={{
                fontFamily: "FontsFree-Net-Arboria-Bold",
                fontSize: "1.5rem",
              }}
            >
              You can Download File by Clicking Here{" "}
            </p>
          )}
          {position && (
            <p
              style={{
                fontFamily: "YsabeauOffice-Light",
                fontSize: "1rem",
              }}
            >
              Here you can download the concatenated File or you can observe the
              result Mission on the Map{" "}
            </p>
          )}
        </div>
        {position && <MyComponent MyObject={finalMission}></MyComponent>}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {position && <Map MyObject={finalMission}></Map>}
      </div>
      <EditMession list={missionsF}></EditMession>
    </>
  );
}

export default FileUpload;
