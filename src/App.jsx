import React from "react";
 import "./style.css";
import HowItWorks from "./Components/HowItWorks";

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
