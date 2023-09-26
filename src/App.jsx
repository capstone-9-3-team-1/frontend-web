import React from "react";
import "./style.css";
import HowItWorks from "./Components/HowItWorks";
import ImpactStories from "./Components/ImpactStories";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img
          src="https://storage.googleapis.com/atara_images/atara_logo.png"
          alt="Atara Logo"
          width="250"
          height="100"
        />
      </header>

      <div className="body-header">
        <h1>Saving The Planet</h1>
        <h2>While Saving You Money </h2>
        <div className="app-link">
          <a href="https://frontend-web-atara.vercel.app/">Get our App 📲</a>
        </div>
      </div>
      <HowItWorks />
      <ImpactStories />

      <div className="mission">
        <h4>
          <center>Mission Statement</center>
        </h4>
        <p>
          <center>
            <i>
              We strive to empower users to “purchase positively” in terms of
              their environmental impact and aim to expand our reach beyond New
              York, catalyzing a global shift towards sustainable practices and
              fostering a community of responsible consumers.
            </i>
          </center>
        </p>
      </div>
    </div>
  );
}
