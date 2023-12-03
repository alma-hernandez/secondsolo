import React from "react";
import ColorSchemesExample from "./Navbar";
import stateFairMural from "../images/stateFairMural.jpg";
import "./Home.css";


const Home = () => {
    return (
        <div>
            <ColorSchemesExample />

            <h1>How We Met</h1>

            <img src={stateFairMural} alt="State Fair Mural" />
            <p id="intro">We used an app called "Hinge",  who's slogan is "The app designed to be deleted." They were 100% right! We met very quickly for lunch at Torchy's Tacos. We were having so much fun, we decided to go play indoor mini-golf. Unfortunately, the wait was 1.5hr, so we played some arcade games instead. He was a complete gentleman, and dropdead gorgeous. I couldn't wait to see him again. We both really wanted a family and had the same thoughts when it came to raising one. There was never a better match. Just a couple months later on November 10th, we got engaged. We were married on April 29, and found out about Baby Duffey on November 22nd. It was a whirlwind of adventures, and I thank God for giving me such an amazing person in my life. </p>
        </div>
    );
};

export default Home;