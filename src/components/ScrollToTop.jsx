import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current page's path (e.g., "/", "/services")
  const { pathname } = useLocation();

  // This effect runs every time the path changes
  useEffect(() => {
    // Scrolls the window to the top left corner
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  return null; // This component doesn't render anything visible
}

export default ScrollToTop;