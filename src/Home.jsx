import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.png";
import Common from "./Common";

const Home = () =>{
  return(
    <>
       <Common
        name= "We'r Creative Designer"
        imgsrc = {web}
        visit="/service"
        btname = "Get Started"
       />     
    </>
  );
};
export default Home;