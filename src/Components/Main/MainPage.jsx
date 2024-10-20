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

                    <div>
                        <h1 className="services-content-header">SERCVICES</h1>
                        <div>
                            <ul className="all-hotel-services-content">
                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/81554/breakfast.svg" alt="breakfast-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Breakfast buffet</h2>
                                            <p>Fresh breakfast buffet</p> 
                                        </div>
                                    </div>
                                </li>
                                
                                <li> 
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/532893/wifi.svg" alt="wifi-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Free wifi</h2>
                                            <p>Free wifi</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/521869/swimming.svg" alt="swimming-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Indoor pool</h2>
                                            <p>Indoor pool all year</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/502761/luggage.svg" alt="luggage-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Luggage storage</h2> 
                                            <p>Luggage storage</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/307946/meeting-consider-deliberate-about-meet.svg" alt="meeting-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Meeting rooms</h2>
                                            <p>Meeting rooms/social space</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/455319/restaurant-fork-knife.svg" alt="restaurant-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Hotel restaurant</h2>
                                            <p>Restauranger på hotellet</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/472894/wheelchair.svg" alt="wheelchair-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Availability</h2>
                                            <p>Disability adaptation available</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/355802/dumbell.svg" alt="dumbell-icon-img" />    
                                        </div>
                                        <div>
                                            <h2>Fitness center</h2>
                                            <p>Training rooms and equipments</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/489008/laundry.svg" alt="laundry-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Laundry service</h2>
                                            <p>Laundry service</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/479103/paw-2.svg" alt="paw-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Pet friendly</h2>
                                            <p>Pets allowed - ask for information</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/490317/room-service.svg" alt="room-service-icon-img" />
                                        </div>
                                        <div>
                                            <h2>Room service</h2>
                                            <p>Room service</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="services-overview-card">
                                        <div className="service-card-icon">
                                            <img src="https://www.svgrepo.com/show/478084/security-free-material.svg" alt="security-icon-img" />
                                        </div>
                                            <div>
                                            <h2>Safety and security certificate</h2>
                                            <p>Safehotels Alliance-certificate</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default MainPage;