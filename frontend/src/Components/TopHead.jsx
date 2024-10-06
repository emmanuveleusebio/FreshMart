import './TopHead.css'

export default function Top(){
    return(
        <div className="top">
            <div className='topStart'>
                <p className='mail'><i className="fa-solid fa-envelope"></i> hello@colorlib.com</p>
                <p className='offer'>Free Shipping for all Order of $99</p>
            </div>

            <div className="topEnd">
                <div className="socialMedias">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                </div>
                <div className="language">
                    <img src="https://themewagon.github.io/ogani/img/language.png" alt="" />
                    <p>English <i className="fa-solid fa-chevron-down"></i></p>
                </div>
                <div className='login'>
                    <button><i className="fa-solid fa-user"></i> Login</button>
                </div>
            </div>
        </div>
    )
}