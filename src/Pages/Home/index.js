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
import './Home.css';

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeUpWrapper">
          <div className="leftHomeSide">
            <h1 className="leftHeader">DO YOU WANT A HEALTHY LIFE?</h1>
            <p className="leftSubHeader">
              The first thing you need to do is to eat healthy. You can find
              everything about healthy eating here. on this site you can both
              read blogs and use healthy recepies.
            </p>
            <Button
              sx={{
                background: '#80c000',
                fontSize: '1.1rem',
                height: '70px',
                width: '280px',
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
    </>
  );
}

export default Home;
