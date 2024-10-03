import './home.scss';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/Product';
import { useEffect, useState } from 'react';
import OurTeam from '../../../components/out-team/Our-Team';
import apiService from '../../../services/api-service';
import defaultImage from '/images/default_no_image.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [dealsProducts, setDealsProducts] = useState([]);
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        fetchProducts(1, 4, '', '', setFeaturedProducts);
        fetchProducts(2, 4, '', '', setDealsProducts);
        fetchProducts(1, 1, '', '', setBlogData);
    }, []);

    const fetchProducts = async (page, itemsPerPage, search = '', productId = '', setState) => {
        const payload = {};

        if (page !== undefined && itemsPerPage !== undefined) {
            payload.currentPage = page;
            payload.itemsPerPage = itemsPerPage;
        }

        if (search) {
            payload.search = search;
        } else if (productId) {
            payload.productId = productId;
        }

        try {
            const response = await apiService.getProducts(payload);
            if (response.data.success) {
                setState(response.data.data);
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

            <ProductsSection
                title="Featured Products"
                products={featuredProducts}
            />

            <section className='offers'>
                <div className="overlay"></div>
                <div className="offers-content">
                    <h1>Super Deals</h1>
                    <h3 className='mb-4'>Best Deals On Best Price</h3>
                    <Link to='/products'>Shop Now</Link>
                </div>
            </section>

            <section className='container blogs'>
                <h1 className="heading">Blog</h1>
                {blogData && blogData.length > 0 ? (
                    <div className="row">
                        <div className="col-md-6 blog-content">
                            <h3 className="title">{blogData[0].title || 'No Title'}</h3>
                            <p className="description">{blogData[0].description || 'No Description'}</p>
                            <p className="description">{blogData[0].description || 'No Description'}</p>
                            <p className="description">{blogData[0].description || 'No Description'}</p>
                            <p className="description">{blogData[0].description || 'No Description'}</p>
                        </div>
                        <div className="col-md-6 image-wrapper">
                            <LazyLoadImage
                                alt="Blog Image"
                                height={200}
                                src={blogData[0].thumbnail ? `${blogData[0].thumbnail.path}` : defaultImage}
                                width={200}
                            />
                        </div>
                    </div>
                ) : (
                    <p>No blog data available</p>
                )}
            </section>

            <ProductsSection
                title="Special Deals"
                products={dealsProducts}
            />

            <OurTeam />
        </>
    );
};

// Products Section Component
const ProductsSection = ({ title, products }) => (
    <section className='features container'>
        <h1 className="heading">{title}</h1>
        <div className='products'>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                products.map((item) => (
                    <div className="product" key={item._id}>
                        <Product {...item} />
                    </div>
                ))
            )}
        </div>
    </section>
);


export default Home;
