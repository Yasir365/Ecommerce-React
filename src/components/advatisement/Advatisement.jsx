import { Link } from "react-router-dom";


export default function Advatisement() {
    return (
        <section className='advatisement container'>
            <div id="carouselExampleIndicators" className="carousel " data-bs-ride="carousel" data-bs-interval="2500">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="content">
                            <h1>Exclusive Savings</h1>
                            <h4>Style for Every Season, Deals for Every Budget</h4>
                            <p>Upgrade your wardrobe with our must-have collections at unbeatable prices. <br /> From family favorites to seasonal trends, find everything you need without breaking the bank!.</p>
                            <Link to='/products'>
                                <button>Shop Now</button>
                            </Link>
                        </div>
                        <img src="/images/carousel/4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="content">
                            <h1>Exclusive Savings</h1>
                            <h4>Style for Every Season, Deals for Every Budget</h4>
                            <p>Upgrade your wardrobe with our must-have collections at unbeatable prices. <br /> From family favorites to seasonal trends, find everything you need without breaking the bank!.</p>
                            <Link to='/products'>
                                <button>Shop Now</button>
                            </Link>
                        </div>
                        <img src="/images/carousel/2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="content">
                            <h1>Exclusive Savings</h1>
                            <h4>Style for Every Season, Deals for Every Budget</h4>
                            <p>Upgrade your wardrobe with our must-have collections at unbeatable prices. <br /> From family favorites to seasonal trends, find everything you need without breaking the bank!.</p>
                            <Link to='/products'>
                                <button>Shop Now</button>
                            </Link>
                        </div>
                        <img src="/images/carousel/3.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}
