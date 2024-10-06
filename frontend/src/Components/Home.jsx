import "./Home.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="lists">
        <div className="heading">
          <i className="fa-solid fa-bars"></i>
          <p>All departments</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="sort">
        <p>Fresh Meat</p>
        <p>Vegetables</p>
        <p>Fruit & Nut Gifts</p>
        <p>Fresh Berries</p>
        <p>Ocean Foods</p>
        <p>Butter & Eggs</p>
        <p>Fastfoods</p>
        <p>Fresh Onion</p>
        <p>Papaya & Crips</p>
        <p>Oatmeal</p>
        <p>Fresh Bananas</p>
        </div>
      </div>

      <div className="HomeContents">
        <div className="contentHead">
          <div className="search">
            <div className="catagories">
              <p> All Catagories</p>
            </div>
            <input type="text" placeholder="What do you need?" />

            <button>SEARCH</button>
          </div>

          <div className="contacts">
            <i className="fa-solid fa-phone"></i>
            <div className="number">
              <p>+65 11.188.888</p>
              <span>support 24/7 time</span>
            </div>
          </div>
        </div>

        <div className="homeBody">
          <div className="homeCaption">
          <h4>FRUIT FRESH</h4>
          <h1>Vegetable 100% Organic</h1>
          <p>Free Pickup and Delivery Available</p>
          <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
