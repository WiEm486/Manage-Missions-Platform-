import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import CustomMarkerIcon from "../assets/location (2).png"; // Importez votre icône de marqueur personnalisée

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  width: "50vw",
  height: "60vh",
  border: "3px solid #00ddb3 ",
  borderRadius: " 10px",
};

const center = {
  lat: 35.8174858,
  lng: 10.5913582,
};
// const mapOptions = {
//   mapTypeId: "satellite",
// };

function Map({ MyObject }) {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (MyObject && MyObject.points) {
      const updatedPoints = MyObject.points.map((item) => ({
        lat: item.location.latitude,
        lng: item.location.longitude,
      }));
      setPoints(updatedPoints);
    }
  }, [MyObject]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAUsKMMhYbQ6baSUZexFVppNcCMBmzJR4E">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {points.map((point, index) => (
          <Marker
            key={index}
            position={point}
            icon={{
              url: CustomMarkerIcon, // Utilisez l'icône de marqueur personnalisée importée
              // Ajustez la taille de l'icône ici
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
