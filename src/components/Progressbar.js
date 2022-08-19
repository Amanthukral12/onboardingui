import React from "react";
import "./styles/Progressbar.css";
const Progressbar = (props) => {
  const NUMBER_OF_PAGES = [0, 1, 2, 3];

  const myStyle = {
    width:
      props.page === 0
        ? "20%"
        : props.page === 1
        ? "50%"
        : props.page === 2
        ? "80%"
        : "100%",
    backgroundColor: "#664de5",
  };

  const progressBar = NUMBER_OF_PAGES.map((id) => {
    if (id <= props.page) {
      return (
        <div
          key={id}
          onClick={() => props.changePage(id)}
          className="progress-step progress-step-active"
        />
      );
    } else {
      return (
        <div
          key={id}
          onClick={() => props.changePage(id)}
          className="progress-step"
        />
      );
    }
  });

  return (
    <React.Fragment>
      <div className="progressbar">
        <div className="progress" style={myStyle} />
        {progressBar}
      </div>
    </React.Fragment>
  );
};

export default Progressbar;
