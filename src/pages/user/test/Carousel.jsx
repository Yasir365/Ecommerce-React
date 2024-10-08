import React, { useState, useEffect, useRef } from 'react';
import './test.scss';

const Carousel = () => {
    const initialCarouselData = [
        { id: '1', src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
        { id: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaARPwKgt1F7kgIs4K9Ezyzpy5iCPNtVp2ZMPi6wqu1wuttoTEPc49jXz2Fm8AmA-gEs&usqp=CAU' },
        { id: '3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8sKRgBGHeqyyzcVzby3YrHH_s0KVk-PozzvgrCdsueqkbhorjmZ0cByvks-Oy9tK38M&usqp=CAU' },
        { id: '4', src: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
        { id: '5', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT355fE0uH-YSb0xb7fPsqKjV17Y2g_y_P66tOFoGXaG1FXiaZ23avGCgDz8MjVErzQ76A&usqp=CAU' },
        { id: '6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCFD9hBq5ZBfdDqHa1IPFZORSL3EkPSxU2tomxsaeiOcuOyQMbUhNN-htl5xLTtZwvMU&usqp=CAU' },
    ];

    const initialCarouselInView = [1, 2, 3, 4, 5];

    const [carouselData, setCarouselData] = useState(initialCarouselData);
    const [carouselInView, setCarouselInView] = useState(initialCarouselInView);
    const intervalRef = useRef(null);
    const transitionRef = useRef(null);

    useEffect(() => {
        startAutoPlay();
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            next(true);
        }, 1000);
    };

    const resetAutoPlay = () => {
        clearInterval(intervalRef.current);
        startAutoPlay();
    };

    const updateCarouselItems = (direction = 'next') => {
        const container = document.querySelector('.carousel-container');
        if (container) {
            transitionRef.current = setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = 'translateX(0)';
                updateImages(direction);
            }, 500);
        }
    };

    const updateImages = (direction) => {
        if (direction === 'next') {
            setCarouselData([...carouselData.slice(1), carouselData[0]]);
            setCarouselInView([carouselInView[carouselInView.length - 1], ...carouselInView.slice(0, carouselInView.length - 1)]);
        } else {
            setCarouselData([carouselData[carouselData.length - 1], ...carouselData.slice(0, carouselData.length - 1)]);
            setCarouselInView([...carouselInView.slice(1), carouselInView[0]]);
        }
    };

    const next = (isAutoPlay = false) => {
        if (!isAutoPlay) resetAutoPlay();
        updateCarouselItems('next');
    };

    const previous = () => {
        resetAutoPlay();
        updateCarouselItems('previous');
    };

    return (
        <div className="our-team-carousel">
            <div className="carousel-container">
                {carouselData.slice(0, 5).map((item, index) => (
                    <img
                        key={item.id}
                        className={`carousel-item-test carousel-item-test-${index + 1}`}
                        src={item.src}
                        alt="item"
                        loading="lazy"
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button className='btn btn-success mr-2' data-name='previous' onClick={previous}> Back </button>
                <button className='btn btn-success ms-3' data-name='next' onClick={() => next(false)}> Next </button>
            </div>
        </div>
    );
};

export default Carousel;