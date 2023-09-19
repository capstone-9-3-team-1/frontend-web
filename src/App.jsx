import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Atara 🍃</h1>
      </header>
      <div className="body-header">
        <h1>Choosing Green</h1>
        <h2>Gaining Gold </h2>
        <div className="app-link">
          <a href="#link-to-app">Get our App 📲</a>
          {/* place app link here */}
        </div>
        <div className="feature">
          <h6>
            <center>How It Works</center>
          </h6>
          {/* place key features here */}
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Description 1</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Description 2</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Description 3</p>
            </div>
            <div className="feature-card">
              <h3>Feature 4</h3>
              <p>Description 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="app_info">
        <p>Who is Atara?</p>
        {/* tell about the app here */}
      </div>
      <div className="reviews">
        <h3>Impact Stories</h3>
        {/* user reviews with app */}
      </div>
      <div className="mission">
        <p>Mission Statement</p>
        {/* what is Atara's purpose */}
      </div>
    </div>
  );
}
