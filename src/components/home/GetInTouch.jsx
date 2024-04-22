import React from "react";

const GetInTouch = ({ heading, message, email, phone, weChat}) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}. You can contact us via:
      </p>
      <ul className="list-unstyled text-center">
        <li>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <strong>Phone:</strong> <strong>{phone}</strong> 
        </li>
        <li>
          <strong>WeChat:</strong> {weChat}
        </li>
      </ul>
    </>
  );
};

export default GetInTouch;
