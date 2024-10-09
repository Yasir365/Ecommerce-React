import './our-Team.scss';
import OwlCarousel from 'react-owl-carousel';

const OurTeam = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
        navText: ["<", ">"],
        slideBy: 1,
    };

    return (
        <div className="team-carousel-section">
            <h2 className='heading'>Our Team</h2>
            <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                    <img src='/images/member/1.webp' alt="Team Member" className='test' />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="item">
                    <img src='/images/member/2.webp' alt="Team Member" className='test' />
                    <h3>Jane </h3>
                    <p>CTO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="item">
                    <img src='/images/member/3.webp' alt="Team Member" className='test' />
                    <h3>Michael </h3>
                    <p>COO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="item">
                    <img src='/images/member/4.webp' alt="Team Member" className='test' />
                    <h3>Emily </h3>
                    <p>HOD</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8sKRgBGHeqyyzcVzby3YrHH_s0KVk-PozzvgrCdsueqkbhorjmZ0cByvks-Oy9tK38M&usqp=CAU' alt="Team Member" className='test' />
                    <h3>Emily </h3>
                    <p>HOD</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCFD9hBq5ZBfdDqHa1IPFZORSL3EkPSxU2tomxsaeiOcuOyQMbUhNN-htl5xLTtZwvMU&usqp=CAU' alt="Team Member" className='test' />
                    <h3>Emily </h3>
                    <p>HOD</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default OurTeam;
