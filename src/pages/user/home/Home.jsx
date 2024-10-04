import './home.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OurTeam from '../../../components/out-team/Our-Team';
import apiService from '../../../services/api-service';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FeaturedProduct from '../../../components/featured-product/Featured-Product';
import Advatisement from '../../../components/advatisement/Advatisement';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [dealsProducts, setDealsProducts] = useState([]);

    useEffect(() => {
        fetchProducts(1, 12);
    }, []);

    const fetchProducts = async (page, itemsPerPage) => {
        const payload = {};

        if (page !== undefined && itemsPerPage !== undefined) {
            payload.currentPage = page;
            payload.itemsPerPage = itemsPerPage;
        }

        try {
            const response = await apiService.getProducts(payload);
            if (response.data.success) {
                const products = response.data.data;

                const featured = products.slice(3, 7);
                setFeaturedProducts(featured);

                const deals = products.slice(7, 11);
                setDealsProducts(deals);
            }
        } catch (error) {
            console.error(`Error fetching products:`, error);
        }
    };








    return (
        <>
            <div className='hero'>
                <div className='hero-content'>
                    <h1>Exclusive Savings</h1>
                    <h4>Style for Every Season, Deals for Every Budget</h4>
                    <p>Upgrade your wardrobe with our must-have collections at unbeatable prices. <br /> From family favorites to seasonal trends, find everything you need without breaking the bank!.</p>
                    <Link to='/products'>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>

            <FeaturedProduct title="Featured Products" products={featuredProducts} />
            <Advatisement />

            <section className='container blogs'>
                <h1 className="heading">Blog</h1>

                <div className="row">
                    <div className="col-md-6 blog-content">
                        <h3 className="title">Unraveling the Mystique of Fashion</h3>
                        <p className="description">As consumers, we're becoming increasingly aware of the environmental and social impact of our purchasing decisions. Sustainable fashion has emerged as a vital movement, challenging traditional practices and promoting eco-friendly, responsible clothing production.</p>
                        <h5>What is Sustainable Fashion?</h5>
                        <ul>
                            <li><strong>Eco-friendly materials:</strong> Organic cotton, recycled materials, and plant-based textiles.</li>
                            <li><strong>Fair labor practices:</strong> Ensuring workers receive fair wages and safe working conditions.</li>
                            {/* <li><strong>Waste reduction:</strong> Minimizing textile waste through upcycling and repurposing.</li> */}
                        </ul>
                        <h5>Benefits of Sustainable Fashion:</h5>
                        <ul>
                            <li><strong>Environmental benefits: </strong> Reduced carbon footprint, water conservation, and minimized waste.</li>
                            <li><strong>Social benefits: </strong> Improved working conditions, fair wages, and empowered communities.</li>
                            <li><strong>Economic benefits: </strong>  Increased value, durability, and longevity of clothing.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 image-wrapper">
                        <LazyLoadImage alt="Blog Image" height={200} src='/images/blog/img.jpg' width={200} />
                    </div>
                </div>

            </section>

            <FeaturedProduct title="Special Deals" products={dealsProducts} />
            <OurTeam />
        </>
    );
};

export default Home;
