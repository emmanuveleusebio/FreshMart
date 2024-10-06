import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className='links'>
                <img src="/VEGyard.png" alt="" />
                <p>Address: 60-49 Road 11378 New York</p>
                <p>Phone: +65 11.188.888</p>
                <p>Email: hello@colorlib.com</p>
            </div>

            <div className='links'>

                <h3>Useful Links</h3>
                <p>About Us</p>
                <p>About Our Shop</p>
                <p>Secure Shopping</p>
                <p>Delivery infomation</p>
                <p>Privacy Policy</p>
                <p>Our Sitemap</p>
            </div>

            <div className='links'>
                <h3>Networks</h3>
                <p>Who We Are</p>
                <p>Our Services</p>
                <p>Projects</p>
                <p>Contact</p>
                <p>Innovation</p>
                <p>Testimonials</p>
            </div>

            <div className='links'>
                <h3>Join Our Newsletter Now</h3>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div className="subscribe">
                    <input type="email" />
                    <button>SUBSCRIBE</button>
                </div>
                <div className="footerLinks">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                </div>
            </div>
        </div>
    )
}