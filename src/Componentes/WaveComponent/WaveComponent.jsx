import React, { useEffect } from "react";

const WaveComponent = ({ initialColor, waveHeight, waveCount, renderWave }) => {
  const viewBoxWidth = renderWave === "horizontal" ? 100 * waveCount : 100;
  const viewBoxHeight = renderWave === "horizontal" ? waveHeight : waveHeight * waveCount;

  useEffect(() => {
    console.log("initialColor", initialColor);
    console.log("waveHeight", waveHeight);
    console.log("waveCount", waveCount);
    console.log("renderWave", renderWave);
  }, [initialColor, waveHeight, waveCount, renderWave]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
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
      {/* Dibujar las olas */}
      {renderWave === "horizontal" ? (
        Array.from({ length: waveCount }).map((_, index) => (
          <path
            key={index}
            d={`M ${index * 100} ${waveHeight} Q ${index * 100 + 25} ${
              waveHeight * 1.5
            }, ${index * 100 + 50} ${waveHeight} T ${
              index * 100 + 100
            } ${waveHeight} V ${viewBoxHeight} H ${index * 100} Z`}
            fill="url(#waveGradient)"
          />
        ))
      ) : (
        <path
          d={`M 0 ${waveHeight} Q 25 ${waveHeight * 1.5}, 50 ${waveHeight} T 100 ${waveHeight} V ${viewBoxHeight} H 0 Z`}
          fill="url(#waveGradient)"
        />
      )}
    </svg>
  );
};

export default WaveComponent;
