
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
    const ReactStarsComponent = ({ count = 5, size = 24, value = 0, edit = false, activeColor = "#ccc01f", }) => {
                return ( <ReactStars count={count} size={size} value={value} edit={edit} activeColor={activeColor} /> );
                };

    return (
        <>
        {product && (
            <div className="product-detail-page container">
                <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-info">
                    <div>
                    <h1 className="heading">{product.title}</h1>
                    <p>{product.description}</p>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">
                        <ReactStarsComponent count={5} size={50} value={product.rating} edit={false} activeColor="#ccc01f" />
                    </div>
        
                    <h1 className="heading">Reviews</h1>
                    <div className="review-container">
                        {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
                            product.reviews.map((review, j) => (
                            <div className="review" key={review.id}>
                                <h4>{review.reviewerName}</h4>
                                <ReactStarsComponent count={5} size={25} value={review.rating} edit={false} activeColor="#ccc01f" />
                                <p>{review.comment}</p>
                                <p className='ml-auto'>{review.date}</p>
                            </div>
                        ))
                        ) : (
                        <p>No reviews available</p>
                        )}
                    </div>
        
                    <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default ProductDetails;