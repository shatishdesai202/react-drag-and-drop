import React from "react";
import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";

export const sendingOption = [
  { name: "send Mail" },
  { name: "send a site message" },
  { name: "Send SMS" },
  { name: "Notify Someone" },
];

const RootComponent = () => {
  return (
    <div>
      <MainComponent />
      {/* <Sidebar /> */}
    </div>
  );
};

export default RootComponent;
