import React from "react";
import WindowResizeLogger from "../components/WindowResizeLogger";
import UserInfoForm from "../components/UserInfoForm";

function About() {
  return (
    <>
      <div className="aboutbody">
        <div className="aboutfirst">
          <h3>The size of the Screen could be important...</h3>
          <div className="aboutfirstin">
            <WindowResizeLogger />
          </div>
        </div>
        <div className="aboutsecond">
          <UserInfoForm />
        </div>
        <div className="aboutthird">
          <p>Anzahl logischer Prozessoren: 8</p>
          <p>Ram: 8GB</p>
          <p>
            Browser nutzen oft nur einen fest zugeteilten Teil des Rams aus
            Desktop PC´s sind das oft max. 8GB
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
