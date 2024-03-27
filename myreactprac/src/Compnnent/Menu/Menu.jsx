import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import './menu.css'
  
import { Home } from "../Home/Home";
export const Menu = () => {
  return (
    <main>
      <BrowserRouter>
      <div id="menu-items">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>

      </div>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      {/* you take h1 or anything only do {then write it } but wan to use XML */}
     </Routes>
        
      </BrowserRouter>
    </main>
  );
};
