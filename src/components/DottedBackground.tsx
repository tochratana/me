"use client";
import React, { useEffect, useRef, useState } from "react";

interface DottedBackgroundProps {
  children: React.ReactNode;
  dotSize?: number;
  dotSpacing?: number;
  animated?: boolean;
  animationSpeed?: number;
  backgroundColor?: string;
  dotColor?: string;
}

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  children,
  dotSize = 1,
  dotSpacing = 30,
  animated = true,
  animationSpeed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  // Listen for theme changes
  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Theme-aware colors
  const backgroundColor = isDark ? "#000000" : "#ffffff";
  const dotColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";

  useEffect(() => {
    if (!animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;
    let offset = 0;

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();

    const drawDots = () => {
      if (!isMounted || !canvas || !ctx) return;

      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cols = Math.ceil(canvas.width / dotSpacing) + 2;
        const rows = Math.ceil(canvas.height / dotSpacing) + 2;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * dotSpacing - (offset % dotSpacing);
            const y = j * dotSpacing - (offset % dotSpacing);

            const wave = Math.sin((i + j + offset * 0.02) * 0.1) * 2;

            const baseOpacity = 0.15;
            const opacityVariation =
              Math.sin((i * 0.5 + j * 0.3 + offset * 0.03) * 0.2) * 0.1;
            const opacity = Math.max(
              0,
              Math.min(0.3, baseOpacity + opacityVariation)
            );

            // Use theme-aware color
            const r = isDark ? 255 : 0;
            const g = isDark ? 255 : 0;
            const b = isDark ? 255 : 0;

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y + wave, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        offset += animationSpeed;

        if (isMounted) {
          animationFrameId.current = requestAnimationFrame(drawDots);
        }
      } catch (error) {
        console.error("Error drawing dots:", error);
        isMounted = false;
      }
    };

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    drawDots();

    return () => {
      isMounted = false;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, [animated, animationSpeed, dotSize, dotSpacing, isDark]);

  const StaticBackground = () => {
    try {
      return (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
            backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      );
    } catch (error) {
      console.error("Error rendering static background:", error);
      return null;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: backgroundColor,
        overflow: "hidden",
        transition: "background-color 0.3s ease",
      }}
    >
      {animated ? (
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            display: "block",
          }}
        />
      ) : (
        <StaticBackground />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default DottedBackground;

// Usage example:
// <DottedBackground
//   dotSize={1.5}
//   dotSpacing={30}
//   animated={true}
//   animationSpeed={0.05}
// >
//   {children}
// </DottedBackground>
