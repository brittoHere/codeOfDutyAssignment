import React, { useState } from "react";
import { HeaderComponent, CalculatorListBodyComponent } from "../Components";
import contextApi from "../Context/contextApi";
import { exportImages } from "../Constants";

const CalculateListBanner = () => {
  const [storeTasks, setStoreTasks] = useState([]);

  return (
    <>
      <contextApi.Provider value={{ storeTasks, setStoreTasks }}>
        <HeaderComponent />

        <div className="banner__container">
          <video
            className="bg__video"
            src={exportImages.Banner}
            autoPlay
            loop
            playsInline
          ></video>
          <CalculatorListBodyComponent
            storeTasks={storeTasks}
            setStoreTasks={setStoreTasks}
          />
        </div>
      </contextApi.Provider>
    </>
  );
};

export default CalculateListBanner;
