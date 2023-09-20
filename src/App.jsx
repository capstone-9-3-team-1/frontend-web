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
          <h2>
            <center>How It Works</center>
          </h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Create Your Account</h3>
              <p>Begin browsing products based on your eco-values</p>
            </div>
            <div className="feature-card">
              <h3>Treat Yourself - And Our Earth</h3>
              <p>Make a purchase of any product listed on our site </p>
            </div>
            <div className="feature-card">
              <h3>Snap A Pic </h3>
              <p>Upload a photo of your reciept to recieve reward tokens </p>
            </div>
            <div className="feature-card">
              <h3>Redeem Your Tokens </h3>
              <p>Atara tokens can be redeemed to earn exciting rewards !</p>
            </div>
          </div>
        </div>
      </div>

      <div className="app_info">

        {/* <p>Who is Atara?</p> */}
        {/* tell about the app here */}
      </div>
      <div className="reviews">
        <h4>
          <center>Impact Stories</center>
        </h4>
        <div className="review-cards">
          <div className="review-card">
            <h3>{/* possible picture of users here  */}</h3>
            <p>User Story</p>
          </div>
          <div className="review-card">
            <h3>{/*              Possible Picture Here*/}</h3>
            <p>User Story</p>
          </div>
          <div className="review-card">
            <h3>{/*                Possible Picture Here */}</h3>
            <p>User Story</p>
          </div>
          <div className="review-card">
            <h3>{/* possible user picture here */}</h3>
            <p>User Story</p>
          </div>
        </div>
        {/* user reviews with app */}
      </div>
      <br></br>
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
