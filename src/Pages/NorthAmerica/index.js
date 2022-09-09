import React from 'react';
import Typography from '@mui/material/Typography';
import naPageRight from '../../img/naPageRight.jpeg';
import naPageLeft from '../../img/naPageLeft.jpeg';
import {
  naPageDishes1,
  naPageDishes2,
  naPageDishes3,
  viewMoreAsia1,
  viewMoreAsia2,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function NorthAmerica() {
  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          North American Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            When we think of North American cuisine, we think of dishes that are
            exotic, delicious, and rich in flavors and spices.
          </p>
          <p className="homeHeaderSubContent">
            North American Cuisine includes foods native to or popular in
            countries of North America, such as Canadian cuisine, American
            cuisine, African American cuisine, Mexican cuisine.
          </p>
          <p className="homeHeaderSubContent">
            North American cuisines display influence from many international
            cuisines.
          </p>
        </div>
        <img className="contHeaderImg" src={naPageRight} alt="contHeaderImg" />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img className="contHeaderImg" src={naPageLeft} alt="contHeaderImg" />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            North American cuisine first originated with the settlement of the
            North American continent.
          </p>
          <p className="homeHeaderSubContent">
            Amerindian populations cultivated the native plants and animals and
            over time created unique cooking techniques and dishes.
          </p>
          <p className="homeHeaderSubContent">
            Today North American cuisines have global origins and influences in
            addition to unique modern creations native to the region.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from North America
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes1.map((val) => {
          return (
            <Blog name={val.name} img={val.img} subHeader={val.subHeader} />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes2.map((val) => {
          return (
            <Blog name={val.name} img={val.img} subHeader={val.subHeader} />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes3.map((val) => {
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

export default NorthAmerica;
