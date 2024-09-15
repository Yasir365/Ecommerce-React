import member1 from '../../assets/member/1.jpg';
import member2 from '../../assets/member/2.jpg';
import member3 from '../../assets/member/3.jpg';
import member4 from '../../assets/member/4.jpg';
import './our-team.scss';

export default function OurTeam() {
    return (
        <div className="team-section">
            <h2 className="heading">Meet Our Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <img src={member1} alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <img src={member2} alt="Team Member" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
                <div className="team-member">
                    <img src={member3} alt="Team Member" />
                    <h3>Michael Johnson</h3>
                    <p>COO</p>
                </div>
                <div className="team-member">
                    <img src={member4} alt="Team Member" />
                    <h3>Emily Davis</h3>
                    <p>Head of Marketing</p>
                </div>
            </div>
        </div>
    )
}
