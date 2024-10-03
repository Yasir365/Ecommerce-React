import './product.scss';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import defaultImage from '/images/default_no_image.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

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
                        src={props.thumbnail ? `${props.thumbnail.path}` : defaultImage}
                        width={200} />
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between aligns-items-center mb-2'>
                        <span className="price">${props.price}</span>
                        <Rating initialValue={props.rating} readonly={true} size={20} />
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