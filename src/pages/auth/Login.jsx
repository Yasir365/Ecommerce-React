import './auth.scss';
import hero2 from '../../../public/hero2.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="wrapper" style={{ backgroundImage: `url(${hero2})` }}>
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                    <Link to={'/forget'} className='forget'>Forget Password</Link>
                    <p> Don't have an account? <Link to={'/signup'}>Create New Account</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;