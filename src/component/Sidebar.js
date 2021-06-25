import React from "react";
import { sendingOption } from "./RootComponent";

const Sidebar = () => {
  const handleDragOver = () => {
    console.log("smadd");
  };
  return (
    <div>
      <div class="hl_workflow--sidebar">
        <div class="hl_workflow--sidebar-inner">
          <div class="accordion" id="workflow-action-collapse">
            <div class="actions-set">
              <a
                class="collapsed"
                data-toggle="collapse"
                href="#actions-set1"
                role="button"
                aria-expanded="false"
                aria-controls="actions-set1"
              >
                <span>Sending Options</span>
                <i class="caret icon-arrow-down-1"></i>
              </a>
              <div
                class="collapse"
                id="actions-set1"
                data-parent="#workflow-action-collapse"
              >
                <ul class="actions-list">
                  {sendingOption.map((item) => (
                    <li onDragOver={handleDragOver}>
                      <span>{item.name}</span>{" "}
                      <i class="icon icon-resize-plus-2"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="actions-set">
              <a
                class="collapsed"
                data-toggle="collapse"
                href="#actions-set2"
                role="button"
                aria-expanded="false"
                aria-controls="actions-set2"
              >
                <span>Conditions and workflow</span>
                <i class="caret icon-arrow-down-1"></i>
              </a>
              <div
                class="collapse"
                id="actions-set2"
                data-parent="#workflow-action-collapse"
              >
                <ul class="actions-list">
                  <li>
                    <span>Wait</span> <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>If / Else</span>{" "}
                    <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Split</span> <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Go to</span> <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Goal</span> <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Start an automation</span>{" "}
                    <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>End this automation</span>{" "}
                    <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>End other automation</span>{" "}
                    <i class="icon icon-resize-plus-2"></i>
                  </li>
                  <li>
                    <span>Webhook</span> <i class="icon icon-resize-plus-2"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
