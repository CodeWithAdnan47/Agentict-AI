import "./App.css";

const cardInfo = {
  title: "Serene Landscapes of Santorini",
  date: new Date("2023-06-15"),
  comments: 42,
  subTitle: "Where the Aegean meets the sky.",
  description:
    "Santorini, with its iconic white-washed buildings and blue domes, offers breathtaking views of the caldera, stunning sunsets, and a unique volcanic landscape that captivates every visitor.",
  category: "travel",
  imageURL:
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
};

function App() {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${cardInfo.imageURL})` }}
      >
        <span className="category">{cardInfo.category}</span>
      </div>

      <div className="card-content">
        <p className="meta">
          {cardInfo.date.toDateString()} · {cardInfo.comments} Comments
        </p>

        <h2>{cardInfo.title}</h2>
        <h4>{cardInfo.subTitle}</h4>

        <p className="description">{cardInfo.description}</p>

        <button>Read More</button>
      </div>
    </div>
  );
}

export default App;
