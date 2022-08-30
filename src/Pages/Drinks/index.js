import React, { useEffect } from 'react';
import Blog from '../../Components/Blog';
import { latestDrinksDetails } from '../../Constants/appConstants';
import '../Blogs/Blogs.css';
import useScript from '../../Components/useScript';

function DrinksPage() {
  useScript(
    'https://frenchequal.pro/code/pops.js?h=waWQiOjExMzAwNjUsInNpZCI6MTE1MzUyMywid2lkIjozNzE2OTIsInNyYyI6Mn0=eyJ',
    'childElement'
  );

  return (
    <div className="blogsPageWrapper">
      <div id="parentElement" className="blogsPageHeader">
        <h3 className="latestBlogsTitle">Breathtaking Drinks</h3>
      </div>
      {latestDrinksDetails.map((blog, index) => {
        return (
          <div id="childElement">
            <Blog
              key={index}
              image={blog.image}
              date={blog.date}
              user={blog.user}
              para1={blog.para1}
              para2={blog.para2}
              para3={blog.para3}
              type={blog.type}
              header={blog.header}
              comments={blog.comments}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DrinksPage;
