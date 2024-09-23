import './product.scss';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import defaultImage from '../../assets/default_no_image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Product = (props) => {
    return (
        <>
            <div className="product-card">
                <div className="img-wrapper">
                <LazyLoadImage
                alt={defaultImage}
                height={200}
                src={props.thumbnail ? `http://localhost:8080/${props.thumbnail}` : defaultImage}
                width={200} />
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between aligns-items-center mb-2'>
                        <span className="price">${props.price}</span>
                        <ReactStars count={5} size={24} value={props.rating} edit={false} activeColor="orangered" />
                    </div>
                    <h5 className="card-title mb-2">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="button-wrapper">
                        <Link className="btn outline"  to={`/products/${props._id}`}>Details</Link>
                        <Link className="btn fill" to="/cart">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;