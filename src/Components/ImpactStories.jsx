import "./impactStories.css";

const impactStories = [
  {
    image:
      "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "As small business owners, we were keen to align our values with our business practices and find sustainable packaging solutions. Discovering Atara was a game-changer. It offered a wide range of eco-friendly shipping products, such as recyclable boxes, compostable packaging, and reusable shipping supplies. We didn’t have to compromise on our vision or values thanks to the Atara team.",
    text2: "- The Small Business Team",
  },
  {
    image:
      "https://images.pexels.com/photos/7513064/pexels-photo-7513064.jpeg?auto=compress&cs=tinysrgb&w=800",
    text: "I had just moved to New York and, I was determined to make my new home as eco-friendly as possible. Thankfully, I discovered the Atara app, which became my go-to resource for finding biodegradable household products, from cleaning supplies to compostable kitchenware. The best part was that every purchase I made not only helped the environment but also earned me tokens within the app, which I could use to get even more eco-friendly items for my home!",
    text2: "- JoAnn, Atara User",
  },
  {
    image:
      "https://trello.com/1/cards/650b1ac38d18b22c249e580b/attachments/650b22ec52c2050c0af046b1/download/image.png",
    text: " As a father of two young kids, ensuring the safety of the products in our home has always been a top priority. That's why I turned to the Atara app, which has been a lifesaver in my quest for non-toxic household items. From baby essentials to cleaning supplies, the app curated a selection of products that met the highest non-toxic standards. The peace of mind knowing that our home was free from harmful chemicals was priceless. Plus, the Atara's reward system encouraged us to make safer choices, allowing us to earn tokens with every non-toxic purchase, which we could use to buy even more safe products for our family.",
    text2: "- Rick Sanchez, Atara User",
  },
];
export default function ImpactStories() {
  return (
    <div>
      <div className="review-cards">
        <center>
          <h2 >Impact Stories</h2>
        </center>
        {impactStories.map((item, i) => (
          <div key={i} className="review-card">
            <img src={item.image} alt={i}></img>

            <p className="review-card-content">{item.text}</p>
            <p className="review-card-content-2">
              <b>{item.text2}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
