import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../../store/cartSlice';
import { Link } from 'react-router-dom';
const BaseImageURl = 'http://localhost:8080/uploads/';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className='cart-section container'>
            {cartItems.length === 0 ? (
                <div className='not-found'>
                    <h1 >Your cart is empty.</h1>
                    <Link to='/products'>Shop Now</Link>
                </div>
            ) : (
                <>
                    <h2 className='heading'>Cart Items:</h2>
                    <ul className='product-container'>
                        {cartItems.map((item) => (
                            <li key={item._id} className='item'>
                                <img src={BaseImageURl + `${item.thumbnail}`} alt="" />
                                <h3>{item.title}</h3>
                                <p className='description'>{item.description}</p>
                                <div className='right'>
                                    <p className='price'>${item.price}</p>
                                    <button onClick={() => handleRemoveItem(item._id)}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>

                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='total-container'>
                        <p className='total'>Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={handleClearCart} className='clear-cart'><i class="fa-solid fa-trash"></i></button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
