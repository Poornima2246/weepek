import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Service from "./component/service";
import LandingPage2 from "./component/Landingpage2";
import Features from "./component/Features";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import gsap from "gsap";
import Faq from "./component/Faq";
import Servicenewpage from "./component/servicenewpage";
import ScrollToTop from "./component/ScrollToTop";
import WhatsAppButton from "./component/WhatsAppButton";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Account from './component/Account'
import ForgotPassword from "./component/ForgetPassword";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => (
  <main>
    <section id="home" className="scroll-mt-20 z-0">
      <LandingPage2 />
    </section>
    {/*<section id="Faq" className="scroll-mt-20">*/}
    {/*    <Service />*/}
    {/*  </section>*/}
    <section id="project" className="scroll-mt-20 z-20">
      <Project />
    </section>
    <section id="about" className="scroll-mt-20">
      <Servicenewpage />
    </section>
    <section id="Faq" className="scroll-mt-20">
      <Faq />
    </section>
  </main>
);

function App() {
  return (
    <Router>
        
      <ScrollToTop />
      <div className="relative bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/weepek" element={<Home />} />
          <Route path="/weepek/Contact" element={<Contact />} />
          <Route path="/weepek/About" element={<Features />} />
          <Route path="/weepek/Signup" element={<Signup />} />
          <Route path="/weepek/Login" element={<Login />} />
           <Route path="/weepek/Account" element={<Account />} />
          <Route path="/weepek/ForgetPassword" element={<ForgotPassword />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
     
    </Router>
  );
}

export default App;


 

// import React, { useLayoutEffect, useRef } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Service from "./component/service";
// import LandingPage2 from "./component/Landingpage2";
// import Features from "./component/Features";
// import Project from "./component/Project";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";
// import { gsap } from "gsap";
// import Faq from "./component/Faq";
// import Servicenewpage from "./component/servicenewpage";
// import ScrollToTop from "./component/ScrollToTop";
// import WhatsAppButton from "./component/WhatsAppButton";
// import Signup from "./component/Signup";
// import Login from "./component/Login";
// import Account from './component/Account';
// import ForgotPassword from "./component/ForgetPassword";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const Home = () => (
//   <main>
//     <section id="home" className="scroll-mt-20 z-0">
//       <LandingPage2 />
//     </section>
//     <section id="project" className="scroll-mt-20 z-20">
//       <Project />
//     </section>
//     <section id="about" className="scroll-mt-20">
//       <Servicenewpage />
//     </section>
//     <section id="faq" className="scroll-mt-20">
//       <Faq />
//     </section>
//   </main>
// );

// function App() {
//   const smoother = useRef();

//   useLayoutEffect(() => {
//     // Initialize ScrollSmoother
//     smoother.current = ScrollSmoother.create({
//       smooth: 1.5, // seconds it takes to "catch up" to native scroll position
//       effects: true, // looks for data-speed and data-lag attributes on elements
//       smoothTouch: 0.1, // shorter smoothing time for touch devices
//       normalizeScroll: true, // prevents address bar from showing/hiding on mobile
//       ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resize
//     });

//     // Add scroll effects to elements
//     gsap.utils.toArray("[data-speed]").forEach(element => {
//       const speed = parseFloat(element.getAttribute("data-speed"));
//       smoother.current.effects(element, { speed });
//     });

//     return () => {
//       if (smoother.current) {
//         smoother.current.kill();
//       }
//     };
//   }, []);

//   return (
//     <Router>
      
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <ScrollToTop />
//           <div className="relative bg-black min-h-screen">
//             <Navbar />
//             <Routes>
//               <Route path="/weepek" element={<Home />} />
//               <Route path="/weepek/Contact" element={<Contact />} />
//               <Route path="/weepek/About" element={<Features />} />
//               <Route path="/weepek/Signup" element={<Signup />} />
//               <Route path="/weepek/Login" element={<Login />} />
//               <Route path="/weepek/Account" element={<Account />} />
//               <Route path="/weepek/ForgetPassword" element={<ForgotPassword />} />
//             </Routes>
//             <Footer />
//             <WhatsAppButton />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;