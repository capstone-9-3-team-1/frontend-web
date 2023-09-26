import "./howItWorks.css";

const howItWorks = [
  {
    image:
      "https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b2568a1a6ecc7bc50e3d2/previews/650b2568a1a6ecc7bc50e401/download/image.png",
    text: "Create Your Account",
    text2: "Begin browsing products based on your eco-values",
  },
  {
    image:
      "https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b25ec3f136e647e43e184/previews/650b25ed3f136e647e43e202/download/image.png",
    text: "Treat Yourself And Our Earth",
    text2: "Make a purchase of any product listed on our site ",
  },
  {
    image:
      "https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b28f341e22f9e71291d9f/previews/650b28f441e22f9e71291e2d/download/image.png",
    text: " Snap A Pic",
    text2: "Upload a photo of your reciept to recieve reward tokens",
  },
  {
    image:
      "https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b277e33f7d6604a6cb7c6/previews/650b277e33f7d6604a6cb821/download/image.pngs",
    text: "Redeem Your Tokens",
    text2: "Atara tokens can be redeemed to earn exciting rewards !",
  },
];

export default function HowItWorks() {
  return (
    <div className="feature-cards">
      {howItWorks.map((item, i) => (
        <div key={i} className="feature-card">
          <img src={item.image} alt={i}></img>

          <p className="features-card-content">
            <b>{item.text}</b>
          </p>
          <p className="features-card-content-2">{item.text2}</p>
        </div>
      ))}
    </div>
  );
}
