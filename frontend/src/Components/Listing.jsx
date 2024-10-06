import "./Listing.css";

export default function Listing() {
  const data = [
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-3.jpg",
      title: "DRINK FRUITS",
      price: "$30.00",
    },
    {
      img: "	https://themewagon.github.io/ogani/img/featured/feature-6.jpg",
      title: "DRINK FRUITS",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/featured/feature-7.jpg",
      title: "DRINK FRUITS",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-4.jpg",
      title: "DRINK FRUITS",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-5.jpg",
      title: "FRESH MEAT",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-2.jpg",
      title: "DRIED FRUITS",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-1.jpg",
      title: "FRESH FRUITS",
      price: "$30.00",
    },
    {
      img: "https://themewagon.github.io/ogani/img/categories/cat-3.jpg",
      title: "FRESH VEGETABLES",
      price: "$30.00",
    },
  ];

  return (
    <div className="listingSection">
      <div className="listHead">
        <h1>Featured Product</h1>
        <ul>
          <li>All</li>
          <li>Oranges</li>
          <li>Fresh Meat</li>
          <li>Vegetables</li>
          <li>Fastfood</li>
        </ul>
      </div>

      <div className="listing">
        {data.map((item, index) => (
          <div className="productListings" key={index}>
            <div
              className="products"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                backgroundPosition: "center", 
              }}
            >
              <div className="options">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>

            <div className="productInfo">
              <p className="caption">{item.title}</p>
              <p className="rate">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
