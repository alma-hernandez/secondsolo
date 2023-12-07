import React, { useState, useEffect } from 'react';
import ColorSchemesExample from './Navbar';
import "./AboutAlma.css"
import boerneLake from "../images/boerneLake.jpg";
import mattJeffHome from "../images/mattJeffHome.jpg";
import thirdDate from "../images/thirdDate.JPG";


const AboutAlma = () => {
    const almaImages = [
        boerneLake,
        mattJeffHome,
        thirdDate
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % almaImages.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);



    return (
        <div id="almaBackground">
            < ColorSchemesExample />
            <div>
                <h1 id="almatitle">About Me</h1>
            </div>
            <img id="almapics"
                className="transition-image large-image"
                src={almaImages[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
            />
            <p id="almainfo">I was born March 22,l 1984 at 5:04am, and my mother has woken me up at that time every year on my birthday. I lived in San Antonio until I was nine, then my mother, brother, and I moved to Harlingen to be closer to my mom's side of the family. It was a little too slow-paced for me, so as soon as I turned 18, I came back to San Antonio for college. I didn't particularly care for college so I worked at different restaurants over the years and eventually became a manager. I worked long hours and didn't make time to date seriously. After about 20years of that, I knew I wanted a child, and time was ticking. I was working at a place that gave me more of a normal schedule, so I made a date with Michael. I had to cancel our inital meeting because I did have to work late. Thank goodness he gave me a second chance! </p>
        </div>


    );
};

export default AboutAlma;
