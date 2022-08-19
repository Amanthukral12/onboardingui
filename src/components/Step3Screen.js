import React from "react";
import Base from "./Base";
import myself from "../assets/myself-fill.svg";
import team from "../assets/team-fill.svg";
import "./styles/Step1Screen.css";
const Step3Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="How are you planning to use Eden?"
      description="We'll streamline your setup experience accordingly."
    >
      <div className="teamSection">
        <div
          tabIndex="1"
          className="team"
          value={formData.teamSize}
          onClick={(e) => setFormData({ ...formData, teamSize: "myself" })}
        >
          <img src={myself} alt="myself" className="teamIcon" />
          <h4 className="teamHeading">For myself</h4>
          <p className="teamDescription">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          tabIndex="1"
          className="team"
          value={formData.teamSize}
          onClick={(e) => setFormData({ ...formData, teamSize: "team" })}
        >
          <img src={team} alt="team" className="teamIcon" />
          <h4 className="teamHeading">With my team</h4>
          <p className="teamDescription">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    </Base>
  );
};

export default Step3Screen;
