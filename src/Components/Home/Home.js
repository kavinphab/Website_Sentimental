import React from "react";

const Home = () => {
  return (
    <div className="bg-grey-500">
      <div className="m-8 text-lg flex flex-wrap justify-between">
        <div>
          What is this? <br /> <br />
          Cutie Sentimental is a discord bot that we created during Cutie Hack
          2022 at UCR. It is capable of executing multiple commands from the
          space of a Discord channel. We actively track sentimentality across
          all messages sent during the bot's uptime. We can use the data to
          provide server members with all that data, or better, visualize it
          using graphs. As a fun bonus feature, we also implement facial
          recognition software which can detect if a person is smiling in an
          uploaded photo. All you have to do to learn how to use the bot is
          invite it to the server, and enter '{">"}help'. <br/> <br/> <br/>
        </div>

        <div></div>

        <div></div>

        <a href ="https://discord.com/oauth2/authorize?client_id=1038500778962337873&permissions=534723951680&scope=bot" className = "mr-6 underline underline-offset-4 hover:text-orange-400"> Click to add to server <br/> <br/> <br/> </a>

     

        <div>
          How did we make this? <br /> <br />
          Our bot was created in Python, and thus, has access to many advanced
          packages with varied capabilities. As such, we used OpenAI's natural
          language processing algorithm to track sentiment for both certain
          phrases and over the general lifetime of the Discord server. Also, we
          decided to implement graphical visualizations for these features using
          more integrations. For our smile detection software, we used another
          API, OpenCV.
        </div>
      
      </div>
    </div>
  );
};

export default Home;
