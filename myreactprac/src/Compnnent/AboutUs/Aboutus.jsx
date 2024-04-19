import { useMemo } from 'react';

export const AboutUs = ({ name, children }) => {
  const delay = useMemo(() => {
    for (let i = 0; i <= 500; i++) {
      console.log();
    }
    return 10;
  }, []);

  return (
    <div>
      <h1>{delay}</h1>
      <h2>About Us Page - {name}</h2>
      <div>{children}</div>
    </div>
  );
};

export default AboutUs;

 