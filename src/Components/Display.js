import React from "react";

const Display = ({ youtube, twitter, facebook, linkedin }) => {
  return (
    <div className="App">
      <div className="heading">
        <h1>Social Media Counter</h1>
      </div>

      <div className="socialmedia">
        <div className="container">
          <div>
            <i className="fa fa-youtube fa-4x"></i>
            <div className="counter">{youtube}</div>
            <h3>Subscribers</h3>
          </div>
          <div>
            <i className="fa fa-twitter fa-4x"></i>
            <div className="counter">{twitter}</div>
            <h3>Followers</h3>
          </div>
          <div>
            <i className="fa fa-facebook fa-4x"></i>
            <div className="counter">{facebook}</div>
            <h3>Likes</h3>
          </div>
          <div>
            <i className="fa fa-linkedin fa-4x"></i>
            <div className="counter">{linkedin}</div>
            <h3>Connections</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
