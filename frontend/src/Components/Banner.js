import React, { useState } from "react";
import { exportImages } from "../Constants";
import { BodyComponent, HeaderComponent } from "../Components";
import contextApi from "../Context/contextApi";
import "./Banner.css";

const Banner = () => {
  const [storeTasks, setStoreTasks] = useState([]);
  return (
    <>
      <contextApi.Provider value={{ storeTasks, setStoreTasks }}>
        <HeaderComponent />
      </contextApi.Provider>
      <div className="banner__container">
        <video
          className="bg__video"
          src={exportImages.Banner}
          autoPlay
          loop
          playsInline
        ></video>
        <BodyComponent />
      </div>
    </>
  );
};

export default Banner;
