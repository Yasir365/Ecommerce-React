import './product.scss';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import defaultImage from '../../assets/skeleton.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Product = (props) => {

    const DefaultImage = () => (
        <img src={defaultImage} alt="Default Image" />
    );

    return (
        <>
            <div className="product-card">
                <div className="img-wrapper">
                <LazyLoadImage
                alt={defaultImage}
                height={200}
                src={props.images[0]} 
                width={200} />
                    {/* <img src={props.images[0]} alt="Toyota Supra" placloading="lazy" placeholder={<DefaultImage />}/> */}
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