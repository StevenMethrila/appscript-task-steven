import './index.css'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer-main-part'>
                <div>
                    <h1 className="footer-main-heading">BE THE FIRST TO KNOW</h1>
                    <h2 className="footer-signup-heading">Sign up for updates from mettā muse.</h2>
                    <div className='input-btn'>
                        <input className='email-input-box' type='text' placeholder='Enter your e-mail...'/>
                        <button className='subscribe-btn' type="submit">Subscribe</button>
                    </div>
                </div>
                <hr className='horizontale-line'/>
                <div className='contact-container'>
                    <h1 className='footer-contact'>CONTACT US</h1>
                    <div className='number-email-container'>
                        <h2 className='footer-number'>+44 221 133 5360</h2>
                        <h2 className='footer-email'>customercare@mettamuse.com</h2>
                    </div>
                    <div>
                        <h2 className='currency-heading'>CURRENCY</h2>
                        <div className='currency-container'>
                            <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723398652/United_States_of_America_US_u9aysd.png" alt="currency-state"/>
                            <h2 className='currency-state'>USD</h2>
                        </div>
                        <h2 className='transaction-heading'>Transactions will be completed in Euros and a currency reference is available on hover.</h2>
                    </div>
                </div>
                
            </div>
            <hr className='horizontal-line'/>
            <div className='follow-link-container'>
                <div className='follow-container1'>
                    <h2 className='follow-main-heading'>mettā muse</h2>
                    <div>
                        <h2 className='follow-main-subheading'>About Us</h2>
                        <h2 className='follow-main-subheading'>Stories</h2>
                        <h2 className='follow-main-subheading'>Artisans</h2>
                        <h2 className='follow-main-subheading'>Boutiques</h2>
                        <h2 className='follow-main-subheading'>Contact Us</h2>
                        <h2 className='follow-main-subheading'>EU Compliances Docs</h2>
                    </div>
                </div>
                <hr className='horizontale-line'/>
                <div className='follow-container2'>
                    <h2 className='follow-main-heading'>Quick Links</h2>
                    <div>
                        <h2 className='follow-main-subheading'>Orders & Shipping</h2>
                        <h2 className='follow-main-subheading'>Join/Login as a Seller</h2>
                        <h2 className='follow-main-subheading'>Payment & Pricing</h2>
                        <h2 className='follow-main-subheading'>Return & Refunds</h2>
                        <h2 className='follow-main-subheading'>FAQs</h2>
                        <h2 className='follow-main-subheading'>Privacy Policy</h2>
                        <h2 className='follow-main-subheading'>Terms & Conditions</h2>
                    </div>
                </div>
                <hr className='horizontale-line'/>
                <div className='follow-container2'>
                    <h2 className='follow-main-heading'>Follow Us</h2>
                    <div className='linkedin-insta-container'>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400176/svg_tcdxsn.png" alt="insta"/>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400183/mdi_linkedin_o8arlr.png" alt="Linkedin"/>
                    </div>
                    <h2 className='transaction-payment-online'>mettā muse Accepts</h2>
                    <div className='pay-list-container'>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400616/Group_136188_lxwihl.png" alt="Gpay"/>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400630/Group_136190_mgi0ob.png" alt="mastercard"/>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400645/Group_136192_wukoo3.png" alt="pal"/>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400652/Group_136193_ytgien.png" alt="Amex"/>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400665/Group_136194_n7uq6j.png" alt="Ipay"/>
                        <img className='bank-cards' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723400684/Group_136195_geoxfd.png" alt="pay"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer