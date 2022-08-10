import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    // const hrBar = document.getElementById('horizontalBar');
    // hrBar.insertBefore(script, hrBar);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
