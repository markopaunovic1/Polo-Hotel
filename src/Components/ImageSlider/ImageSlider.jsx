import React, { useState, useEffect} from "react";
import './index.css'
import hotelImages from '../../data/images'


function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const randomImages = hotelImages.randomRoomImages

    const carouselInfiniteScroll = (props) => {
        if (currentIndex === randomImages.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
        // clean up function
        return () => clearInterval(interval);
    });

    const nextImage = () => {
        setActiveIndex(() => {
            if (currentIndex >= randomImages.length -1) {
                return setCurrentIndex(0);
            } else {
                return setCurrentIndex(currentIndex + 1);
            }
        });
    }

    const prevImage = () => {
        setActiveIndex(() => {
            if (currentIndex <= 0)  {
                return setCurrentIndex(3);
            } else {
                return setCurrentIndex(currentIndex - 1);
            }
        });
    }

    return (
        <div className="carousel-container">
            {randomImages.map((image, index) => {
                return (
                    <img 
                        src={image.imgURL}
                        className="carousel-item"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        key={index}
                        alt={`Slide ${index}`}
                    />
                );
            })}

            <div className="button-container">
                <button className="slider-button-next"
                onClick={(e) => {
                    e.preventDefault();
                    nextImage();
                }}
                > {">"}</button>

                <button className="slider-button-prev"
                onClick={(e) => {
                    e.preventDefault();
                    prevImage();
                }}
                >{"<"}</button>
            </div>
        </div>
    );
} 

export default ImageSlider;