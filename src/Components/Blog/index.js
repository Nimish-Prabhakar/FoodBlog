import React from 'react';
import asiaPageDimSum from '../../img/asiaPageDimSum.jpeg';
import './Blog.css';

function Blog({ img, name, subHeader }) {
  return (
    <>
      <a href={`/asia/${name.replace(/ /g, '').toLowerCase()}`}>
        <div className="card">
          <div className="imgBx">
            <img src={img} alt={name} />
          </div>
          <div className="details">
            <h2>
              {name}
              <br />
              <span>{subHeader}</span>
            </h2>
          </div>
        </div>
      </a>
    </>
  );
}

export default Blog;
