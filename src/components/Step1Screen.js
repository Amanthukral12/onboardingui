import React from "react";
import Base from "./Base";
import "./styles/Step1Screen.css";
const Step1Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="Welcome! First things first..."
      description="You can always change them later."
    >
      <form className="form">
        <label className="textLabel">Full Name</label>
        <input
          type="text"
          placeholder="Steve Jobs"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="inputBox"
          required="required"
        />
        <label className="textLabel">Display Name</label>
        <input
          type="text"
          placeholder="Steve"
          value={formData.displayName}
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
          className="inputBox"
          required="required"
        />
      </form>
    </Base>
  );
};

export default Step1Screen;
