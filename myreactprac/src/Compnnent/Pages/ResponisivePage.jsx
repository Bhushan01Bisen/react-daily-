import { useEffect, useState } from "react";

export const ResponisivePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleClick = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {

    window.addEventListener('resize',handleClick)

    return ()=>{
        window.removeEventListener('resize',handleClick)
    }
  }, []);
  return (
    <div>
      {isMobile ? <h1>A Mobile view</h1> : <h1> Not a Mobile view</h1>}
      <h1 style={{color : isMobile?'red':'blue'}}>React is come an End </h1>
    </div>
  );
};
