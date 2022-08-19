import React from "react";
import "./styles/Base.css";
const Base = ({ title = "Title", description = "Description", children }) => {
  return (
    <div className="baseMain">
      <div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Base;
