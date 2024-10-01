import './product.scss';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import defaultImage from '../../assets/default_no_image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
const BaseImageURl = 'http://localhost:8080/uploads/';

const Product = (props) => {
    const dispatch = useDispatch();

    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };
    return (
        <>
            <div className="product-card">
                <div className="img-wrapper">
                    <LazyLoadImage
                        alt={defaultImage}
                        height={200}
                        src={props.thumbnail ? BaseImageURl + `${props.thumbnail}` : defaultImage}
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
                        <Link className="btn outline" to={`/products/${props._id}`}>Details</Link>
                        <span onClick={() => handleAddItem(props)}>
                            <Link className="btn fill">Buy Now</Link>

                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;