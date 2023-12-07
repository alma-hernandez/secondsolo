import React from "react";
import ColorSchemesExample from "./Navbar";
import "./AboutBabyDuffey.css"
import halloween from "../images/halloween.jpg";
import meetTheParents from "../images/meetTheParents.jpg";
import kitchen from "../images/kitchen.jpg"



const AboutBabyDuffey = () => {
   return (
    <div id="babyduffinfo">
       < ColorSchemesExample />
       <h1 id="babytitle" >How Baby Duffey Came To Be</h1>
       <img id="babypic1" src={halloween} />
        <p id="baby1">Our friends, Aimee and Landon Brumfield, had difficulty getting pregnant, so as soon as Michael and I thought there may be an issue for us, we went to the fertility clinic they used. We knew it was going to be a difficult time, but we were determined to start a family together. </p>
       <img id="babypic2" src={meetTheParents} />
       <p id="baby2"> Because I was working long and very strange hours, it was a challenge taking all my shots at the same time every day. Michael and I decided that I should stay home for a whie and focus on a new career that would be more beneficial for the family we had in mind.</p>
       <img id="babypic3" src={kitchen} />
       <p id="baby3">After three rounds of IVF, we got out blessing. Our baby is one inch long as of yesterday, and we couldn't be happier. I know Michael will be an amazing father, and I will do my best to keep up with him! His patience in everything will undoubtly save us on more than one occassion.</p>
       
       </div>
       );
};


export default AboutBabyDuffey;