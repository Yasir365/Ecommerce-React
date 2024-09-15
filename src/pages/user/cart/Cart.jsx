import './cart.scss';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';




const Cart = () => {
    const [product1, setProduct] = useState({});

    return (
        <div className="cart-section">
            {product1 && product1.reviews ? product1.reviews.map((review) => (
                <div className="product-container" key={review.id}>
                    <div className="card-header">
                        <span className="name">{review.reviewerName}</span>
                        <span className="date">{review.date}</span>
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
            )) : 
            <div className='not-found'>
                <h1>No Product Found</h1>
                <Link to='/products'>Add Products</Link>
            </div>
            }
        </div>
    );
};

export default Cart;