import React from "react"
import ReactDOM from 'react-dom/client'
import ImageSlider from "../ImageSlider/ImageSlider";
import images from "../../data/images";
import './index.css'

function clickMe() {
    
}

function MainPage() {

    return (
        <div className="mainPage-content-div">
                <img src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg" className="background-img"></img>
            
                <section class='hero-image-text'>
                    <h1>FEEL THE DIFFERENCE</h1>
                    <h3 className="h3-content">Memorable, elegant and significant - Polo Hotel creates meaningful experiences in inspiring environments.</h3>
                    <button onClick={clickMe}
                     className="hero-button">
                        READ MORE
                        </button>
                </section>

                <div>
                    <h1 className="rooms-header-text">Rooms & Suites</h1>

                    <div className="random-images-container">
                        <ImageSlider images={images.randomRoomImages} autoScroll={true}/>
                        <div className="random-images-content">
                            <h1>The essence of Polo Hotel is reflected in every aspect of who we are and what we do.</h1>
                            <h2>We provide unparalleled service, comfort and style while creating meaningful and memorable experiences.</h2>
                        </div>
                    </div>

                    <div className="standard-images-container">
                    <div className="standard-images-content">
                            <h1>STANDARD ROOMS</h1>
                            <h2>All rooms and suites were renovated from 2017–2018, and equipment like a laptop-size safe, smart TV, kettle, minibar, hair dryer, iron, and ironing board are standard.</h2>
                            <h3>Enjoy sophisticated rooms in different design styles.</h3>
                        </div>
                        <ImageSlider images={images.standardRoomImages} autoScroll={false}/> 
                    </div>

                    <div className="random-images-container">
                        <ImageSlider images={images.superiorRoomImages} autoScroll={false}/>
                        <div className="random-images-content">
                            <h1>SUPERIOR ROOMS</h1>
                            <h2>Superior rooms in a hotel offer enhanced comfort and style, often featuring extra amenities like premium bedding and larger spaces.</h2>
                            <h3>These rooms typically provide stunning views with a work desk.</h3>
                        </div>
                    </div>

                    <div className="standard-images-container">
                    <div className="standard-images-content">
                            <h1>SPA</h1>
                            <h2>Relaxation, rejuvenation, and overall well-being, offering a range of treatments like massages, facials, and body therapies, spas help to relieve stress and restore balance.</h2>
                            <h3>With soothing environments, calming music, and skilled therapists, they provide a perfect escape from everyday life.</h3>
                        </div>
                        <ImageSlider images={images.spaImages} autoScroll={false}/> 
                    </div>
                </div>
        </div>
    );
}

export default MainPage;