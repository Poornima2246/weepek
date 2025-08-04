import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if the URL has a hash (like #section)
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [pathname]);

  return children;
};

export default SmoothScroll;