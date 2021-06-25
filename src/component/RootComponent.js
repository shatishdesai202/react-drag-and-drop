import React, { useState } from "react";
import HomeComponent from "./HomeComponent";
import Sidebar from "./Sidebar";

const RootComponent = () => {
  const [container, setContainer] = useState([]);

  return (
    <div>
      <HomeComponent container={container} setContainer={setContainer} />
      <Sidebar container={container} setContainer={setContainer} />
    </div>
  );
};

export default RootComponent;
