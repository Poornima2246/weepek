
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import Lenis from "lenis";

import Navbar from "./component/Navbar";
import Showcase from "./component/3dshowcase";
import Works from "./component/Works";
import Workpage from "./component/Workpage.jsx";
import Process from "./component/Dummu";
import About from "./component/About";
import Why from "./component/Whyus";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import Contact from './component/Contact'
import ShaderBackground from "./component/ShaderBackground";
import Worksdetail from './component/Worksdetails.jsx';
import ServiceDetails from "./component/Servicedetailpage";

 


import "./App.css";
// import "./PageTransition.css";
import "lenis/dist/lenis.css";

 

const BRAND_ORANGE = "#ed710c";
const BRAND_DARK = "#0b0613";

const POINTS = 9; // control points per wave edge
const X_MIN = -14; // extend past the viewBox so side edges never show
const X_MAX = 114;

/* Transition timings (seconds). Tweak these to speed up / slow down. */
const T = {
  enter: 0.35, // line rises into the viewport
  expand: 0.55, // line thickens into the full-screen wave
  overlap: 0.2, // expand starts this early, overlapping enter
  settle: 0.04, // wait after mounting new page before reveal
  lift: 0.25, // wave lifts away
  darkDelay: 0.1, // dark trailing layer delay
  recover: 0.3, // pull-back when navigating mid-reveal
};

const round2 = (v) => Math.round(v * 100) / 100;

const sameView = (a, b) =>
  !!a && !!b && a.pathname === b.pathname && a.search === b.search;

function createSeeds() {
  const arr = () =>
    Array.from({ length: POINTS }, () => Math.random() * 2 - 1);
  return { spine: arr(), top: arr(), bottom: arr(), lift: arr() };
}

/* Catmull-Rom -> cubic bezier: gives soft, blunt, liquid curves */
function smoothCurve(pts) {
  let d = "";
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d +=
      `C${round2(p1.x + (p2.x - p0.x) / 6)} ${round2(p1.y + (p2.y - p0.y) / 6)} ` +
      `${round2(p2.x - (p3.x - p1.x) / 6)} ${round2(p2.y - (p3.y - p1.y) / 6)} ` +
      `${round2(p2.x)} ${round2(p2.y)}`;
  }
  return d;
}

/*
  state = { enter, expand, lift }  (each 0 -> 1)
    enter  : thin curved line rises into the viewport (bottom -> centre)
    expand : the line thickens vertically into a liquid wave covering all
    lift   : the lower edge sweeps upward, revealing the new page
*/
function buildPath(state, seeds, time) {
  const c = 122 + (50 - 122) * state.enter; // line centre (viewBox units)
  const e = state.expand;
  const lift = state.lift;
  const env = Math.sin(Math.PI * e); // irregularity peaks mid-expansion
  const liftEnv = Math.sin(Math.PI * lift);
  const spineAmp = 7 * (1 - 0.55 * e);

  const top = [];
  const bot = [];

  for (let i = 0; i < POINTS; i++) {
    const x = X_MIN + ((X_MAX - X_MIN) * i) / (POINTS - 1);

    // shared "spine" keeps the thin line a clean, single curve
    const spine =
      seeds.spine[i] * spineAmp +
      Math.sin(time * 1.5 + i * 1.25) * 1.1 * (1 - 0.5 * e);

    const topY =
      c + spine - (0.7 + (c + 26 - 0.7) * e) + seeds.top[i] * 9 * env;

    const botFull =
      c + spine + 0.7 + (125 - c - 0.7) * e + seeds.bottom[i] * 9 * env;

    const botY =
      botFull * (1 - lift) +
      (-32 + spine) * lift +
      seeds.lift[i] * 10 * liftEnv;

    top.push({ x, y: topY });
    bot.push({ x, y: botY });
  }

  const botRev = bot.slice().reverse();

  return (
    `M${round2(top[0].x)} ${round2(top[0].y)}` +
    smoothCurve(top) +
    `L${round2(botRev[0].x)} ${round2(botRev[0].y)}` +
    smoothCurve(botRev) +
    "Z"
  );
}

/*
  Framework-agnostic engine. Owns every GSAP timeline, ticker callback,
  rAF and delayed call, and exposes destroy() for full cleanup.

  phases: idle -> covering -> committing -> revealing -> idle
*/
function createTransitionEngine({
  overlay,
  orangePath,
  darkPath,
  getDisplayed,
  commit, // (location, sync) => void
}) {
  const o = { enter: 0, expand: 0, lift: 0 }; // orange wave
  const d = { enter: 1, expand: 1, lift: 0 }; // dark trailing layer

  let seeds = createSeeds();
  let phase = "idle";
  let pending = null;
  let tl = null;
  let settleCall = null;
  let raf1 = 0;
  let raf2 = 0;
  let tickerOn = false;
  let reduced = false;
  let destroyed = false;

  const render = () => {
    const t = gsap.ticker.time;
    orangePath.setAttribute("d", buildPath(o, seeds, t));
    darkPath.setAttribute("d", buildPath(d, seeds, t));
  };

  const show = () => {
    overlay.classList.add("is-active");
    if (!tickerOn) {
      gsap.ticker.add(render);
      tickerOn = true;
    }
  };

  const hide = () => {
    overlay.classList.remove("is-active");
    if (tickerOn) {
      gsap.ticker.remove(render);
      tickerOn = false;
    }
  };

  const killPending = () => {
    if (tl) {
      tl.kill();
      tl = null;
    }
    if (settleCall) {
      settleCall.kill();
      settleCall = null;
    }
    if (raf1) cancelAnimationFrame(raf1);
    if (raf2) cancelAnimationFrame(raf2);
    raf1 = 0;
    raf2 = 0;
  };

  const cancelAll = () => {
    killPending();
    phase = "idle";
    hide();
  };

  /* 1 + 2: line enters, then expands into a full-screen liquid wave */
  const startCover = () => {
    phase = "covering";
    seeds = createSeeds();
    o.enter = 0;
    o.expand = 0;
    o.lift = 0;
    d.enter = 1;
    d.expand = 1;
    d.lift = 0;
    darkPath.setAttribute("opacity", "0");
    render();
    show();

    tl = gsap
      .timeline({ onComplete: commitPending })
      .to(o, { enter: 1, duration: T.enter, ease: "power3.out" })
      .to(
        o,
        { expand: 1, duration: T.expand, ease: "power2.inOut" },
        `-=${T.overlap}`
      );
  };

  /* Navigation arrived while the wave was already lifting: pull it back */
  const recover = () => {
    killPending();
    phase = "covering";
    tl = gsap
      .timeline({ onComplete: commitPending })
      .to(o, { lift: 0, duration: T.recover, ease: "power2.inOut" }, 0)
      .to(d, { lift: 0, duration: T.recover, ease: "power2.inOut" }, 0);
  };

  /* 3: screen fully covered -> render the destination route (synchronously) */
  function commitPending() {
    if (destroyed) return;
    tl = null;
    phase = "committing";

    const target = pending;
    const prev = getDisplayed();
    commit(target, true);

    if (prev && target.pathname !== prev.pathname) {
      window.scrollTo(0, 0);
    }

    // let the new page mount & paint under the cover before revealing
    raf1 = requestAnimationFrame(() => {
      raf1 = 0;
      raf2 = requestAnimationFrame(() => {
        raf2 = 0;
        settleCall = gsap.delayedCall(T.settle, settle);
      });
    });
  }

  function settle() {
    if (destroyed) return;
    settleCall = null;
    // another navigation landed while we were committing -> commit again
    if (!sameView(pending, getDisplayed())) {
      commitPending();
      return;
    }
    startReveal();
  }

  /* 4: wave lifts away, revealing the new page */
  function startReveal() {
    phase = "revealing";
    o.lift = 0;
    d.lift = 0;
    darkPath.setAttribute("opacity", "1");

    tl = gsap
      .timeline({ onComplete: finish })
      .to(o, { lift: 1, duration: T.lift, ease: "power2.inOut" }, 0)
      .to(d, { lift: 1, duration: T.lift, ease: "power2.inOut" }, T.darkDelay);
  }

  function finish() {
    if (destroyed) return;
    tl = null;
    phase = "idle";
    hide();
  }

  return {
    request(location) {
      if (destroyed) return;
      pending = location;
      const displayed = getDisplayed();

      if (reduced) {
        if (location.key !== displayed.key) commit(location, false);
        return;
      }

      if (sameView(location, displayed)) {
        // hash-only / same-page navigation: no wipe, just sync state
        if (phase === "idle" && location.key !== displayed.key) {
          commit(location, false);
        }
        return;
      }

      if (phase === "idle") startCover();
      else if (phase === "revealing") recover();
      // covering / committing: `pending` is updated and picked up on commit
    },

    setReduced(value) {
      reduced = value;
      if (value && phase !== "idle") {
        cancelAll();
        if (pending && pending.key !== getDisplayed().key) {
          commit(pending, false);
        }
      }
    },

    destroy() {
      destroyed = true;
      cancelAll();
    },
  };
}

/* ==========================================
   ROOT LAYOUT (shared shell)
========================================== */

function RootLayout() {
  const { pathname } = useLocation();
   useEffect(() => {
    const lenis = new Lenis({
      
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-container">
      <ShaderBackground />

      {/* Film grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Fixed navbar (above everything) */}
      <Navbar />
      
      {/* Main content */}
      <div className="app-content">
        <Outlet />
        
      </div>
       
    </div>
  );
}

/* ==========================================
   HOME PAGE
========================================== */

function HomePage() {
  return (
    <>
      <Showcase />
      <Works />
      <Process />
      {/* <Why /> */}
      {/* <About /> */}
      <Faq />
      <Footer />
    </>
  );
}

/* ==========================================
   WORK PAGE
========================================== */

function WorkPage() {
  return (
    <>
      <section
        id="work"
        style={{ minHeight: "100vh", paddingTop: "120px" }}
      >
        <h1 style={{ color: "white", padding: "2rem" }}>Work</h1>
        {/* Full portfolio grid goes here */}
      </section>
      <Works />
      <Footer />
    </>
  );
}

/* ==========================================
   APP — ROUTES + TRANSITION OVERLAY
========================================== */

function App() {
  // Real router location: updates instantly for Link, navigate(), Back/Forward
  const location = useLocation();

  // Location actually rendered. Swapped only after the wave covers the screen.
  const [displayLocation, setDisplayLocation] = useState(location);
  const displayedRef = useRef(location);

  const engineRef = useRef(null);
  const overlayRef = useRef(null);
  const orangeRef = useRef(null);
  const darkRef = useRef(null);

  // Engine setup / teardown
  useEffect(() => {
    const overlay = overlayRef.current;

    const engine = createTransitionEngine({
      overlay,
      orangePath: orangeRef.current,
      darkPath: darkRef.current,
      getDisplayed: () => displayedRef.current,
      commit: (loc, sync) => {
        displayedRef.current = loc;
        if (sync) {
          // called from GSAP/rAF (outside React lifecycles) -> render now,
          // so the new page is mounted before the wave starts lifting
          flushSync(() => setDisplayLocation(loc));
        } else {
          setDisplayLocation(loc);
        }
      },
    });
    engineRef.current = engine;

    // Block wheel/touch scrolling (and keep Lenis from seeing it)
    // while the overlay is covering the page.
    const blockScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    overlay.addEventListener("wheel", blockScroll, { passive: false });
    overlay.addEventListener("touchmove", blockScroll, { passive: false });

    // prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    engine.setReduced(mq.matches);
    const onMotionChange = (e) => engine.setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onMotionChange);
    else if (mq.addListener) mq.addListener(onMotionChange);

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", onMotionChange);
      } else if (mq.removeListener) {
        mq.removeListener(onMotionChange);
      }
      overlay.removeEventListener("wheel", blockScroll);
      overlay.removeEventListener("touchmove", blockScroll);
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  // React to every router navigation
  // useEffect(() => {
  //   if (engineRef.current) engineRef.current.request(location);
  // }, [location]);


  // React to every router navigation
useEffect(() => {
  if (!engineRef.current) return;

  const displayed = displayedRef.current;

  // Same page (only query string or hash changed) -> no wave, no re-render swap.
  // This is what filter tabs / ?pillar=... clicks produce.
  if (
    displayed &&
    location.pathname === displayed.pathname &&
    location.search !== displayed.search
  ) {
    // silently sync displayed location so Back/Forward still works
    displayedRef.current = location;
    return;
  }

  engineRef.current.request(location);
}, [location]);

  return (
    <>
      <Routes location={displayLocation}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<Workpage />} />
              <Route path="/works/:id" element={<Worksdetail />} />
<Route path="/services" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
           
        </Route>
      </Routes>

      {/* Page transition overlay: sits above navbar + grain, inert when idle */}
      <div ref={overlayRef} className="page-transition" aria-hidden="true">
        <svg
          className="page-transition__svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path ref={darkRef} fill={BRAND_DARK} opacity="0" />
          <path ref={orangeRef} fill={BRAND_ORANGE} />
        </svg>
      </div>
            <Contact/>

    </>
  );
}

export default App;

 