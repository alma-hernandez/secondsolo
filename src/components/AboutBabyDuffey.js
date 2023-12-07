import React from "react";
import ColorSchemesExample from "./Navbar";
import "./AboutBabyDuffey.css"
import halloween from "../images/halloween.jpg";
import meetTheParents from "../images/meetTheParents.jpg";



const AboutBabyDuffey = () => {
   return (
    <div>
       < ColorSchemesExample />
       <h1 id="babytitle" >How Baby Duffey Came To Be</h1>
       <img id="babypic1" src={halloween} />
        <p id="baby1">Our friends, Aimee and Landon Brumfield, had difficulty getting pregnant, so as soon as Michael and I thought there may be an issue for us, we went to the fertility clinic they used. We knew it was going to be a difficult time, but we were determined to start a family together. </p>
       <img id="babypic2" src={meetTheParents} />
       <p id="baby2"> Because I was working long and very strange hours, it was a challenge taking all my shots at the same time every day. Michael and I decided that I should stay home for a whie and focus on a new career that would be more beneficial for the family we had in mind.</p>
       </div>
       );
};


export default AboutBabyDuffey;