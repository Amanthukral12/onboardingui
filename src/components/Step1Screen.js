import React from "react";
import Base from "./Base";
const Step1Screen = ({ formData, setFormData }) => {
  return (
    <Base
      title="Welcome! First things first"
      description="You can always change them later"
    >
      <form>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Steve Jobs"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <label>Display Name</label>
        <input
          type="text"
          placeholder="Steve"
          value={formData.displayName}
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
        />
      </form>
    </Base>
  );
};

export default Step1Screen;
