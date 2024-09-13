
import Logo from '../../../public/logo.png';
import './footer.scss';



const Footer = () => {
    return (
        <>
            <footer className="footer py-3 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-flex align-items-center mb-2 mb-md-0">
                        <span className="text-muted">© { new Date().getFullYear() } Company, Inc</span>
                    </div>
                    <div className="col-12 col-md-6 text-md-end">
                        <a href="#" className="text-muted me-3">
                            <i className="fa-solid fa-x"></i>
                        </a>
                        <a href="#" className="text-muted me-3">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="text-muted me-3">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" className="text-muted">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;