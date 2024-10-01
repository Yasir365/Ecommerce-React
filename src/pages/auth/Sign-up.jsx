import './auth.scss';
import hero2 from '/public/images/hero2.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import apiService from '../../services/api-service';
import swalToastr from '../../services/toastr-service';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setLoader(true);
            const response = await apiService.signup({ name, email, phone, password });
            setLoader(false);
            if (response.success) {
                swalToastr('success', 'Sign up Successful...');
                navigate('/login');
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
            <div className="login-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className='d-flex justify-content-center' disabled={loader}>Sign Up {loader && <div className="loader"></div>}</button>
                    <p className="sign-up">
                        Already have an account? <Link to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;