import React from "react";
import Base from "./Base";
const Step3Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="How are you planning to use Eden?"
      description="We'll streamline your setup experience accordingly."
    >
      <div>
        <div
          value={formData.teamSize}
          onClick={(e) => setFormData({ ...formData, teamSize: "myself" })}
        >
          <p>Icon1</p>
          <h4>For myself</h4>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>
        <div
          value={formData.teamSize}
          onClick={(e) => setFormData({ ...formData, teamSize: "team" })}
        >
          <p>Icon2</p>
          <h4>With my team</h4>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </Base>
  );
};

export default Step3Screen;
