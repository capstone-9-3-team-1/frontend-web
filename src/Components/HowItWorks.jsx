import "./howItWorks.css";
import createAccount from "../assets/create_account.png";
import rewardGift from "../assets/rewards_gifts.png";
import snapPic from "../assets/snap_photo.png";
import treatYourself from "../assets/treat_yourself.png";

const howItWorks = [
  {
    image: createAccount,
    text: "Create Your Account",
    text2: "Begin browsing products based on your eco-values",
  },
  {
    image: treatYourself,
    text: "Treat Yourself And Our Earth",
    text2: "Make a purchase of any product listed on our site ",
  },
  {
    image: snapPic,
    text: " Snap A Pic",
    text2: "Upload a photo of your reciept to recieve reward tokens",
  },
  {
    image: rewardGift,
    text: "Redeem Your Tokens",
    text2: "Atara tokens can be redeemed to earn exciting rewards !",
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works">
      <center>
        <h2 className="heading">How It Works</h2>
      </center>
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
    </div>
  );
}
