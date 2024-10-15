import './our-Team.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import next from "/images/next.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const OurTeam = () => {
    const teamData = [
        {
            image: "/images/member/1.webp",
            name: "John Doe",
            designation: "CEO",
        },
        {
            image: "/images/member/2.webp",
            name: "Jane ",
            designation: "CTO",
        },
        {
            image: "/images/member/3.webp",
            name: "Michael",
            designation: "COO",
        },
        {
            image: "/images/member/4.webp",
            name: "Emily ",
            designation: "HOD",
        },
        {
            image: "/images/member/1.webp",
            name: "John Doe",
            designation: "CEO",
        }
    ]
    const middle = Math.floor(teamData.length / 2);
    return (
        <div className="container team-carousel-section mx-auto">
            <div style={{ overflow: "hidden", width: "100%", padding: "0 15px" }}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    initialSlide={2}
                    slidesPerView={5}
                    spaceBetween={30}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 6,
                        slideShadows: false,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {teamData?.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                border: "2px solid #D5D2D1",
                                borderRadius: "20px",
                                maxWidth: "333px",
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <img src={item.image} />
                            <div className='ps-3 pt-3 pb-4'>
                                <div> {item.name} </div>
                                <div> {item.designation} </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
export default OurTeam;
