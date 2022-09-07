import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import biryani1 from '../../img/biryani1.jpeg';
import biryani2 from '../../img/biryani2.jpeg';
import biryani3 from '../../img/biryani3.jpeg';
import biryani4 from '../../img/biryani4.jpeg';
import Typography from '@mui/material/Typography';
import Flag from 'react-world-flags';
import { viewMoreAsia1, viewMoreAsia2 } from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import { useParams } from 'react-router-dom';

function SingleMealPage() {
  let { id } = useParams();

  return (
    <>
      <div className="SingleMealPageImageCarousel">
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          width="50%"
        >
          <img src={biryani1} alt="biryani" />
          <img src={biryani2} alt="biryani" />
          <img src={biryani3} alt="biryani" />
          <img src={biryani4} alt="biryani" />
        </Carousel>
      </div>
      <div className="SingleMealPageContentFlex">
        <div className="SingleMealPageContentHeader">
          <Typography sx={{ letterSpacing: '1px' }} variant="h3">
            Biryani
          </Typography>
          <Flag style={{ height: '100px' }} code="IR" />
        </div>
        <Typography sx={{ letterSpacing: '1px' }} variant="subtitle1">
          Biryani is one of the most ancient dishes of Asia. This combination of
          rice and meat dates back to Muhgal Empire.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginTop: '25px' }}
          variant="subtitle1"
        >
          The main ingredients of biryani are spices, a base of meat, rice,
          vegetables, and dried fruits, nuts, and yogurt are just a few numerous
          ingredients you will find in Biryani
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginTop: '25px' }}
          variant="subtitle1"
        >
          Emperor Shah Jahan's queen 'Mumtaz Mahal' is the one who inspired this
          authentic dish in the 1600s. The word biryani means fried or roasted
          which is derived from the Persian word birian.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginTop: '25px' }}
          variant="subtitle1"
        >
          This dish is very famous in the southern part of India and is believed
          that the dish made its way from Persia to India via groups of traders
          and immigrants.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginTop: '25px' }}
          variant="subtitle1"
        >
          In ancient times, this dish was only privileged to the royalty but now
          it has become a trademark recipe of every Indian restaurant.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginTop: '25px' }}
          variant="subtitle1"
        >
          Cardamom, cinnamon, bay leaves, coriander, or mint leaves are few of
          the seasonings that are added over biryani to mkae the spice more
          titillating and giving it a unique flavor and making biryani a common
          choice among customers from all around the world.
        </Typography>
      </div>
      <hr className="SingleMealPageHr" />
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

export default SingleMealPage;
