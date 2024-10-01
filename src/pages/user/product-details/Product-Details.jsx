import { useEffect, useState } from 'react';
import './product-details.scss';
import { useParams, Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import apiService from '../../../services/api-service';
import defaultImage from '/public/images/default_no_image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';

const BaseImageURl = 'http://localhost:8080/uploads/';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(product));
    };

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    const fetchProduct = async (productId) => {
        try {
            const response = await apiService.getProducts({ productId });
            if (response.data.success) {
                setProduct(response.data.data[0]);
            } else {
                setError('Failed to fetch product details');
            }
        } catch (error) {
            console.error(`Error fetching product:`, error);
            setError('Error fetching product details');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="product-detail-page container">
            <div className="product-main">
                <div className="product-images">
                    <div className="thumbnail">
                        <LazyLoadImage
                            alt="Product Image"
                            height={200}
                            src={product.thumbnail ? BaseImageURl + `${product.thumbnail}` : defaultImage}
                            width={200}
                        />
                    </div>

                    <div className="additional-images">
                        {product.images && product.images.length > 0 ? (
                            product.images.map((image, index) => (
                                <div key={index} className="additional-image">
                                    <LazyLoadImage
                                        alt={`Image ${index + 1}`}
                                        height={80}
                                        src={BaseImageURl + Object.values(image)[0]}
                                        width={80}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No additional images available</p>
                        )}
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="heading">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">${product.price}</div>

                    <div className="overall-rating">
                        <div className="rating-score">
                            <ReactStars
                                count={5}
                                size={30}
                                value={product.rating}
                                edit={false}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>

                    <button className="add-to-cart" onClick={handleAddItem}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
