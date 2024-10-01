import './auth.scss';
import hero2 from '/public/images/hero2.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import apiService from '../../services/api-service';
import swalToastr from '../../services/toastr-service';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useLocation } from 'react-router-dom';



const Otp = () => {
    const [otp, setCode] = useState('');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const navigate = useNavigate();

    const resendOtp = async (e) => {
        e.preventDefault();

        try {
            setLoader(true);
            const response = await apiService.forgetPassword({ email });
            setLoader(false);
            if (response.success) {
                swalToastr('success', 'Email has been sent to your Gmail...');
                setError(null);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setLoader(false);
            setError(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoader(true);
            const response = await apiService.verifyOtp({ email, otp });
            setLoader(false);
            if (response.success) {
                navigate('/reset-password?email=' + email);
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
                <h2>Verify Otp</h2>
                <form onSubmit={handleSubmit}>
                    <OtpInput
                        value={otp}
                        onChange={(e) => setCode(e)}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        renderInput={(props) => <input {...props} />}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className='d-flex justify-content-center' disabled={loader}>Verify {loader && <div className="loader"></div>}</button>
                    <div className='d-flex mt-3'>Don't receive the code? <p className='resend' onClick={resendOtp} disabled={loader}>Resend</p></div>
                    <Link to={'/login'} className='forget' disabled={loader}>Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Otp;