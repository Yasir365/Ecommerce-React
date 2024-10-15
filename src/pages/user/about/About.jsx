import './about.scss';
import FeaturedProduct from '../../../components/featured-product/Featured-Product';
import OurTeam from '../../../components/out-team/Our-Team';
import { useEffect, useState } from 'react';
import apiService from '../../../services/api-service';
import Advatisement from '../../../components/advatisement/Advatisement';


const About = () => {
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

                const deals = products.slice(0, 4);
                setDealsProducts(deals);
            }
        } catch (error) {
            console.error(`Error fetching products:`, error);
        }
    };

    return (
        <>

            <div className="container about">
                <Advatisement />
                <div className="company-overview">
                    <h2 className="heading">Our Mission</h2>
                    <p> We are dedicated to providing the best service to our customers with innovation, integrity, and a focus on sustainability. Our goal is to positively impact the lives of millions through our products. </p>
                    <h2 className="heading">Our Vision</h2>
                    <p> Our vision is to become a global leader in our field, setting benchmarks in quality, customer satisfaction, and environmental responsibility. </p>
                </div>

                <div className="history-section">
                    <h2 className="heading">Our Journey</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <h3>2010 - Founded</h3>
                            <p>We started our journey in 2010 with a small but dedicated team aiming to revolutionize the industry.</p>
                        </div>
                        <div className="timeline-item">
                            <h3>2015 - Milestone Achievement</h3>
                            <p>Achieved our first major milestone with 100,000+ satisfied customers and expanded into new markets.</p>
                        </div>
                        <div className="timeline-item">
                            <h3>2020 - Global Expansion</h3>
                            <p>Our products are now available worldwide, with a presence in over 50 countries and a growing team of 500+ professionals.</p>
                        </div>
                        <div className="timeline-item">
                            <h3>2023 - Looking Ahead</h3>
                            <p>We are committed to innovating and continuously improving to meet the needs of our global customers.</p>
                        </div>
                    </div>
                </div>
                <OurTeam />
                <FeaturedProduct title="Special Deals" products={dealsProducts} />
            </div>
        </>
    );
};

export default About;
