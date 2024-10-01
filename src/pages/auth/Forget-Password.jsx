import './auth.scss';
import hero2 from '/public/images/hero2.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import apiService from '../../services/api-service';
import swalToastr from '../../services/toastr-service';

import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoader(true);
            const response = await apiService.forgetPassword({ email });
            setLoader(false);
            if (response.success) {
                swalToastr('success', 'Email has been sent to your Gmail...');
                navigate('/otp?email=' + email);
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
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className='d-flex justify-content-center' disabled={loader}>Verify Email {loader && <div className="loader"></div>}</button>
                    <Link to={'/login'} className='forget'>Login</Link>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;