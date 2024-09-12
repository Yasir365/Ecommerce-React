import './home.scss';
import heroImage from '../../../../public/hero.png';
import bannerImage from '../../../../public/banner/b1.jpg';
import { Link } from 'react-router-dom';
import Product from '../../../components/product/Product';



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


            <section className='container'>
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;