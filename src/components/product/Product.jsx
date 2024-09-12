import React from 'react';
import './product.scss';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div className="product-card">
                <div className="img-wrapper">
                    <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="Toyota Supra"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">TOYOTA SUPRA</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <div className="button-wrapper">
                        <Link className="btn outline" to="products/1">Details</Link>
                        <Link className="btn fill" to="/cart">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;