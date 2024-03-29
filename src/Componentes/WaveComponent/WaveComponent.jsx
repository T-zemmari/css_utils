import React from "react";

const WaveComponent = ({ initialColor, waveHeight, waveCount }) => {
  const wavePoints = []; 

  // Generarmos los puntos para la onda
  for (let i = 0; i <= 100; i++) {
    const x = i;
    const y = Math.sin((i / 100) * waveCount * Math.PI * 2) * waveHeight + 50; // Función sin para generar la onda
    wavePoints.push(`${x},${y}`);
  }

  // Creamos el atributo 'points' para el elemento 'polyline' del SVGadd
  const points = wavePoints.join(" ");

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 100 ${waveHeight * 2}`} 
      preserveAspectRatio="none" 
    >
      {Array.from({ length: Math.ceil(100 / waveCount) }).map((_, index) => (
        <polyline
          key={index}
          points={points}
          fill="none"
          stroke={initialColor}
          strokeWidth="1"
          transform={`translate(${index * waveCount}, 0)`} 
        />
      ))}
    </svg>
  );
};

export default WaveComponent;
