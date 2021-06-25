import React, { useEffect } from "react";
import "../styles/homeComponent.css";

const HomeComponent = ({ container, setContainer }) => {
  useEffect(() => {
    const data = localStorage.getItem("container");
    console.log(JSON.stringify(data));
    data && data.length > 0 && setContainer(JSON.parse(data));
  }, []);

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const position = (array, index, newItem) => {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  };

  const onDropLeft = (e, index) => {
    e.preventDefault();
    console.log("index", index);
    const data = e.dataTransfer.getData("text/plain");
    const dragData = JSON.parse(data);
    console.log("container", container);

    const newArray = position(container, index + 1, dragData);
    setContainer(newArray);
  };

  useEffect(() => {
    console.log("container", container);
    container &&
      container.length > 0 &&
      localStorage.setItem("container", JSON.stringify(container));
  }, [container]);

  return (
    <div>
      <div className="container center">
        <div>
          {container.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              {!item.isCondition ? (
                <li>
                  <div
                    onDragOver={allowDrop}
                    onDrop={(e) => onDropLeft(e, index)}
                    className="workflow_card--add --end"
                  >
                    <a href="#">
                      <i className="icon icon-plus"></i>
                    </a>
                  </div>
                </li>
              ) : (
                <>
                  <div className="d-flex">
                    <div className="left">
                      <li>
                        <div
                          onDragOver={allowDrop}
                          onDrop={(e) => onDropLeft(e, index)}
                          className="workflow_card--add --end btn btn-success"
                        >
                          <a href="#">
                            <i className="icon icon-plus"></i>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="right">
                      <li>
                        <div
                          onDragOver={allowDrop}
                          onDrop={(e) => onDropLeft(e, index+1)}
                          className="workflow_card--add --end btn btn-danger"
                        >
                          <a href="#">
                            <i className="icon icon-plus"></i>
                          </a>
                        </div>
                      </li>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {container.length === 0 && (
          <li>
            <div
              onDragOver={allowDrop}
              onDrop={onDropLeft}
              className="workflow_card--add --end"
            >
              <a href="#">
                <i className="icon icon-plus"></i>
              </a>
            </div>
          </li>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
