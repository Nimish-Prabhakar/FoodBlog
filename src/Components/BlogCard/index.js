import React from 'react';
import shake from '../../img/shake.jpeg';
import Button from '@mui/material/Button';
import './BlogCard.css';

const styles = {
  btn: {
    background: '#80c000',
    width: '50%',
    alignSelf: 'flex-start',
    '@media screen and (max-width: 1200px)': {
      width: '80%',
    },
  },
};

function BlogCard({ image, date, views, header, subHeader }) {
  return (
    <div className="blogCardWrapper">
      <img className="blogImg" src={image} alt="image" />
      <div className="blogDate">
        <p style={{ fontSize: '12px' }}>{date}</p>
        <p style={{ fontSize: '12px' }}>{views}</p>
      </div>
      <h3
        style={{ marginTop: '-5px', display: 'flex', alignSelf: 'flex-start' }}
      >
        {header}
      </h3>
      <p style={{ fontSize: '15px', marginTop: '-8px' }}>{subHeader}</p>
      <Button sx={styles.btn} variant="contained">
        Read More
      </Button>
    </div>
  );
}

export default BlogCard;
