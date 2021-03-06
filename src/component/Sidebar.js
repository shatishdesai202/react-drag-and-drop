import React, { useEffect } from "react";
import { sendingOption } from "../constant/constant";

const Sidebar = ({ container, setContainer }) => {
  // useEffect(() => {
  //   console.log(container);
  //   console.log(setContainer);
  // }, []);

  const handleDragOver = (e, item) => {
    // console.log("event", e);
    // console.log("item", item);

    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  return (
    <div>
      <div className="hl_workflow--sidebar">
        <div className="hl_workflow--sidebar-inner">
          <div className="accordion" id="workflow-action-collapse">
            <div className="actions-set">
              <a
                className="collapsed"
                data-toggle="collapse"
                href="#actions-set1"
                role="button"
                aria-expanded="false"
                aria-controls="actions-set1"
              >
                <span>Sending Options</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div
                className="collapse"
                id="actions-set1"
                data-parent="#workflow-action-collapse"
              >
                <ul className="actions-list">
                  {sendingOption.map((item, index) => (
                    <li
                      draggable
                      onDragStart={(e) => handleDragOver(e, item)}
                      key={index}
                    >
                      <span>{item.name}</span>
                      <i className="icon icon-resize-plus-2"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="actions-set">
              <a
                className="collapsed"
                data-toggle="collapse"
                href="#actions-set2"
                role="button"
                aria-expanded="false"
                aria-controls="actions-set2"
              >
                <span>Conditions and workflow</span>
                <i className="caret icon-arrow-down-1"></i>
              </a>
              <div
                className="collapse"
                id="actions-set2"
                data-parent="#workflow-action-collapse"
              >
                <ul className="actions-list">
                  <li>
                    <span>Wait</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>If / Else</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Split</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Go to</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Goal</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Start an automation</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>End this automation</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>End other automation</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Webhook</span>{" "}
                    <i className="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
