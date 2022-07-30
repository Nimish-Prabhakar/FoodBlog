import React from 'react';
import Blog from '../../Components/Blog';
import { mostReadRecepies } from '../../Constants/appConstants';
import '../Blogs/Blogs.css';

function RecepiesPage() {
  return (
    <div className="blogsPageWrapper">
      <div className="blogsPageHeader">
        <h3 className="latestBlogsTitle">Most Read Recepies</h3>
      </div>
      {mostReadRecepies.map((blog, index) => {
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

      <hr className="hrBar" />
    </div>
  );
}

export default RecepiesPage;
