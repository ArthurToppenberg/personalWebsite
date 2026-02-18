"use client";

import { useEffect, useState } from "react";

const ANIMATION_DURATION_MS = 2000;

const ANIMATION_STYLES = `
  .intro-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    pointer-events: none;
    animation: overlayFade 2s ease forwards;
  }

  .intro-sphere {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    will-change: transform;
    animation: sphereMotion 2s forwards;
  }

  @keyframes sphereMotion {
    0% {
      transform: translateX(-55vw) scale(1);
      opacity: 1;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    45% {
      transform: translateX(0) scale(1);
      opacity: 1;
      animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    }
    100% {
      transform: translateX(0) scale(60);
      opacity: 0;
    }
  }

  @keyframes overlayFade {
    0%, 45% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const IntroAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <>
      <style>{ANIMATION_STYLES}</style>
      <div className="intro-overlay">
        <div className="intro-sphere" />
      </div>
    </>
  );
};
