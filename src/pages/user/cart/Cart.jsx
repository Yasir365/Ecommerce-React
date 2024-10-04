import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../../store/cartSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (cartItems.length > 0) {
            const initialCartData = cartItems.map(item => ({
                id: item._id,
                size: item.size || 'M',
                color: item.color || '#000000',
                quantity: item.quantity || 1,
            }));
            setCartData(initialCartData);

        }
    }, [cartItems]);

    const handleSizeChange = (index, size) => {
        const updatedCartData = [...cartData];
        updatedCartData[index].size = size;
        setCartData(updatedCartData);
    };

    const handleColorChange = (index, event) => {
        const updatedCartData = [...cartData];
        updatedCartData[index].color = event.target.value;
        setCartData(updatedCartData);
    };

    const handleQuantityChange = (index, quantity) => {
        const updatedCartData = [...cartData];
        updatedCartData[index].quantity = quantity > 0 ? quantity : 1;
        setCartData(updatedCartData);
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        const checkoutData = cartData.map((item, index) => ({
            productId: item.id,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
        }));

        console.log('Checkout data:', checkoutData);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * cartData.find(c => c.id === item._id)?.quantity || 1, 0);

    return (
        <div className='cart-section container'>
            {cartItems.length === 0 && cartData.length === 0 ? (
                <div className='not-found'>
                    <h1>Your cart is empty.</h1>
                    <Link to='/products'>Shop Now</Link>
                </div>
            ) : (
                <>
                    <table className='cart-table'>
                        <thead>
                            <tr>   
                                <th>#</th>
                                <th>Product</th>
                                <th>Title</th>
                                <th className='text-center' >Quantity</th>
                                <th className='text-center'>Size</th>
                                <th className='text-center'>Color</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item._id}>
                                    {/* SR */}
                                    <td >{index + 1}</td>

                                    {/* Image */}
                                    <td className='align-middle'>
                                        <img src={`${item.thumbnail.path}`} alt={item.title} width="50" height="50" />
                                    </td>

                                    {/* Title */}
                                    <td className='align-middle'>{item.title}</td>

                                    {/* Quantity */}
                                    <td className='align-middle'>
                                        <div className="qty">
                                            <button className="qty-dec" onClick={() => handleQuantityChange(index, cartData[index].quantity - 1)}>-</button>
                                            <input className="qty-input" type="number" value={cartData[index]?.quantity} readOnly />
                                            <button className="qty-inc" onClick={() => handleQuantityChange(index, cartData[index].quantity + 1)}>+</button>
                                        </div>
                                    </td>

                                    {/* Size */}
                                    <td className='align-middle text-center'>
                                        <div className="size-options">
                                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                                <button
                                                    key={size}
                                                    className={`${cartData[index]?.size === size ? 'active' : ''}`}
                                                    onClick={() => handleSizeChange(index, size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Color */}
                                    <td className='align-middle'>
                                        <input className='color' type="color" value={cartData[index]?.color} onChange={(e) => handleColorChange(index, e)} />
                                    </td>

                                    {/* Price */}
                                    <td className='align-middle'>${item.price * cartData[index]?.quantity}</td>

                                    {/* Action */}
                                    <td className='align-middle'>
                                        <button className='remove-item' onClick={() => handleRemoveItem(item._id)}>
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='total-container'>
                        <p className='total'>Total: ${totalPrice.toFixed(2)}</p>
                        <button className='checkout' onClick={handleCheckout}>Checkout</button>
                        <button onClick={handleClearCart} className='clear-cart'>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
