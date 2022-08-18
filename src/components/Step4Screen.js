import React from "react";
import Base from "./Base";
const Step4Screen = ({ formData, setFormData }) => {
  console.log(formData);
  return (
    <div>
      <p>Tick Icon</p>
      {/* <Base
        title=`Congratulations, ${formData.displayName}!``
        description="You have completed onboarding, you can start using Eden!"
      ></Base> */}
      <h1>Congratulations, {formData.displayName}</h1>
    </div>
  );
};

export default Step4Screen;
