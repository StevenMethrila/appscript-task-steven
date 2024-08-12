import {Component} from 'react'
import Header from '../Header'
import  FilterItems from '../FilterItems'
import Footer from '../Footer'
import './index.css'

const customiableData = [
    {
        id: "IDEAL FOR",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "OCCASION",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "WORK",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "FABRIC",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "SEGMENT",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "SUITABLE FOR",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "RAW MATERIALS",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    },
    {
        id: "PATTERN",
        men: "Men",
        women: "Women",
        kids: "Baby & Kids"
    }
]

class Home extends Component{
    
    state={
        productList:[],
        likeStatus: false,
        showFilterList: true
    }

    componentDidMount(){
        this.getProductListApi()
    }

    getProductListApi = async () => {
        const apiUrl="https://fakestoreapi.com/products"
        const options = {
            method: 'GET'
        }
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log(data[0])
        const updatedData = data.map(items=>({
            category: items.category,
            description: items.description,
            image:items.image,
            price:items.price,
            title:items.title,
            rating: {rate: items.rating.rate,}
        }))
        this.setState({
            productList: updatedData
        })
    }

    LikeAndDisLike = () => {
        const {likeStatus}=this.state
        this.setState(prevState => ({
            likeStatus: !likeStatus
        }))
    }

    showFilter = () => {
        const {showFilterList}=this.state
        this.setState({
            showFilterList: !showFilterList
        })
    }

    render(){
        const {productList,likeStatus,showFilterList}=this.state
        const len = productList.length
        return(
            <div className='Home-container'>
                <Header/>
                <div className='home-main-container'>
                    <div className='home-main-heading-container'>
                        <h1 className='home-main-heading1'>DISCOVER OUR PRODUCTS</h1>
                        <h2 className='home-main-heading2'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
                    </div>

                    <div className='productCount-filter-container'>
                        <div className='countlist-hidebtn-container'>
                            <div>
                                <h1 className='total-list-header'>{len} ITEMS</h1>
                            </div>
                            <div className='hide-filter-container'>
                                <button type="button" className='hide-btn' onClick={this.showFilter}>
                                    <img className="hide-image-arrow" src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723272382/arrow-left_eyggt1.png" alt="hider-icon"/>
                                    {showFilterList? "HIDE FILTER" : "SHOW FILTER" }
                                </button>
                            </div>
                        </div>
                        <div className='selected-recommended-filter-container'>
                            <select className='selected-filter-container'>
                                <option value='recommended' selected>RECOMMENDED</option>
                                <option value='Newest first'>NEWEST FIRST</option>
                                <option value='popular'>POPULAR</option>
                                <option value='Price : high to low'>PRICE : HIGH TO LOW</option>
                                <option value='Price : low to high'> PRICE : LOW TO HIGH</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-product-container">
                        <div className='filter-list-container'>  
                            {showFilterList? (<div className='filter-container-status'><input type='checkbox'/><label className='labelElement'>CUSTOMIZBLE</label> <ul className='unorder-list-container'>
                                <FilterItems customiableData={customiableData}/>
                            </ul></div>): ""}
                        </div>
                        <div className='screen-size-display'>
                            <div>
                                <select className='screen-size-select'>
                                        <option className='labelElement screen-size-filter' selected >Filter</option>
                                        <FilterItems customiableData={customiableData}/>
                                </select>
                            </div>
                            <div>
                                <hr className='horizontal-mark'/>
                            </div>
                            <div>
                                <select className='selected-filter-container'>
                                    <option value='recommended' selected>RECOMMENDED</option>
                                    <option value='Newest first'>NEWEST FIRST</option>
                                    <option value='popular'>POPULAR</option>
                                    <option value='Price : high to low'>PRICE : HIGH TO LOW</option>
                                    <option value='Price : low to high'> PRICE : LOW TO HIGH</option>
                                </select>
                            </div>
                        </div>
                        <div className='product-list-container'>
                            {productList.map(items=>(
                                <div className='card'>
                                    <img className='product-image' src={items.image} alt={items.image}/>
                                    <h2 className='product-title'>{items.title}</h2>
                                    <div>
                                        <h2 className='category-heading'>{items.category}</h2>
                                    </div>
                                    <div className='rating-category-container'>
                                        <h2 className='rating-heading'>{items.rating.rate}</h2>
                                        <div>
                                            <button className='btn-like' onClick={this.LikeAndDisLike}>
                                                {likeStatus ?<img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723264805/heart_aupfvn.png" alt="linear-heart-icon"/>:<img src="https://res.cloudinary.com/dvlat5yka/image/upload/v1723384244/heart_uw5gbb.png" alt="linear-heart-icon"/>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default Home