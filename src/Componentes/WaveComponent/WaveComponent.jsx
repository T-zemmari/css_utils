import React from "react";

const WaveComponent = ({
  waveCount,
  waveHeight,
  initialColor,
}) => {
  const wavePaths = [];

  for (let i = 0; i < waveCount; i++) {
    const startY = (i * (100 / waveCount)) + (waveHeight / 2);
    const endY = (i * (100 / waveCount)) - (waveHeight / 2);
    const controlPointY = (i * (100 / waveCount));

    const path = `M0 ${startY} Q 25 ${controlPointY} 50 ${endY} Q 75 ${controlPointY} 100 ${startY} V 100 H 0 Z`;
    wavePaths.push(path);
  }

  return (
    <div className="background-generator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {wavePaths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill={initialColor}
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveComponent;
