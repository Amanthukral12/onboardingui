import React from "react";
import "./styles/Base.css";
import check from "../assets/check.svg";
const Step4Screen = ({ formData, setFormData }) => {
  console.log(formData);
  return (
    <div>
      <img src={check} alt="check icon" className="icon" />
      <h1 className="title">Congratulations, {formData.displayName}</h1>
    </div>
  );
};

export default Step4Screen;
