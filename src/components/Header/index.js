import './index.css'

const Header = () => {
    return(
        <div className="header-main-container">
            <div className="header-section">
                <div className="logo">
                    <div>
                        <button className='hambuger-btn'><img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723402283/solar_hamburger-menu-linear_vzxyuc.png" alt="hamburger"/></button>
                    </div>
                    <img className='header-logo' src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723263560/Logo_uhj3sq.png" alt="Appscript-logo" />
                </div>
                <div className="header-main-heading">
                    <h1>LOGO</h1>
                </div>
                <div className="header-icons">
                    <div>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723264682/search-normal_dj22wo.png" alt="search-icon"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723264805/heart_aupfvn.png" alt="linear-heart-icon"/>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723266640/shopping-bag_eqnvsh.png" alt="cart-icon"/>
                    </div>
                    <div className='profile-div'>
                        <img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723270823/profile_tjd2sn.png" alt="profile-icon"/>
                    </div>
                    <div className='lang-div'>
                        <select className="select-items-container">
                            <option className="eng-opt">Eng</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="header-tabs-container">
                <h2 className="tab-item">SHOP</h2>
                <h2 className="tab-item">SKILLS</h2>
                <h2 className="tab-item">STORIES</h2>
                <h2 className="tab-item">ABOUT</h2>
                <h2 className="tab-item">CONTACT US</h2>
            </div>
        </div>
    )
}
export default Header