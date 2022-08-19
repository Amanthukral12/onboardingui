import React, { useState } from "react";
import Step1Screen from "./Step1Screen";
import Step2Screen from "./Step2Screen";
import Step3Screen from "./Step3Screen";
import Step4Screen from "./Step4Screen";
import ProgressBar from "./Progressbar";
import logo from "../assets/logo.png";
import "./styles/Home.css";
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
  const stepHandler = (page) => {
    if (page === 3) {
      return setPage(4);
    }
    if (page <= 3) {
      setPage(page);
    } else {
      setPage(1);
    }
  };

  let progressWidth = 0;
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
    <div className="container">
      <header>
        <img src={logo} alt="Logo" className="logo"></img>
      </header>
      <section>
        <ProgressBar
          page={page}
          changePage={stepHandler}
          stepWidth={progressWidth}
        />
      </section>
      <main>{pageDisplay()}</main>
      <footer>
        <button
          type="submit"
          className="submitButton"
          onClick={() => {
            if (page === PageTitles.length - 1) {
              setPage(0);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === PageTitles.length - 1 ? "Launch Eden" : "Create Workspace"}
        </button>
      </footer>
    </div>
  );
};

export default Home;
