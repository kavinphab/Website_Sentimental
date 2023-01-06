import React from "react";
import cutiehack from "./Pictures/cutiehack.png";
import openAI from "./Pictures/openai.jpg";

const Home = () => {
  return (
    <div className="m-10 text-lg flex flex-wrap justify-between">
      <div className="flex flex-nowrap">
        What is this? <br /> <br />
        Cutie Sentimental is a discord bot that we created during Cutie Hack
        2022 at UCR. It is capable of executing multiple commands from the space
        of a Discord channel. We actively track sentimentality across all
        messages sent during the bot's uptime. We can use the data to provide
        server members with all that data, or better, visualize it using graphs.
        As a fun bonus feature, we also implement facial recognition software
        which can detect if a person is smiling in an uploaded photo. All you
        have to do to learn how to use the bot is invite it to the server, and
        enter '{">"}help'. <br /> <br /> <br />
        <img className="h-50 w-60 pb-20 pl-6" src={cutiehack} alt="cutiehack" />
        
      </div>

     

      

      

      <div className="pb-8 flex flex-nowrap">
        How did we make this? <br /> <br />
        Our bot was created in Python, and thus, has access to many advanced
        packages with varied capabilities. As such, we used OpenAI's natural
        language processing algorithm to track sentiment for both certain
        phrases and over the general lifetime of the Discord server. Also, we
        decided to implement graphical visualizations for these features using
        more integrations. For our smile detection software, we used another
        API, OpenCV.
        <img className="h-50 w-60 pl-6" src={openAI} alt="openAI" />
      </div>
      <a
        href="https://discord.com/oauth2/authorize?client_id=1038500778962337873&permissions=534723951680&scope=bot"
        className="flex  justify-center px-6 py-3 text-white no-underline bg-orange-500 rounded hover:bg-orange-600 hover:text-blue-200 "
      >
        Add to server
      </a>
    </div>
  );
};

export default Home;
