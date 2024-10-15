import './our-Team.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

const OurTeam = () => {
    const teamData = [
        {
            image: "/images/member/1.png",
            name: "John Doe",
            designation: "CEO",
        },
        {
            image: "/images/carousel/2.png",
            name: "John Doe",
            designation: "CEO",
        },
        {
            image: "/images/member/2.png",
            name: "Jane",
            designation: "CTO",
        },
        {
            image: "/images/carousel/3.png",
            name: "John Doe",
            designation: "CEO",
        },
        {
            image: "/images/member/3.png",
            name: "Michael",
            designation: "COO",
        },
        {
            image: "/images/carousel/4.png",
            name: "John Doe",
            designation: "CEO",
        },
        {
            image: "/images/member/4.png",
            name: "Emily",
            designation: "HOD",
        },
    ];

    return (
        <div className="container team-carousel-section mx-auto">
            <div style={{ overflow: "hidden", width: "100%", padding: "0 15px" }}>
                <Swiper
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    effect='coverflow'
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView='auto'
                    slidesPerGroup={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Add Autoplay module
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
};

export default OurTeam;
