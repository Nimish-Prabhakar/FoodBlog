import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Car1 from '../../img/navCar1.jpeg';
import Car2 from '../../img/navCar2.jpeg';
import Car3 from '../../img/navCar3.jpeg';
import Car4 from '../../img/navCar4.jpeg';
import Car5 from '../../img/navCar5.jpeg';
import Car6 from '../../img/navCar6.jpeg';
import Car7 from '../../img/navCar7.jpeg';
import Car8 from '../../img/navCar8.jpeg';
import homeWide from '../../img/homwWide.jpeg';
import homeHeaderLeft from '../../img/homeHeaderLeft.jpeg';
import asiaHome from '../../img/asiaHome.jpeg';
import europeHome from '../../img/europeHome.jpeg';
import africaHome from '../../img/africaHome.jpeg';
import americaHome from '../../img/americaHome.jpeg';
import mexicoHome from '../../img/mexicoHome.jpeg';
import contactHome from '../../img/contactHome.jpeg';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextField from '@mui/material/TextField';
import BasicCard from '../../Components/BlogCard';
import {
  homePageMeals1,
  homePageMeals2,
  homePageMeals3,
} from '../..//Constants/appConstants';
import './Home.css';

const styles = {
  textField: {
    width: '750px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '610px',
    },
  },
  contCardContent: {
    letterSpacing: '10px',
    color: 'white',
    fontSize: '30px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      letterSpacing: '4px',
      fontSize: '20px',
    },
  },
  smallText: {
    width: '350px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '290px',
    },
  },
  contactHomeSubHeader: {
    letterSpacing: '1px',
    marginBottom: '20px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '0.600rem',
    },
  },
};

AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-out-sine',
  delay: 100,
  mirror: true,
});

function Home() {
  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <div data-aos="fade-right" className="homeWrapper">
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car1}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car2}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car3}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car4}
            alt="foodImage"
          />
        </div>
        <div data-aos="fade-left" className="homeWrapper">
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car5}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car6}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car7}
            alt="foodImage"
          />
          <LazyLoadImage
            effect="blur"
            className="carImages"
            src={Car8}
            alt="foodImage"
          />
        </div>
      </div>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h4" gutterBottom>
          A quick word
        </Typography>
      </div>
      <div className="homeHeaderWrapper">
        <div data-aos="fade-right" className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            These blogs are for anyone who loves to cook and for everyone who
            doesn’t.
          </p>
          <p className="homeHeaderSubContent">
            Here you'll find a collection of some of the most ethnic rich
            cuisines from around the world.
          </p>
          <p className="homeHeaderSubContent">
            Each cuisine has a story to tell, and you will learn about the
            origins of some of your favourite meals and the rich history behind
            them.
          </p>
          <p className="homeHeaderSubContent">
            Unfold your napkins and be ready on a journey down the foodey lane
            and let's explore whats it like to dine across the globe.
          </p>
          <p className="homeHeaderSubContent">
            Throughout these articles, the words 'Cuisine', 'Food' and 'Meals'
            have been used interchangebly, hope you don't mind &#128521; and
            don't get confused by the nomenclature, all these words have common
            meaning.
          </p>
          <Button sx={{ marginTop: '50px' }} variant="outlined">
            Learn more about us --&gt;
          </Button>
        </div>
        <div data-aos="fade-left">
          <LazyLoadImage
            effect="blur"
            className="homeHeaderImg"
            src={homeHeaderLeft}
            alt="homeHeaderImg"
          />
        </div>
      </div>
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '100px' }}
          variant="h4"
          gutterBottom
        >
          Best Cuisines From Different Continents
        </Typography>
      </div>
      <div data-aos="fade-right" className="continentsWrapper">
        <div className="contImg">
          <a href="/asia">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src={asiaHome}
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Asia
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; Asia shelters largest cultures and cuisines.
              </p>
              <p className="content-list">
                &#x2022; Ingredients like Rice, Ginger, Garlic, Chilies, Dried
                Onions are used in almost all Asian foods.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/north-america">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src={americaHome}
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle" style={{ left: '40%' }}>
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                North America
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; North American Cuisine includes foods native to
                countries such as Canadian cuisine, American cuisine.
              </p>
              <p className="content-list">
                &#x2022;The colonization of North America brought European,
                African and Asian cuisine to the region.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/africa">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src={africaHome}
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Africa
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; The roots of African cuisine goes back thousands of
                years to the Bronze Age in Northeast Africa.
              </p>
              <p className="content-list">
                &#x2022; Traditionally, the various cuisines of Africa use a
                combination of plant and seed based, and do not usually have
                food imported.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="continentsWrapper"
        style={{ marginBottom: '100px' }}
      >
        <div className="contImg">
          <a href="/south-america">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src={mexicoHome}
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle" style={{ left: '35%' }}>
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                South America
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; South American cuisine has many influences, due to the
                ethnic fusion of South America..
              </p>
              <p className="content-list">
                &#x2022; The Amazon basin of South America provides a plethora
                of fresh fish and tropical fruits and vegetables.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/europe">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src={europeHome}
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Europe
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; European cuisine comprises the cuisines of Europe
                including the cuisines brought to other countries by European
                settlers and colonists.
              </p>
              <p className="content-list">
                &#x2022; Historically, European cuisine has been developed in
                the European royal and noble courts..
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
      </div>
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '100px' }}
          variant="h4"
          gutterBottom
        >
          Famous Meals From Around The World
        </Typography>
      </div>
      <div className="topDishesHome">
        {homePageMeals1.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
              />
            </div>
          );
        })}
      </div>
      <div className="topDishesHome">
        {homePageMeals2.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
              />
            </div>
          );
        })}
      </div>
      <div className="topDishesHome">
        {homePageMeals3.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
              />
            </div>
          );
        })}
      </div>
      <img className="vegetablesImg" src={homeWide} alt="homeWide" />
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '50px' }}
          variant="h4"
          gutterBottom
        >
          Contact Us
        </Typography>
      </div>
      <div className="contactHome">
        <div className="contactDetails">
          <Typography
            sx={styles.contactHomeSubHeader}
            variant="subtitle2"
            gutterBottom
          >
            We value any comments or feedback, so if you would like to get in
            touch with us we would love to hear from you.
          </Typography>
          <div className="contentFields">
            <TextField
              sx={styles.smallText}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              sx={styles.smallText}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div className="contentFields">
            <TextField
              sx={styles.smallText}
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
            />
            <TextField
              sx={styles.smallText}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </div>
          <TextField
            sx={styles.textField}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            multiline
          />
          <div className="contactHomeSendBtn">
            <Button variant="outlined">Send Now</Button>
          </div>
        </div>
        <img className="contactHomeImg" src={contactHome} alt="</div>" />
      </div>
    </>
  );
}

export default Home;
