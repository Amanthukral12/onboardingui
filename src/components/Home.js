import React, { useState } from "react";
import Step1Screen from "./Step1Screen";
import Step2Screen from "./Step2Screen";
import Step3Screen from "./Step3Screen";
import Step4Screen from "./Step4Screen";
const Home = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    teamSize: "",
  });
  const PageTitles = ["Step1", "Step2", "Step3", "Step4"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Step1Screen formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Step2Screen formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Step3Screen formData={formData} setFormData={setFormData} />;
    } else {
      return <Step4Screen formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
      <header>
        <p>Icon</p>
        <h4>Eden</h4>
      </header>
      <section>Progress bar</section>
      <main>{pageDisplay()}</main>
      <footer>
        <button
          onClick={() => {
            if (page === PageTitles.length - 1) {
              setPage(0);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          Create Workplace
        </button>
      </footer>
    </div>
  );
};

export default Home;
