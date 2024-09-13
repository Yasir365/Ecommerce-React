import './product.scss';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const Product = (props) => {
    return (
        <>
            <div className="product-card">
                <div className="img-wrapper">
                    <img src={props.images[0]} alt="Toyota Supra"/>
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-end mb-2'>
                        <span className="price">${props.price}</span>
                    </div>
                    <ReactStars count={5} size={24} value={props.rating} edit={false} activeColor="#ccc01f" />
                    <h5 className="card-title mb-2">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="button-wrapper">
                        <Link className="btn outline"  to={`/products/${props.id}`}>Details</Link>
                        <Link className="btn fill" to="/cart">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;