import '../image slider/imageSlider.css'
import { useEffect, useState } from "react";



function ImageSlider ({slides}) {
    
    const [activeIndex, setActiveIndex] = useState(0);
    

    useEffect(() => {
        const interval = setInterval (() => {
            setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
        }, 3000)
        return () => clearInterval(interval);
    }, [activeIndex]);

    const prevSlide= () => {
        const isFirstIndex = activeIndex === 0;
        const newIndex = isFirstIndex ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };
    const nextSlide= () => {
        const isLastIndex = activeIndex === slides.length - 1;
        const newIndex = isLastIndex ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };
    


    const goToSlide = (index) => {
        setActiveIndex(index);
    };
    
    
    
    
    
    return(
        <>
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div key={slide.id}>
                    <div className={`${index === activeIndex ? "slider active" : "slider inactive"}`}>
                        <img src={slide.src} alt="" />
                        <span onClick={prevSlide} className="leftArrow">&#10094;</span>
                        <span onClick={nextSlide} className="rightArrow">&#10095;</span>
                    </div>
                </div>
            ))}
            <div className="all-dots">
                {slides.map((slide,index) => (
                    <span 
                        key={slide.id} 
                        className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
        </>
    );
};

export default ImageSlider