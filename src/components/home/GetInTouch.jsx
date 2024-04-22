import React from "react";

const GetInTouch = ({ heading, message, email, phone, weChat}) => {
  return (
    <>
    <div style={{ height: '30px' }} />
    <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
     <strong>{message}. You can contact us via:</strong>   
      </p>
      <ul className="list-unstyled text-center">
        <li>
          <strong>Email:</strong> <a href={`mailto:${email}`}>joshi_advisory@outlook.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <strong>+91 70784 91992</strong> 
        </li>
        <li>
          <strong>WeChat:</strong> JoshiAjayChem
        </li>
      </ul>
    </>
  );
};

export default GetInTouch;
