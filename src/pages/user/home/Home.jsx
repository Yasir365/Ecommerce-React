import './home.scss';
import heroImage from '../../../../public/hero.png';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/Product';
import { useEffect, useState } from 'react';


const Home = () => {
    const [featuredProduct, setfeaturedProduct] = useState([]);
    const [dealsProduct, setdealsProduct] = useState([]);
    const [bolgData, setBlogData] = useState({});
    const bannerImage = 'https://www.zilliondesigns.com/blog/wp-content/uploads/Perfect-Ecommerce-Sales-Banner.jpg'

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=4&skip=0&select=')
            .then((res) => res.json())
            .then((responseData) => setfeaturedProduct(responseData.products));
        fetch('https://dummyjson.com/products?limit=4&skip=10&select=')
            .then((res) => res.json())
            .then((responseData) => setdealsProduct(responseData.products));
        fetch('https://dummyjson.com/products/1')
            .then((res) => res.json())
            .then((responseData) => setBlogData(responseData));
            console.log(bolgData);
            
    }, []);

    return (
        <>
            <div className='hero'>
                <img src={heroImage} alt="hero Image" />
                <div className='content'>
                    <h1>Super Deals</h1>
                    <h3>Best Deals On Best Price</h3>
                    <Link to='/products'><button>Shop Now</button></Link>
                </div>
            </div>

            <section className='features container'>
                <h1 className="heading">Featured Products</h1>
                <div className='products'>
                    {featuredProduct.map((item,i) => <div className="product"><Product key={i} {...item}/> </div> )}
                </div>
            </section>


            <section className='offers'>
                <img src={bannerImage} alt="banner image" />
                <div className="content">
                    <h1>Super Deals</h1>
                    <h3>Best Deals On Best Price</h3>
                    <Link to='/products'>Shop Now</Link>
                </div>
            </section>


            <section className='container blogs'>
                <h1 className="heading">Blog</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="title">Loarem ipsam bolg title</h3>
                        <p className="description">{bolgData.description}</p>
                        <p className="description">{bolgData.description}</p>
                        <p className="description">{bolgData.description}</p>
                        <p className="description">{bolgData.description}</p>
                    </div>
                    <div className="col-md-6 image-wrapper">
                        <img src={bolgData.images} alt="" />
                    </div>
                </div>

            </section>

            <section className='features container'>
                <h1 className="heading">Special Deals</h1>
                <div className='products'>
                    {dealsProduct.map((item) => <div className="product"><Product key={item.id} {...item}/> </div> )}
                </div>
            </section>
        </>
    );
};

export default Home;