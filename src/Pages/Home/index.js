import React from 'react';
import Button from '@mui/material/Button';
import HomeImg from '../../img/homeImg.png';
import BlogCard from '../../Components/BlogCard';
import {
  blogCardDetails,
  latestRecepiesDetails,
  desertCardDetails,
  drinkCardDetails,
} from '../../Constants/appConstants';
import Footer from '../../Components/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeUpWrapper">
          <div className="leftHomeSide">
            <h1 className="leftHeader">Why should Keto have all the fun??</h1>
            <p className="leftSubHeader">
              Welcome aboard, you don’t need to be ruthless in order to be zero-
              sized. Let us spice up your life with easy- peasy healthy-licious
              recipes, blogs and much more!
            </p>
            <Button
              sx={{
                background: '#80c000',
                fontSize: '1.1rem',
                height: '70px',
                width: '280px',
                '@media screen and (max-width: 1200px)': {
                  fontSize: '0.7rem',
                  height: '40px',
                  width: '180px',
                },
              }}
              variant="contained"
            >
              Start Reading
            </Button>
          </div>
          <div className="rightHomeSide">
            <img className="rightHomeImg" src={HomeImg} alt="homeImg" />
          </div>
        </div>
        <div className="latestBlogWrapper">
          <h2 className="latestBlogs">LATEST BLOGS</h2>
          <div className="blogCardsFlex">
            {blogCardDetails.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  header={blog.header}
                  subHeader={blog.subHeader}
                  date={blog.date}
                  views={blog.views}
                  image={blog.image}
                />
              );
            })}
          </div>
        </div>
        <div className="latestBlogWrapper">
          <h2 className="latestBlogs">MOST READ RECEPIES</h2>
          <div className="blogCardsFlex">
            {latestRecepiesDetails.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  header={blog.header}
                  subHeader={blog.subHeader}
                  date={blog.date}
                  views={blog.views}
                  image={blog.image}
                />
              );
            })}
          </div>
        </div>
        <div className="latestBlogWrapper">
          <h2 className="latestBlogs">DELICIOUS DESERTS</h2>
          <div className="blogCardsFlex">
            {desertCardDetails.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  header={blog.header}
                  subHeader={blog.subHeader}
                  date={blog.date}
                  views={blog.views}
                  image={blog.image}
                />
              );
            })}
          </div>
        </div>
        <div className="latestBlogWrapper">
          <h2 className="latestBlogs">BREATHTAKING DRINKS</h2>
          <div className="blogCardsFlex">
            {drinkCardDetails.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  header={blog.header}
                  subHeader={blog.subHeader}
                  date={blog.date}
                  views={blog.views}
                  image={blog.image}
                />
              );
            })}
          </div>
        </div>
        <hr className="hrBar" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
