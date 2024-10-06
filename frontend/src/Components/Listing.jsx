import './Listing.css'


export default function Listing(){

    const data = [
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-4.jpg',
            title : 'DRINK FRUITS',
        },
         {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-5.jpg',
            title : 'FRESH MEAT',
        }, 
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-2.jpg',
            title : 'DRIED FRUITS',
        },
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-1.jpg',
            title : 'FRESH FRUITS',
        },
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-3.jpg',
            title : 'FRESH VEGETABLES',
        },
       
    ]

    return(
        <div>
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
               { data.map((item, index) => (
                    <div
                    className="products"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div className="options">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    )
}