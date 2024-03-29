import React from "react";

const WaveComponent = ({ initialColor, waveHeight, waveCount }) => {
  const viewBoxHeight = waveHeight * waveCount;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 100 ${viewBoxHeight}`}
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, left: 0, zIndex: -1 }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={initialColor} />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor={initialColor} />
        </linearGradient>
      </defs>
      <path
        d={`M 0 ${waveHeight} Q 25 ${waveHeight * 1.5}, 50 ${waveHeight} T 100 ${waveHeight} V ${viewBoxHeight} H 0 Z`}
        fill="url(#waveGradient)"
      />
    </svg>
  );
};

export default WaveComponent;
