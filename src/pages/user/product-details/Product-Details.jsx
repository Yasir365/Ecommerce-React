import './product-details.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import apiService from '../../../services/api-service';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import Loader from '../../../components/loader/Loader'
import ImageGallery from 'react-image-gallery';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

const breadcrumbs = [
    { name: 'Products', path: '/products', },
    { name: 'Product Details', path: '#', },
];

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('#000');
    const [selectedQty, setSelectedQty] = useState(1);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        const order = { ...product, size: selectedSize, color: selectedColor, quantity: selectedQty };
        dispatch(addItem(order));
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

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };


    if (loading) {
        return <div className="loading"><Loader /> </div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="product-detail-page container">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
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

                    <h5 className='sub-heading'>Quantity</h5>
                    <div className="qty">
                        <button className="qty-dec" onClick={() => setSelectedQty(selectedQty > 1 ? selectedQty - 1 : 1)}>-</button>
                        <input className="qty-input" type="number" value={selectedQty} disabled />
                        <button className="qty-inc" onClick={() => setSelectedQty(selectedQty + 1)}>+</button>
                    </div>

                    <h5 className='sub-heading'>Size</h5>
                    <div className="size-options">
                        <button className={`${selectedSize === 'XS' ? 'active' : ''}`} value="XS" onClick={handleSizeChange} > XS </button>
                        <button className={`${selectedSize === 'S' ? 'active' : ''}`} value="S" onClick={handleSizeChange} > S </button>
                        <button className={`${selectedSize === 'M' ? 'active' : ''}`} value="M" onClick={handleSizeChange} > M </button>
                        <button className={`${selectedSize === 'L' ? 'active' : ''}`} value="L" onClick={handleSizeChange} > L </button>
                        <button className={`${selectedSize === 'XL' ? 'active' : ''}`} value="XL" onClick={handleSizeChange} > XL </button>
                    </div>

                    <h5 className='sub-heading'>Color</h5>
                    <div className="color-options">
                        <input type="color" value={selectedColor} onChange={handleColorChange} />
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
