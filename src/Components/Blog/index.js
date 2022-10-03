import React, { useEffect, useRef } from 'react';
import './Blog.css';

function Blog({ continent, img, name, subHeader }) {
  const htmlString = `
    <script type="text/javascript">
      window._taboola = window._taboola || [];
      _taboola.push({
        mode: 'thumbnails-a',
        container: 'taboola-below-article-thumbnails',
        placement: 'Below Article Thumbnails',
        target_type: 'mix',
      });
    </script>
    <script type="text/javascript">
      window._taboola = window._taboola || [];
      _taboola.push({ flush: true });
    </script>
  `;

  useEffect(() => {
    const fragment = document
      .createRange()
      .createContextualFragment(htmlString);
    divRef.current.append(fragment);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.setAttribute('type', 'text/javascript');

  //   script.innerHTML = `window._taboola = window._taboola || [];
  //   _taboola.push({
  //     mode: 'thumbnails-a',
  //     container: 'taboola-below-article-thumbnails',
  //     placement: 'Below Article Thumbnails',
  //     target_type: 'mix',
  //   });`;

  //   return () => {
  //     // clean up the script when the component in unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.setAttribute('type', 'text/javascript');

  //   window._taboola = window._taboola || [];
  //   _taboola.push({ flush: true });

  //   return () => {
  //     // clean up the script when the component in unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <a href={`/${continent}/${name.replace(/ /g, '').toLowerCase()}`}>
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
      <div ref={divRef} id="taboola-below-article-thumbnails"></div>
    </>
  );
}

export default Blog;
