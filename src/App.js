import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import OurServices from "./components/home/Services.jsx"; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Whoweare from "./components/home/ProjectCard.jsx";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
//import Container from 'react-bootstrap/Container'; // Optional: Using Bootstrap for layout

import Experience from "./components/home/Services.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        {/* Add the new route for Our Services */}
        <Route path="/services" exact element={<OurServices />} /> 
        {/* Additional routes */}
        <Route path="/getintouch" exact element={<GetInTouch />} />
        <Route path="/whoweare" exact element={<Whoweare />} />
      </Routes>
      <Footer>
        {/* Example of conditionally rendering components */}
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
            phone={getInTouch.phone}
            weChat={getInTouch.weChat}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
