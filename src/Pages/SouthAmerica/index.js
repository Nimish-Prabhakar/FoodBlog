import React from 'react';
import Typography from '@mui/material/Typography';
import {
  asianPageDishes1,
  asianPageDishes2,
  asianPageDishes3,
  viewMoreAsia1,
  viewMoreAsia2,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function Asia() {
  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          Asian Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            When we think of Asian cuisine, we think of dishes that are exotic,
            delicious, and rich in flavors and spices.
          </p>
          <p className="homeHeaderSubContent">
            Asia, being the world’s biggest and most populous continent, is home
            to a diverse range of cultures, each with its own distinct cuisine.
          </p>
          <p className="homeHeaderSubContent">
            Rice is a staple starch in almost all Asian dietary cultures.
            Different types of rice are popular in different parts of the
            region.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh6.googleusercontent.com/gm3TteFjy6vDf94S2ukNzI56fic7_PttwuBS_Z-qHdKCzWbrWC1raK5WGT2vyO-MWpE=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh4.googleusercontent.com/u1_U_v2sYK7LS7si8B4ExwEoO-mFOVEinJrSd5470kcaDfmBsjnoX479rTdjJ-6_Uwc=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Asian cuisine evolution did not happen by itself. It occurred due to
            European colonies migrating to the northeast and southwest.
          </p>
          <p className="homeHeaderSubContent">
            Vietnam, Laos, and Cambodia, for instance, were under French
            colonies.Malaysia was under the British colony, whereas Indonesia
            was ruled by the Dutch colony.
          </p>
          <p className="homeHeaderSubContent">
            It all ended up enhancing the original southeast cuisine, and
            introducing additional components that are now part Asian cuisine.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from the subcontinent of Asia
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes1.map((val) => {
          return (
            <Blog name={val.name} img={val.img} subHeader={val.subHeader} />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes2.map((val) => {
          return (
            <Blog name={val.name} img={val.img} subHeader={val.subHeader} />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes3.map((val) => {
          return (
            <Blog name={val.name} img={val.img} subHeader={val.subHeader} />
          );
        })}
      </div>
      <div className="viewMore" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h4" gutterBottom>
          View More
        </Typography>
        <hr />
      </div>
      <div className="viewMoreContent">
        {viewMoreAsia1.map((val) => {
          return (
            <ViewMoreCard
              img={val.img}
              header={val.header}
              subHeader={val.subHeader}
              url={val.url}
            />
          );
        })}
      </div>
      <div className="viewMoreContent">
        {viewMoreAsia2.map((val) => {
          return (
            <ViewMoreCard
              img={val.img}
              header={val.header}
              subHeader={val.subHeader}
              url={val.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default Asia;