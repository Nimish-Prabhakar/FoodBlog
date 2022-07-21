import React from 'react';
import { BiUser, BiTimeFive, BiFolder } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import Button from '@mui/material/Button';
import './Blog.css';

const styles = {
  btn: {
    width: '30%',
    marginTop: '20px',
  },
};

function Blog({
  image,
  header,
  user,
  date,
  comments,
  type,
  para1,
  para2,
  para3,
}) {
  return (
    <div className="blogWrapper">
      <img className="blogPhoto" src={image} alt="berryBlog" />
      <h3 className="blogPhotoHeader">{header}</h3>
      <div className="blogIconInfo">
        <div className="blogIconInfoMini">
          <BiUser style={{ marginRight: '10px' }} />
          <p>{user}</p>
        </div>
        <div className="blogIconInfoMini">
          <BiTimeFive style={{ marginRight: '10px' }} />
          <p>{date}</p>
        </div>
        <div className="blogIconInfoMini">
          <BiFolder style={{ marginRight: '10px' }} />
          <p>{type}</p>
        </div>
        <div className="blogIconInfoMini">
          <FaRegComment style={{ marginRight: '10px' }} />
          <p>{comments} Comments</p>
        </div>
      </div>
      <p className="blogPara">
        {para1}
        <p>{para2}</p>
        {para3}
      </p>
      <Button sx={styles.btn} variant="outlined">
        Continue Reading
      </Button>
    </div>
  );
}

export default Blog;
