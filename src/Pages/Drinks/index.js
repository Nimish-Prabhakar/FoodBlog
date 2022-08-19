import React, { useEffect } from 'react';
import Blog from '../../Components/Blog';
import { latestDrinksDetails } from '../../Constants/appConstants';
import '../Blogs/Blogs.css';
import { Helmet } from 'react-helmet';

function DrinksPage() {
  useEffect(() => {
    const script = document.createElement('script');

    script.async = true;

    script.src =
      'https://dvypar.com/na/waWQiOjExMzAwNjUsInNpZCI6MTE1MzUyMywid2lkIjozNjY2MjcsInNyYyI6Mn0=eyJ.js';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="blogsPageWrapper">
      <div className="blogsPageHeader">
        <h3 className="latestBlogsTitle">Breathtaking Drinks</h3>
      </div>
      {latestDrinksDetails.map((blog, index) => {
        return (
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
        );
      })}
    </div>
  );
}

export default DrinksPage;
