import React from "react";
import Base from "./Base";

const Step2Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="Let's setup a home for all your work"
      description="You can always another workspace later"
    >
      <form>
        <label>Workspace Name</label>
        <input
          type="text"
          placeholder="Eden"
          value={formData.workspaceName}
          onChange={(e) =>
            setFormData({ ...formData, workspaceName: e.target.value })
          }
        />
        <label>
          Workplace URL <span>(optional)</span>
        </label>
        <span>www.eden.com/</span>
        <input
          type="text"
          placeholder="Example"
          value={formData.workspaceURL}
          onChange={(e) =>
            setFormData({ ...formData, workspaceURL: e.target.value })
          }
        />
      </form>
    </Base>
  );
};

export default Step2Screen;
