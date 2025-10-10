"use client";
import React, { useEffect, useRef } from "react";

interface DottedBackgroundProps {
  children: React.ReactNode;
  dotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  backgroundColor?: string;
  animated?: boolean;
  animationSpeed?: number;
}

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  children,
  dotColor = "rgba(255, 255, 255, 0.15)",
  dotSize = 1,
  dotSpacing = 30,
  backgroundColor = "#000000",
  animated = true,
  animationSpeed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;
    let offset = 0;

    // Set canvas size function
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initial canvas size
    setCanvasSize();

    // Draw animated dots
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

            // Add subtle wave effect
            const wave = Math.sin((i + j + offset * 0.02) * 0.1) * 2;

            // Vary opacity for depth effect
            const baseOpacity = 0.15;
            const opacityVariation =
              Math.sin((i * 0.5 + j * 0.3 + offset * 0.03) * 0.2) * 0.1;
            const opacity = Math.max(
              0,
              Math.min(0.3, baseOpacity + opacityVariation)
            );

            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
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

    // Resize handler
    const handleResize = () => {
      setCanvasSize();
    };

    // Add event listener
    window.addEventListener("resize", handleResize, { passive: true });

    // Start animation
    drawDots();

    // Cleanup
    return () => {
      isMounted = false;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, [animated, animationSpeed, dotSize, dotSpacing]);

  // Static background component
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
      }}
    >
      {/* Animated canvas for dots */}
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default DottedBackground;
