import React from "react";

import img3 from "../assets/robotic-arm.png";
import img4 from "../assets/Frame 1 (3).png";
import Lottie from "lottie-react";
import gif1 from "../assets/animation_lkeiajog.json";
export const Hero = () => {
  return (
    <>
      <div className="d-flex  justify-content-between ">
        <p
          className="smallStyle"
          style={{
            fontFamily: "FontsFree-Net-Arboria-Bold",
            fontSize: "3.5rem",
            marginTop: "8rem",
            marginLeft: "6rem",
          }}
        >
          Our <span className="highlited"> platform</span> can <br></br> help
          you to organize <br></br>
          your robot's <span className="highlited">missions</span>
        </p>

        <Lottie animationData={gif1} style={{ width: "45vw" }} />
      </div>
      ;
    </>
  );
};
