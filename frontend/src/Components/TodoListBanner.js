import React, { useState } from "react";
import { TodoListComponent, HeaderComponent } from "../Components";
import contextApi from "../Context/contextApi";
import { exportImages } from "../Constants";

const TodoListBanner = () => {
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
          <TodoListComponent
            storeTasks={storeTasks}
            setStoreTasks={setStoreTasks}
          />
        </div>
      </contextApi.Provider>
    </>
  );
};

export default TodoListBanner;
