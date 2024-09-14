import './home.scss';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/Product';
import { useEffect, useState } from 'react';


const Home = () => {
    const [featuredProduct, setfeaturedProduct] = useState([]);
    const [dealsProduct, setdealsProduct] = useState([]);
    const [bolgData, setBlogData] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=4&skip=0&select=')
            .then((res) => res.json())
            .then((responseData) => setfeaturedProduct(responseData.products));
        fetch('https://dummyjson.com/products?limit=4&skip=10&select=')
            .then((res) => res.json())
            .then((responseData) => setdealsProduct(responseData.products));
        fetch('https://dummyjson.com/products/2')
            .then((res) => res.json())
            .then((responseData) => setBlogData(responseData));
        console.log(bolgData);

    }, []);

    return (
        <>
            <div className='hero'>
                <div className="overlay"></div>
                <div className='content'>
                    <h1>Super Deals</h1>
                    <h3>Best Deals On Best Price</h3>
                    <Link to='/products'><button>Shop Now</button></Link>
                </div>
            </div>

            <section className='features container'>
                <h1 className="heading">Featured Products</h1>
                <div className='products'>
                    {featuredProduct.map((item, i) => <div className="product"><Product key={i} {...item} /> </div>)}
                </div>
            </section>


            <section className='offers'>
                <div className="overlay"></div>
                <div className="content">
                    <h1>Super Deals</h1>
                    <h3 className='mb-4'>Best Deals On Best Price</h3>
                    <Link to='/products'>Shop Now</Link>
                </div>
            </section>


            <section className='container blogs'>
                <h1 className="heading">Blog</h1>
                <div className="row">
                    <div className="col-md-6 content">
                        <h3 className="title">Vibrant Makeup Palette</h3>
                        <p className="description">{bolgData.description}</p>
                        <p className="description">This elegant makeup palette offers a versatile range of 12 vibrant shades, perfect for creating both subtle and bold looks. The carefully selected hues range from warm earthy tones to rich, deep shades, ensuring a seamless blend for any occasion.</p>
                        <p className="description">With a sleek, modern design, the palette comes equipped with a high-quality built-in mirror. This makes it ideal for on-the-go touch-ups or creating flawless looks in any setting, ensuring you always look your best.</p>
                        <p className="description">Each shade is highly pigmented and long-lasting, providing exceptional coverage with minimal product use. The smooth, blendable formula ensures effortless application, whether you're a beginner or a pro in the makeup game.</p>
                    </div>
                    <div className="col-md-6 image-wrapper">
                        <img src={bolgData.images} alt="" />
                    </div>
                </div>

            </section>

            <section className='features container'>
                <h1 className="heading">Special Deals</h1>
                <div className='products'>
                    {dealsProduct.map((item) => <div className="product"><Product key={item.id} {...item} /> </div>)}
                </div>
            </section>
        </>
    );
};

export default Home;