import React, { useEffect } from "react";

const WaveComponent = ({ initialColor, waveHeight, waveCount }) => {
  const viewBoxWidth = 100 * waveCount; 

  useEffect(() => {
    console.log("initialColor", initialColor);
    console.log("waveHeight", waveHeight);
    console.log("waveCount", waveCount);
  }, [initialColor,initialColor,waveCount]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBoxWidth} ${waveHeight * waveCount}`}
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, left: 0, zIndex: -1 }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={initialColor} />
          {/* <stop offset="50%" stopColor="transparent" /> */}
          <stop offset="100%" stopColor={initialColor} />
        </linearGradient>
      </defs>
      {/* Dibujar múltiples olas */}
      {Array.from({ length: waveCount }).map((_, index) => (
        <path
          key={index}
          d={`M ${index * 100} ${waveHeight} Q ${index * 100 + 25} ${
            waveHeight * 1.5
          }, ${index * 100 + 50} ${waveHeight} T ${
            index * 100 + 100
          } ${waveHeight} V ${waveHeight * 2} H ${index * 100} Z`}
          fill="url(#waveGradient)"
        />
      ))}
    </svg>
  );
};

export default WaveComponent;
