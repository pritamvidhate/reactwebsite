import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/react.gif";
import Common from "./Common";

const About = () =>{
  return(
    <>
     
       <Common
        name= "Welcome to About Page"
        imgsrc = {web}
        visit="/contact"
        btname = "Contact Now"
       />
       <div class="row justify-content-center ">
        <div class="col-lg-6 order-1 order-lg-2">
            <p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services. Web development has also impacted personal networking and marketing. Web sites are no longer simply tools for work or for commerce, but serve more broadly for communication and social networking. Web sites such as Facebook and Twitter provide users with a platform to communicate and organizations with a more personal and interactive way to engage the public.</p>
            </div>
    </div>
    </>
  );
};
export default About;