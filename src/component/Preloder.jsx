import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/lap.jpg";

export default function Preloader() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const barRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const logoElement = logoRef.current;
    const progressElement = progressRef.current;
    const barElement = barRef.current;

    if (!container) return;

    const counter = { value: 0 };
    let loaded = false;
    let minimumTimePassed = false;
    let finished = false;

    // Initial logo reveal
    gsap.fromTo(
      logoElement,
      {
        opacity: 0,
        y: 25,
        scale: 0.94
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out"
      }
    );

    // Progress animation
    const loadingTween = gsap.to(counter, {
      value: 90,
      duration: 2,
      ease: "power2.out",
      onUpdate: updateProgress
    });

    function updateProgress() {
      const value = Math.floor(counter.value);

      setProgress(value);

      gsap.set(barElement, {
        scaleX: counter.value / 100
      });
    }

    function finishLoading() {
      if (!loaded || !minimumTimePassed || finished) return;

      finished = true;
      loadingTween.kill();

      gsap.to(counter, {
        value: 100,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: updateProgress,
        onComplete: () => {
          setProgress(100);

          const exitTimeline = gsap.timeline({
            onComplete: () => {
              setVisible(false);
            }
          });

          exitTimeline
            .to(logoElement, {
              opacity: 0,
              y: -15,
              duration: 0.3,
              ease: "power2.in"
            })
            .to(
              container,
              {
                yPercent: -100,
                duration: 0.85,
                ease: "power4.inOut"
              },
              "-=0.05"
            );
        }
      });
    }

    // Browser loading completion
    const handleLoad = () => {
      loaded = true;
      finishLoading();
    };

    if (document.readyState === "complete") {
      loaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Minimum display duration
    const minimumTimer = gsap.delayedCall(1.4, () => {
      minimumTimePassed = true;
      finishLoading();
    });

    finishLoading();

    return () => {
      window.removeEventListener("load", handleLoad);
      loadingTween.kill();
      minimumTimer.kill();
      gsap.killTweensOf(counter);
      gsap.killTweensOf(logoElement);
      gsap.killTweensOf(container);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        background: "#0b0613",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: "min(320px, 80vw)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* WEEPEK LOGO */}
        {/* <img
          ref={logoRef}
          src={logo}
          alt="WEEPEK"
          style={{
            width: "190px",
            maxWidth: "65vw",
            height: "auto",
            objectFit: "contain",
            marginBottom: "55px",
          }}
        /> */}

        {/* ANIMATED WEEPEK WORDMARK */}
        <div
          ref={logoRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "55px",
            overflow: "hidden"
          }}
        >
          <span
            style={{
              fontFamily: "bolteSemiBold, sans-serif",
              fontSize: "clamp(48px, 8vw, 76px)",
              fontWeight: 800,
              letterSpacing: "-3px",
              color: "#ffffff",
              display: "inline-block"
            }}
          >
            WEEPEK
          </span>

          <span
            style={{
              fontSize: "65px",
              fontWeight: 800,
              color: "#ed710c",
              marginLeft: "2px",
              display: "inline-block"
            }}
          >
            .
          </span>
        </div>

        {/* PROGRESS SECTION */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#ffffff"
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                color: "#a59baF",
                fontFamily: "NeueRegular, sans-serif"
              }}
            >
              LOADING EXPERIENCE
            </span>

            <span
              ref={progressRef}
              style={{
                fontSize: "13px",
                fontFamily: "NeueRegular, sans-serif",
                fontVariantNumeric: "tabular-nums",
                color: "#ed710c"
              }}
            >
              {progress}%
            </span>
          </div>

          {/* ORANGE PROGRESS LINE */}
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,0.12)",
              overflow: "hidden"
            }}
          >
            <div
              ref={barRef}
              style={{
                width: "100%",
                height: "100%",
                background: "#ed710c",
                transform: "scaleX(0)",
                transformOrigin: "left center",
                boxShadow: "0 0 12px rgba(237,113,12,0.7)"
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BRAND LABEL */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "0",
          width: "100%",
          textAlign: "center",
          color: "rgba(255,255,255,0.35)",
          fontSize: "9px",
          letterSpacing: "3px",
          fontFamily: "NeueRegular, sans-serif"
        }}
      >
        INDEPENDENT CREATIVE STUDIO · CHENNAI, INDIA
      </div>
    </div>
  );
}
