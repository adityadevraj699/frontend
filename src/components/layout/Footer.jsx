/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          Discover insightful articles on the latest technology trends, innovations, and solutions. Explore expert tips, tutorials, and industry news to stay updated in the digital world.
          </p>
          <p>
            <span>Email:</span>adevraj934@gmail.com
          </p>
          <p>
            <span>Phone:</span>911-016-9560
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`adevraj934@gmail.com`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">𝕬𝖉𝖎 <span>𝕭𝖑𝖔𝖌</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/adityadevraj699/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/adityadevraj699"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.linkedin.com/in/aditya-kumar-9605b9240/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
