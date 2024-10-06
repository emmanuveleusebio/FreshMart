import './Header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className="brand">
                <img src="https://themewagon.github.io/ogani/img/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                    <li>PAGES</li>
                </ul>

            </div>
            <div className="headerEnd">
                    <div className="carts">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-solid fa-heart"></i>
                    </div>
                    <p className='price'>item: <span> $150.00</span></p>
                </div>
        </div>
    )
}