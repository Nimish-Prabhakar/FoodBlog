import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div className="footerContainer">
      <p className="organicBombFooter">Number One Meals</p>
      <div className="footerFirstNav">
        <NavLink className="footerNavLinks" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="footerNavLinks" to="/">
          HOME
        </NavLink>
        <NavLink className="footerNavLinks" to="/blog">
          BLOG
        </NavLink>
        <NavLink className="footerNavLinks" to="/reciept">
          RECIEPT
        </NavLink>
      </div>
      <div className="footerFirstNav">
        <NavLink className="footerNavLinks" to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="footerNavLinks" to="/">
          OUR TEAM
        </NavLink>
        <NavLink className="footerNavLinks" to="/blog">
          CONTACT US
        </NavLink>
        <NavLink className="footerNavLinks" to="/reciept">
          PRESS
        </NavLink>
      </div>
      <div className="footerFirstNav">
        <NavLink className="footerNavLinks" to="/about">
          PARTNER WITH US
        </NavLink>
        <NavLink className="footerNavLinks" to="/">
          PRIVACY POLICY
        </NavLink>
        <NavLink className="footerNavLinks" to="/blog">
          TERMS OF SERVICE
        </NavLink>
        <NavLink className="footerNavLinks" to="/reciept">
          GET HELP
        </NavLink>
      </div>
      <div>
        <BsFacebook className="footerIcons" />
        <BsTwitter className="footerIcons" />
        <IoLogoWhatsapp className="footerIcons" />
        <AiFillInstagram className="footerIcons" />
        <IoMdMail className="footerIcons" />
      </div>
    </div>
  );
}

export default Footer;
