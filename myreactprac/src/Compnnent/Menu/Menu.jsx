import { Link, BrowserRouter, Route, Routes } from "react-router-dom"; //Navigate
import "./menu.css";

// import { Home } from "../Home/Home";
// import { Aboutus } from "../AboutUs/Aboutus";
import { Suspense, lazy } from "react";
// import { EntryPage } from "../EntryPage/EntryPage";
import { WithoutRedux } from "../WiithoutRedux/WithoutRedux";
import { ResponisivePage } from "../Pages/ResponisivePage";
import AboutUs from "../AboutUs/Aboutus";  //for Contextapi otherwise we use lazy Loading
import ForwardRef1 from "../ForwardREf/ForwardRef1";
import { WithoutRedux2 } from "../WithoutRedux2/WithoutRedux2";
// import { CounterWithRedux } from "../Counter/CounterWithRedux";
import { ParentRedux } from "../WithRedux/ParentRedux";
// import { CounterWithRedux } from "../Counter/CounterWithRedux";
 // import { SessionStororageExAdd } from "../Pages/SessionStororageExAdd";
// import { LocalStrorageExample } from "../Pages/LocalStrorageExample";
const Home = lazy(() => import("../Home/Home")); //lazy loding is hapning takes callback as a refrence
const Aboutus = lazy(() => import("../AboutUs/Aboutus"));  
const LocalStrorageExample = lazy(() =>
  import("../Pages/LocalStrorageExample")
);
const SessionStorageExample=lazy(()=>import("../Pages/SessionStrorageExample"))

 const Ses=lazy(()=>import("../Pages/SessionStororageExAdd"))

export const Menu = () => {
  const linkData = [
    {
      href: "/home",
      content: "Home",
    },
    {
      href: "/about",
      content: "About",
    },
    {
      href: "/localStorage",
      content: "LocalStorage",
    },
    {
      href: "/sessionStorage",
      content: "SessionStorage",
    },
    {
      href: "/withoutRedux",
      content: "WithoutRedux",
    },
    {
      href: "/SessionStee",
      content: "SessionStee",
    },
    {
      href: "/Responsive",
      content: "Responsive",
    },
    {
      href: "/forwardRef",
      content: "Forward Refccccc",
    },
    {
      href: "/withoutRedux2",
      content: "WithoutRedux2",
    },
    {

      href:'/withRedux',
      content:'Redux'
    },
   
    
  ];
  const rouyterData = [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element:(
        <AboutUs name="pune"><h1>Kolkata</h1></AboutUs>
      )
      
    },
    {
      path: "/localStorage",
      element: <LocalStrorageExample />,
    },
    {
      path:"/sessionStorage",
      element:<SessionStorageExample/>
    },
    {
      path:"/SessionStee",
      element:<Ses/>
    },
      
  
    {
      path: "/withoutRedux",
      element: <WithoutRedux />,
    },
    {
      path: "/Responsive",
      element: <ResponisivePage/>,
    },
    {
      path:  "/forwardRef",
      element: <ForwardRef1/>,
    },
    {
      path: "/withoutRedux",
      element: <WithoutRedux />,
    },
    {
      path: "/withoutRedux2",
      element: <WithoutRedux2 />,
    },
     {
      path:"/withRedux",
      // element:<CounterWithRedux/>
      element:<ParentRedux/>
     },
  ];
  return (
    <main>
      <BrowserRouter>
        <div id="menu-items">
          {linkData?.map(( locObj,i) => {
            const { href, content } = locObj;
            return (
              <Link key={i} to={href}>
                {content}
              </Link>
            );
          })}
          {/* <Link to="/home">Home</Link>  
          <Link to="/about">About</Link>
          <Link to="/localStorage">LocalStorage</Link> */}
        </div>
        <Suspense fallback="...loding">
       <Routes>
       {rouyterData.map((routObj,i)=>{
            
            return(
          <Route element={routObj.element} path={routObj.path}
          key={i}/>
              )
          })

          }
       </Routes>
          {/* <Routes> */}
            {/* <Route path="/home" element={<Home />} />
            {/* you take h1 or anything only do {then write it } but wan to use XML */}
            {/* <Route path="/about" element={<Aboutus />} />
            <Route path="/" element={<EntryPage />} /> */} 
            {/* <Route path ="*" element="404 Error is Dynamic wiith help of roiuting "/> */}
            {/* <Route path="*" element={<Home/>}/> */}
            {/* <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/localStorage" element={<LocalStrorageExample />} />
            <Route path="/WithoutRedux" element={<WithoutRedux />} />
          </Routes> */}
        </Suspense>
      </BrowserRouter>
    </main>
  );
};
