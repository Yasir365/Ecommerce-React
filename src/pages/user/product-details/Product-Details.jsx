import { useEffect, useState } from 'react';
import './product-details.scss';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import apiService from '../../../services/api-service';
import defaultImage from '../../../assets/default_no_image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
const BaseImageURl = 'http://localhost:8080/uploads/';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                <div className="product-image">
                    <LazyLoadImage
                        alt="Product Image"
                        height={200}
                        src={product.thumbnail ? BaseImageURl + `${product.thumbnail}` : defaultImage}
                        width={200}
                    />
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

                    <button className="add-to-cart"><Link to="/cart">Add to Cart</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
