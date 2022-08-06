import React from 'react';
import './About.css';
import About1 from '../../img/about1.jpeg';
import About2 from '../../img/about2.jpeg';
import About3 from '../../img/about3.jpeg';
import About4 from '../../img/about4.jpeg';

function About() {
  return (
    <div className="AboutWrapper">
      <div className="blogsPageHeader">
        <h3 className="latestBlogsTitle">About Us</h3>
      </div>
      <div className="aboutContainer">
        <h3 className="aboutTags">
          Number One Meals” is born out of curiosity and the need to address the
          mental health issues that prevail today due to the societal pressure
          of looking a certain kind and eating a certain type, called the ‘gram-
          issues’ in the instagram’s language.
        </h3>
        <div className="aboutImgFlex">
          <img className="aboutImages" src={About1} alt="about1" />
          <img className="aboutImages" src={About2} alt="about2" />
        </div>
        <h3 className="aboutTags">
          We offer ways like healthy eating blogs, recipes, savory and desserts
          without pressurizing you to eat things which are good for health but
          tough on taste buds. Healthy eating is balanced eating and not the
          kind that is trending today; per say it is morally wrong to publicize
          food items just for the sake of views.
        </h3>
        <h3 className="aboutTags">
          We are at your rescue, just click and eat what you love, no
          compromises here! We are hoping that you hop-on this train to have a
          food-ilicious ride with us.
        </h3>
        <div className="aboutImgFlex">
          <img className="aboutImages" src={About3} alt="about3" />
          <img className="aboutImages" src={About4} alt="about4" />
        </div>
      </div>
      <hr className="hrBar" />
    </div>
  );
}

export default About;
