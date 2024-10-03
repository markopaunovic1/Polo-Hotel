import React from "react"
import ReactDOM from 'react-dom/client'
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

                    
                </div>
        </div>
    );
}

export default MainPage;