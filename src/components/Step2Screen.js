import React from "react";
import Base from "./Base";
import "./styles/Step1Screen.css";
const Step2Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="Let's setup a home for all your work"
      description="You can always another workspace later"
    >
      <form className="form">
        <label className="textLabel">Workspace Name</label>
        <input
          type="text"
          placeholder="Eden"
          value={formData.workspaceName}
          onChange={(e) =>
            setFormData({ ...formData, workspaceName: e.target.value })
          }
          className="inputBox"
          required
        />
        <label className="textLabel">
          Workplace URL <span className="optional">(optional)</span>
        </label>
        <div className="webUrl">
          <span className="initialUrl">www.eden.com/</span>
          <input
            type="text"
            placeholder="Example"
            value={formData.workspaceURL}
            onChange={(e) =>
              setFormData({ ...formData, workspaceURL: e.target.value })
            }
            className="example"
            required
          />
        </div>
      </form>
    </Base>
  );
};

export default Step2Screen;
