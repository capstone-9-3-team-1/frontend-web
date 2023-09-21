import React from "react";
import "./style.css";

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
          <a href="#link-to-app">Get our App 📲</a>
          {/* place app link here */}
        </div>
        <div className="feature">
          <h2>
            <center>How It Works</center>
          </h2>

          <div className="feature-cards">
            {/* imgs for the circles will go in these divs */}
            <div className="feature-card">
              <img
                src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b2568a1a6ecc7bc50e3d2/previews/650b2568a1a6ecc7bc50e401/download/image.png"
                alt="account"
                className="img-account"
              ></img>
            </div>
            <div className="feature-card">
              <img
                src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b25ec3f136e647e43e184/previews/650b25ed3f136e647e43e202/download/image.png"
                alt="account"
                className="img-earth"
              ></img>
            </div>
            <div className="feature-card">
              {" "}
              <div className="feature-card">
                <img
                  src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b28f341e22f9e71291d9f/previews/650b28f441e22f9e71291e2d/download/image.png"
                  alt="account"
                  className="img-snap"
                ></img>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card">
                <img
                  src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b277e33f7d6604a6cb7c6/previews/650b277e33f7d6604a6cb821/download/image.pngs"
                  alt="account"
                  className="img-tokens"
                ></img>
              </div>
            </div>
          </div>
          <br></br>
          <div className="features-card-content">
            <div className="feature-card-content">
              <h3>Redeem Your Tokens </h3>
              <p>
                Atara tokens can be redeemed <br></br>to earn exciting rewards !
              </p>
            </div>
            <div className="feature-card-content">
              <h3>Snap A Pic </h3>
              <p>
                Upload a photo of your reciept <br></br>to recieve reward tokens{" "}
              </p>
            </div>

            <div className="feature-card-content">
              <h3>Treat Yourself - And Our Earth</h3>
              <p>Make a purchase of any product listed on our site </p>
            </div>
            <div className="feature-card-content">
              <h3>Create Your Account</h3>
              <p>
                Begin browsing products <br></br>based on your eco-values
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h4>
          <center>Impact Stories</center>
        </h4>
        <div className="review-cards">
          <div className="review-card">
          <img
                  src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b1c3e0418007416dfe668/download/image.png"
                  alt="small-business"
                ></img>
            <p>
              “As small business owners, we were keen to align our values with
              our business practices and find sustainable packaging solutions.
              Discovering Atara was a game-changer. It offered a wide range of
              eco-friendly shipping products, such as recyclable boxes,
              compostable packaging, and reusable shipping supplies. We didn’t
              have to compromise on our vision or values thanks to the Atara
              team.” - The Small Business Team
            </p>
          </div>
          <div className="review-card">
          <img
                  src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b1c4dd8ee07f4063a813c/download/image.png"
                  alt="small-business"
                ></img>
            <p>
              “I had just moved to New York and, I was determined to make my new
              home as eco-friendly as possible. Thankfully, I discovered the
              Atara app, which became my go-to resource for finding
              biodegradable household products, from cleaning supplies to
              compostable kitchenware. The best part was that every purchase I
              made not only helped the environment but also earned me tokens
              within the app, which I could use to get even more eco-friendly
              items for my home!” - JoAnn, Atara User
            </p>
          </div>
          <div className="review-card">
          <img
                  src="https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b22ec52c2050c0af046b1/download/image.png"
                  alt="dad-story"
                ></img>
            <p>
              “As a father of two young kids, ensuring the safety of the
              products in our home has always been a top priority. That's why I
              turned to the Atara app, which has been a lifesaver in my quest
              for non-toxic household items. From baby essentials to cleaning
              supplies, the app curated a selection of products that met the
              highest non-toxic standards. The peace of mind knowing that our
              home was free from harmful chemicals was priceless. Plus, the
              Atara's reward system encouraged us to make safer choices,
              allowing us to earn tokens with every non-toxic purchase, which we
              could use to buy even more safe products for our family.” - Rick
              Sanchez, Atara User
            </p>
          </div>
          {/* <div className="user-stories">
            <p>User Story 1</p>
            <p>User Story 2</p>
            <p>User Story 3</p>
            <p>User Story 4</p>
          </div> */}
        </div>
        <br></br>
      </div>
      <div className="mission">
          <h4>
            <center>Mission Statement</center>
          </h4>
          <p>
            <center>
              <i>
                We strive to empower users to “purchase positively” in terms of
                their environmental impact and aim to expand our reach beyond
                New York, catalyzing a global shift towards sustainable
                practices and fostering a community of responsible consumers.
              </i>
            </center>
          </p>
        </div>
    </div>
  );
}
