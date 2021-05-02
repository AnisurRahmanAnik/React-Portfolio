import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Anik",
    text:
      "i,m Anik, professional web developer and programmer​",
    image: "/images/rcz.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a href="#">
                    <FaFacebookF className="headerIcon" />
                  </a>
                  <a href="#">
                    <FaTwitter className="headerIcon" />
                  </a>
                  <a href="">
                    <FaPinterest className="headerIcon" />
                  </a>
                  <a href="#">
                    <FaInstagram className="headerIcon" />
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
