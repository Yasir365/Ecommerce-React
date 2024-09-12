import './auth.scss';
import hero2 from '../../../public/hero2.jpg';
import { Link } from 'react-router-dom';



const SignUp = () => {
    return (
        <div className="wrapper" style={{ backgroundImage: `url(${hero2})` }}>
            <div className="login-form">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit">Sign Up</button>
                    <p className='sign-up'>
                        Already have an account? <Link to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;