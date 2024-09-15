import OurTeam from '../../../components/out-team/Our-Team';
import './about.scss'; // Create this CSS file
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
            <section className="banner">
                <div className="overlay"></div>
                <div className="content">
                    <h1>About Us</h1>
                    <h3 className='mb-4'>Get to know more about our journey, mission, and vision.</h3>
                    <Link to='/products'>Shop Now</Link>
                </div>
            </section>

            <div className="container about">
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
            </div>
        </>
    );
};

export default About;
