import React, { useState, useEffect } from "react";
import './Home.css';
import NewsSection from "../../components/NewsSection/NewsSection";
import EventsSection from "../../components/EventsSection/EventsSection";
import AdmissionsSection from "../../components/AdmissionsSection/AdmissionsSection";
import { mainImages } from "../../shared/constants";

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [hoveredDot, setHoveredDot] = useState(null);
    const [isManualSwitch, setIsManualSwitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isManualSwitch)
                setCurrentImage(prev => (prev + 1) % mainImages.length);
            else
                setIsManualSwitch(false);
        }, 10000);

        // return is executed only wheen the component is demounted(component goes out of view)
        return () => clearInterval(interval);
    }, [isManualSwitch]);

    const handleDotClick = (index) => {
        setCurrentImage(index);
        setIsManualSwitch(true);
    };

    const handleMouseEnter = (index) => {
        setHoveredDot(index);
    };

    const handleMouseLeave = () => {
        setHoveredDot(null);
    };

    return (
        <div className="home">
            <div className="main-image-container">
                {mainImages.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={`single-image-container ${index === currentImage ? 'visible' : ''}`}
                        >
                            <img alt="students" src={`../../../${image.imageSrc}`} />
                            <div className='main-content-container'>
                                <div className="image-headline">
                                    <h1>{image.headline}</h1>
                                    <h3>{image.description}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="dot-container">
                    {mainImages.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="single-dot-container">
                                <div
                                    className={`dot ${index === currentImage ? 'active' : ''} ${index === hoveredDot ? 'hover' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave()}
                                >
                                </div>
                            </div>
                        )
                    }

                    )}
                </div>
            </div>

            <NewsSection />
            <EventsSection />
            <AdmissionsSection />

        </div>
    );
}


export default Home;
