import "./Card.css";

export default function Cards({ data, type }) {
  return (
    <div className={` ${
        type === "slide" ? " generateCard" : "productListings"
      }` }>

      {/* Wrap cards in a new div for animation */}
      <div
        className={`card-container ${
          type === "slide" ? "slide-animation" : " productContainer"
        }`}
      >
        {[...data, ...data].map((item, index) => (
          <div className="card" key={index}>
            {type === "slide" ? (
              <div
                className="title"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <p>{item.title}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
