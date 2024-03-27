import React, { useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import { saveAs } from "file-saver";
import "./BackgroundGenerator.css";
import WaveBackground from "../WaveComponent/WaveComponent";

const BackgroundGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [initialColor, setInitialColor] = useState("#ffffff");
  const [waveHeight, setWaveHeight] = useState(100);
  const [waveCount, setWaveCount] = useState(5); // Número predeterminado de ondas

  const handleExportAsPNG = () => {
    // Función para exportar como PNG
  };

  const handleExportAsSVG = () => {
    // Función para exportar como SVG
  };

  const handleColorWave = (e) => {
    setInitialColor(e);
  };

  const handleWaveHeightChange = (e) => {
    setWaveHeight(parseInt(e.target.value));
  };

  const handleWaveCountChange = (e) => {
    setWaveCount(parseInt(e.target.value));
  };

  return (
    <>
      <div className="w-full sm:max-w-7xl min-h-screen sm:min-h-[580px] p-2 sm:mt-36 flex flex-col-reverse justify-start items-start sm:gap-3 sm:flex-row sm:rounded-lg">
        <div className={`contenedor_padre_preview w-full h-full sm:w-4/6 sm:h-[580px]  bg-white sm:rounded-lg`}>
          <div className="background-container contenedor_preview sm:mt-8">
            <WaveBackground waveHeight={waveHeight} waveCount={waveCount} />
          </div>
        </div>
        <div className={`contenedor_padre_taller w-full sm:w-2/6 h-[580px] mt-24 sm:mt-0 p-2 sm:p-4 bg-white sm:rounded-lg`}>
          <div className="w-full h-[80%] flex justify-start items-start">
            <div className="contenedor_manipulacion">
              <div className="w-full flex flex-col">
                <label htmlFor="">Color:</label>
                <input type="color" value={initialColor} onChange={(e) => handleColorWave(e.target.value)} />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Altura de las ondas:</label>
                <input type="range" min="50" max="200" value={waveHeight} onChange={handleWaveHeightChange} />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Número de ondas:</label>
                <input type="range" min="1" max="10" value={waveCount} onChange={handleWaveCountChange} />
              </div>
            </div>
          </div>
          <div className="w-full h-[20%] flex flex-col justify-center items-start border-2 rounded-lg ">
            <span className="w-full text-center text-red-400 font-bold">Exportar</span>
            <div className="w-full  flex justify-center items-center sm:p-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={handleExportAsPNG}>
                PNG
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={handleExportAsSVG}>
                SVG
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundGenerator;
