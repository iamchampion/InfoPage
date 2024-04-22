import React, { useState, useEffect } from "react"; // Import React and hooks
import { Row, Col, Image } from "react-bootstrap"; // Import Bootstrap components
import ajayoneImage from "../home/one.jpg"; // Correctly import the image
import ajaytwoImage from "../home/two.jpg"; // Correctly import the image

const ProjectCard = () => {
  // Array of image sources for the carousel
  const images = [
    ajayoneImage,
    ajaytwoImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for the current image index

  // Set up an interval to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // 3 seconds interval

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]); // Dependency on image length

  return (
    <Row className="my-5"> {/* Add some margin to separate from other components */}
      {/* Left column for the image */}
      <Col md={6}> {/* Ensure it's responsive with medium breakpoint */}
        <Image 
          src={images[currentImageIndex]}  // Change the image every 3 seconds
          alt="Ajay Joshi Chemicals"  // Alternative text for accessibility
          fluid  // Ensures the image scales with its container
          rounded  // Optional styling to make the image rounded
        />
      </Col>

      {/* Right column for the text */}
      <Col md={6}
        className="d-flex justify-content-center align-items-center">
        <p> {/* Description text */}
          Started by Ajay Joshi in 2023, Ajay Joshi Chemicals (AJC) is a boutique consulting firm
          in the chemicals industry, with a focus on delivering highly specialized and tailored
          advisory services to chemicals companies within this sector. Ajay Joshi Chemicals offers
          a range of services, including market analysis, strategy development, growth advisory,
          mergers and acquisitions advisory, and sales consulting to grow the clients profitably.
        </p>
      </Col>
    </Row>
  );
};

export default ProjectCard; // Correct default export
