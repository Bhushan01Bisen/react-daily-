import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      const mobileRegExp =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(!!userAgent.match(mobileRegExp));
    };

    checkIsMobile();

    // Add event listener for better responsiveness
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
}

// Usage
function MyComponent() {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <p>You are using a mobile device.</p>
      ) : (
        <p>You are not using a mobile device.</p>
      )}
    </div>
  );
}

export default MyComponent;