import { useEffect, useRef } from "react";

const WaveBackground = ({ waveHeight, waveCount }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const waveWidth = 0.02;
    const waveSpeed = 0.1;

    const drawWaves = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < waveCount; i++) {
        const angle = time * waveSpeed + (Math.PI * 2 * i) / waveCount;
        const yOffset = Math.sin(angle) * waveHeight;
        const xOffset = Math.cos(angle) * waveHeight;
        const startY = centerY + yOffset;
        const endY = centerY + xOffset;
        const waveColor = `rgba(0, 0, 255, ${0.2 + 0.2 * i})`;

        ctx.beginPath();
        ctx.moveTo(0, startY);

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            startY +
            Math.sin((x / canvas.width) * Math.PI - angle) *
              waveWidth *
              waveHeight;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, endY);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = waveColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawWaves);
    };

    drawWaves(0);

    return () => cancelAnimationFrame(animationFrameId);
  }, [waveHeight, waveCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default WaveBackground;
