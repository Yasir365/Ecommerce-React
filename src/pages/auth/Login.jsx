import './auth.scss';
import hero2 from '/public/images/hero2.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import apiService from '../../services/api-service';
import swalToastr from '../../services/toastr-service';
import { useNavigate } from 'react-router-dom';
import logo from '/public/images/logo.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoader(true);
            const response = await apiService.login({ email, password });
            setLoader(false);
            if (response.success) {
                localStorage.setItem('token', response.token);
                if (response.role === 'admin') {
                    navigate('/admin');
                } else {
                    swalToastr('success', 'Login Successful...');
                    navigate('/products');
                }
                setError(null);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setLoader(false);
            setError(error.message);
        }
    };
    return (
        <div className="wrapper" style={{ backgroundImage: `url(${hero2})` }}>
            <Link rel="stylesheet" to='/' >
                <img src={logo} alt="" className='login-logo' />
            </Link>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className='d-flex justify-content-center' disabled={loader}>Login {loader && <div className="loader"></div>}</button>
                    <Link to={'/forget-password'} className='forget'>Forget Password</Link>
                    <p> Don't have an account? <Link to={'/signup'}>Create New Account</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;