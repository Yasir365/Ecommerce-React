
import { useEffect, useState } from 'react';
import './product-details.scss';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";




const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then((res) => res.json())
            .then((responseData) => setProduct(responseData));
    }, []);


    const ratingBreakdown = {
        5: 5,
        4: 2,
        3: 0,
        2: 0,
        1: 2,
    }

    return (
        <div className="product-detail-page container">
            <div className="product-main">
                <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>

                <div className="product-info">
                    <h1 className="heading">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">${product.price}</div>

                    <div className="overall-rating">
                        <h2>Overall Rating</h2>
                        <div className="rating-score">
                            <span className="rating-number">{product.rating}</span>/5
                            <ReactStars
                                count={5}
                                size={30}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                        </div>
                        <p>{product && product.reviews ? product.reviews.length : 0} reviews</p>
                    </div>

                    <button className="add-to-cart">Add to Cart</button>

                    <div className="rating-breakdown">
                        <h3>Rating Breakdown</h3>
                        {Object.keys(ratingBreakdown).map(star => (
                            <div className="rating-bar" key={star}>
                                <span>{star} stars</span>
                                <div className="bar">
                                    <div className="fill" style={{ width: `${(ratingBreakdown[star] / 5) * 100}%` }}></div>
                                </div>
                                <span>{ratingBreakdown[star]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <h2>Most Helpful Reviews</h2>
                {product && product.reviews ? product.reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <div className="review-header">
                            <span className="reviewer-name">{review.reviewerName}</span>
                            <span className="review-date">{review.date}</span>
                        </div>
                        <ReactStars
                            count={5}
                            size={20}
                            value={review.rating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p>{review.comment}</p>
                    </div>
                )) : ' NO REVIEWS '}
            </div>

            <div className="load-more-container">
                <button className="load-more-btn">Load more</button>
            </div>
        </div>
    );
};

export default ProductDetails;