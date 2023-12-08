import React from "react";
import ColorSchemesExample from "./Navbar";
import "./AboutMichael.css"
import ImageCarousel from "./imageCarousel.js";


const AboutMichael = () => {
    return (
        <div id="michaelspage">
        < ColorSchemesExample />
        <h1 id="michaeltitle">About My Amazing Husband</h1>
        <p id="michaelinfo" >Michael is the youngest of three children, and his siblings swear he is the favorite child. He was born in Dallas and his parents are Greg and Deb. He went to college without finishing high school, because he was so smart. He has always loved computers and games and made a great career out of it. He was also an actor in college, but I haven't seen videoes of his acting yet. He lived in New York for a while, then moved back to Texas. There's an ex-wife in there somewhere, but moving on. He has owned our home on Delaware in Southtown San Antonio for about ten years. Now he's happily married to the right woman and will remain so until the end of time!</p>
        <ImageCarousel />

        </div>
        );
};


export default AboutMichael;