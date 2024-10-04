import React, { useState, useEffect} from "react";
import './index.css'
import hotelImages from '../../data/images'


function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const randomImages = hotelImages.randomRoomImages

    const carouselInfiniteScroll = () => {
        if (currentIndex === randomImages - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
        // clean up function
        return () => clearInterval(interval)
    })

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
        </div>
    );
} 

export default ImageSlider;