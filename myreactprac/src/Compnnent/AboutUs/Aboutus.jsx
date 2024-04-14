import { useMemo } from 'react';

export const AboutUs = ( ) => {
  const delay = useMemo(() => {
    for (let i = 0; i <= 500; i++) {
      console.log();
    }
    return 10;
  }, []);

  return (
    <div>
      <h1>{delay}</h1>
      <h1>
        Aboutus Page... 
      </h1>
    </div>
  );
};

export default AboutUs;
