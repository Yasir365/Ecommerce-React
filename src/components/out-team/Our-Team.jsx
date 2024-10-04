import member1 from '/images/member/1.webp';
import member2 from '/images/member/2.webp';
import member3 from '/images/member/3.webp';
import member4 from '/images/member/4.webp';
import './our-team.scss';

export default function OurTeam() {
    return (
        <div className="container team-section">
            <h2 className="heading">Meet Our Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <img src={member1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="team-member">
                    <img src={member2} alt="Team Member" />
                    <h3>Jane </h3>
                    <p>CTO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="team-member">
                    <img src={member3} alt="Team Member" />
                    <h3>Michael </h3>
                    <p>COO</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="team-member">
                    <img src={member4} alt="Team Member" />
                    <h3>Emily </h3>
                    <p>HOD</p>
                    <div className="social">
                        <i className="fa-solid fa-x"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
