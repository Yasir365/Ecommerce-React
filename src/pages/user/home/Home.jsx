import './home.scss';
import heroImage from '../../../../public/hero.png';
import bannerImage from '../../../../public/banner/b2.jpg';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/Product';
import bolgImage from '../../../../public/banner/b7.jpg';


const Home = () => {
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
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
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
                        <p className="description">What makes a good Blog Post Title? There are lots of great blogs out there, but it takes a lot of effort to create headlines that truly resonates with your target audience. The secret here is not just the correct words but also to pay attention to the positioning of them. Here are some examples of great E-Commerce Blog Post Titles to Inspire you.</p>
                        <p className="description">There are lots of great blogs out there, but it takes a lot of effort to create headlines that truly</p>
                        <p className="description">What makes a good Blog Post Title? There are lots of great blogs out there, but it takes a lot of effort to create headlines that truly resonates with your target audience. The secret here is not just the correct words but also to pay attention to the positioning of them. Here are some examples of great E-Commerce Blog Post Titles to Inspire you.</p>
                    </div>
                    <div className="col-md-6 image-wrapper">
                        <img src={bolgImage} alt="" />
                    </div>
                </div>

            </section>

            <section className='features container'>
                <h1 className="heading">Special Deals</h1>
                <div className='products'>
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
                    <div className="product"><Product /></div>
                </div>
            </section>
        </>
    );
};

export default Home;