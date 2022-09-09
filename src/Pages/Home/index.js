import React from 'react';
import Button from '@mui/material/Button';
import homeWide from '../../img/homwWide.jpeg';
import Typography from '@mui/material/Typography';
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
        <div className="homeWrapper">
          <img
            className="carImages"
            src="https://lh6.googleusercontent.com/9aKIEuAwB6DMMxKSTlb8AVqK-5BWjTjoy6CZAUXndZ_eUQ3yi_85bMT6_IeZhCz6ih8=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh4.googleusercontent.com/p2VVZ7V1nFL3PvDzFaQcjzTj3zD-GGGtmtP_kgOEc2FXV1FM20WY265bGpmL-_8Kdh0=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh4.googleusercontent.com/pH4pVpyFXATeyV4mUS8CJFXkg0hSnv7qXRBHs95j0gOaYfZSvmmfvZUqelT6sNlIc38=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh5.googleusercontent.com/LwegPraMbvMoQR8kaNzAMMQCe8883xb4n-mYRUSG8Yjvs4Yfnc6hDEOof3t9BFJOEm8=w2400"
            alt="foodImage"
          />
        </div>
        <div className="homeWrapper">
          <img
            className="carImages"
            src="https://lh6.googleusercontent.com/exTolAIIRXefe7wjwbHLwyY1Iwh62QuRgoe3ciMzibrwbnP5x0M7_xStrQJQ2Dsbzts=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh3.googleusercontent.com/j38ScpYDPLTPzCZ3iiefbWbuPjAgbo6C63XEMTeRnfwLCS0twRd_YBy0snmlg_M_qSw=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh3.googleusercontent.com/papCgXUyyuasSETepTIhiRIk8hneEeYUPf5RiGMmCjVwandXihpkuWNVVIOxDczraM4=w2400"
            alt="foodImage"
          />
          <img
            className="carImages"
            src="https://lh4.googleusercontent.com/e7mtvoimtYeRcZZRGeVExRF4W8_0-ORR9j0nTm4MsoSOjxLqxbC1nYJcxDlANP2zNkY=w2400"
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
        <div className="homeHeaderContent">
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
        <div>
          <img
            className="homeHeaderImg"
            src="https://lh5.googleusercontent.com/ixR8aP5vJ85n5xyuRqkadPU9Eovo9JwHqPR1SXWlOwtvkqiNsUD8dLFb8WBdpW7DUVM=w2400"
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
              src="https://lh5.googleusercontent.com/aMP2-Y7huc-kB2ogfqIDuefVsMHQCNPFxT_OM9NL2iZiq5LuZFovKmOJqnt8o8dRyPQ=w2400"
              alt="foodImage"
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
              src="https://lh4.googleusercontent.com/J7U4o9HlldOixpZ_jcroha3qT-eEK6uo1H6l_FfhQrj6x9_sFIy9a1mOSSeG1LAftQ4=w2400"
              alt="foodImage"
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
              src="https://lh4.googleusercontent.com/thOAyhFQUuhLUMBXNuukK9TMog5SbNcj-qAHWC3uOXruT0U-53rlGREMdpaAQrItoiQ=w2400"
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
              src="https://lh3.googleusercontent.com/VLD7StzDlmycQaCcBFY48lQUnaeOx8IvRnbdv4tPVnAEyZTad_7IvzMKZRNyE5gvh90=w2400"
              alt="foodImage"
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
              src="https://lh3.googleusercontent.com/CfNlv9vxeHsDR3vygDGCyDQUaZTW_OcJiUXd7jd5XVgwxu1O6Z2KkspwgS9Hd_YGs_c=w2400"
              alt="foodImage"
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
        <img
          className="contactHomeImg"
          src="https://lh3.googleusercontent.com/BJTfv6hHErEgUQpTeT4SOyd6D3X0VntSL3huOhBdrfBL_sN5dvC1UVdtcqpzUR-uMKc=w2400"
          alt="contactHomeImg"
        />
      </div>
    </>
  );
}

export default Home;
