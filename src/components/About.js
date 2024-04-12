import React from "react";
import robotImage from "../assets/Chat bot (2).gif";

export const About = () => {
  return (
    <div className=" title-holder"  id="about">
      <h2>About Us</h2>
      <div className="subtitle"> More information about us </div>
      <div
        className=" parag"
        style={{
          width: "50vw",
          fontFamily: "karla",
          fontSize: "1.5rem",
          fontWeight: "100",
          lineHeight: "3rem",
          marginLeft: "20rem",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Our robot mission coordination platform is designed to help you
          maximize your robot's efficiency by optimizing mission planning and
          execution. By using our platform, you will be able to easily
          coordinate missions, edit existing missions, benefit from real-time
          monitoring and detailed reports, all secure and confidential. Do not
          waste any more time and join our platform now to optimize the
          performance of your robot.{" "}
        </p>
      </div>
    </div>
  );
};
