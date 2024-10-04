import './product-details.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import apiService from '../../../services/api-service';
import defaultImage from '/images/default_no_image.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import Loader from '../../../components/loader/Loader'
import ImageGallery from 'react-image-gallery';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
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
                const productData = response.data.data[0];
                setProduct(productData);

                const thumbnailImage = {
                    original: productData.thumbnail.path,
                    thumbnail: productData.thumbnail.path,
                };

                const otherImages = productData.images.map((image) => ({
                    original: image.path,
                    thumbnail: image.path,
                }));

                setImages([thumbnailImage, ...otherImages]);
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
        return <div className="loading"><Loader /> </div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="product-detail-page container">
            <div className="product-main">
                <div className="product-images">
                    <ImageGallery
                        items={images}
                        slideInterval={2000}
                        showBullets={true}
                        autoPlay={true}
                        showPlayButton={false}
                        showNavs={true}
                        infinite={true}
                    />
                </div>

                <div className="product-info">
                    <h1 className="heading">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">${product.price}</div>

                    <div className="overall-rating">
                        <div className="rating-score">
                            <Rating initialValue={product.rating} readonly={true} size={20} />
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
