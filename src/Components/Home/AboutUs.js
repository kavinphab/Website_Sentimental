import Shaurya from "./Pictures/Shaurya.jpg";
import Rohan from "./Pictures/Rohan.jpg";
import Kavin from "./Pictures/Kavin.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";

export default function AboutUs() {
  return (
    <div className="flex justify-around m-6">
      <div className="bg-green-500">
        <img className="h-80 w-90" src={Kavin} alt="Kavin" />
        <h1 className="flex justify-center">
          {" "}
          <br /> Kavin Phabiani{" "}
        </h1>
        <div className="flex justify-around">
          <a href="https://www.linkedin.com/in/kavin-phabiani/">
            <FaLinkedin size={30} />
          </a>
        

        
          <a href="https://github.com/kavinphab">
            <FaGithub size={30} />
          </a>
        </div>   
        </div>     
      

      <div className="bg-red-500">
        <img className="h-80 w-90 " src={Rohan} alt="Rohan" />
        <h1 className="flex justify-center">
          {" "}
          <br /> Rohan Bijukumar{" "}
        </h1>
        <div className="flex justify-around">
          <a href="https://www.linkedin.com/in/rohan-bijukumar-678439237/">
            <FaLinkedin size={30} />
          </a>
        

        
          <a href="https://github.com/rbiju001">
            <FaGithub size={30} />
          </a>
        </div> 
      </div>

      <div className="bg-blue-500">
        <img className="h-80 w-90" src={Shaurya} alt="Shaurya" />
        <h1 className="flex justify-center">
          {" "}
          <br /> Shaurya Pathak{" "}
        </h1>
        <div className="flex justify-around">
          <a href="https://www.linkedin.com/in/shaurya-pathak-b0614a1b2/">
            <FaLinkedin size={30} />
          </a>
        

        
          <a href="https://github.com/shaurya-pathak">
            <FaGithub size={30} />
          </a>
        </div> 
      </div>
    </div>
  );
}
