import React, { useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import { saveAs } from "file-saver";
import WaveComponent from "../WaveComponent/WaveComponent";
import iconoSvG from "../../assets/imgs/wave_1.png";
import SpainFlag from "../../assets/imgs/bandera_sp.png";
import UKFlag from "../../assets/imgs/bandera_uk.png";
import translations from "../../translation.json";

const BackgroundGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [initialColor, setInitialColor] = useState("#4562f2");
  const [waveHeight, setWaveHeight] = useState(100);
  const [waveCount, setWaveCount] = useState(5);
  const [renderWave, setRenderWave] = useState("vertical");
  const [language, setLanguage] = useState("en");

  // Obtenemos las traducciones según el idioma seleccionado
  const translation = translations[language];

  const [svgCode, setSvgCode] = useState("");

  const handleExportAsSVG = () => {
    const svgData = new XMLSerializer().serializeToString(
      document.getElementById("svg-background")
    );
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    saveAs(blob, "background.svg");
  };

  const handleExportAsCode = () => {
    const svgData = new XMLSerializer().serializeToString(
      document.getElementById("svg-background")
    );
    setSvgCode(svgData);
  };

  const handleExportAsPNG = () => {
    saveSvgAsPng(document.getElementById("svg-background"), "background.png");
  };

  const handleBackground = (color) => {
    setBackgroundColor(color);
  };

  const handleColorWave = (color) => {
    setInitialColor(color);
  };

  const handleWaveHeightChange = (height) => {
    setWaveHeight(height);
  };

  const handleWaveCountChange = (count) => {
    setWaveCount(count);
  };

  const handleRenderWave = (e) => {
    setRenderWave(e);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#eee] flex justify-center items-center md:items-center">
        <div className="w-full lg:max-w-7xl min-h-screen md:min-h-[680px] lg:p-0 md:p-5 lg:mt-0 flex flex-col justify-start items-start md:gap-3 md:flex-row rounded-lg p-1">
          <div
            className={`contenedor_padre_preview w-full h-[180px] mt-[80px] md:w-4/6 md:h-[680px] bg-white rounded-lg`}
          >
            <div className="w-full h-full md:h-3/6 flex justify-center">
              <div className="w-full h-full md:h-[50%] flex flex-col justify-start items-center mt-8">
                <h1 className=" text-[25px] md:text-[50px] font-bold text-[#4562f2]">
                  BACKGROUND-WAVE
                </h1>
                <div
                  className="w-[150px] h-[150px] bg-center bg-contain bg-no-repeat "
                  style={{ backgroundImage: `url(${iconoSvG})` }}
                ></div>
              </div>
            </div>
            <div
              className="w-full h-full md:h-3/6 background-container contenedor_preview md:rounded-b-lg relative border-t border-[#c9c9c9]"
              style={{ backgroundColor: `${backgroundColor}` }}
            >
              <WaveComponent
                initialColor={initialColor}
                waveHeight={waveHeight}
                waveCount={waveCount}
                renderWave={renderWave}
              />
            </div>
          </div>

          <div
            className={`contenedor_padre_taller w-full md:w-2/6 h-[680px] mt-[200px] md:mt-[80px] p-2 md:p-4 bg-white md:rounded-lg`}
          >
            <div className="w-full flex justify-end">
              <img
                src={language === "es" ? UKFlag : SpainFlag}
                alt={
                  language === "es"
                    ? translation.spainFlagAlt
                    : translation.ukFlagAlt
                }
                className="h-8 w-8 cursor-pointer"
                onClick={() =>
                  handleLanguageChange(language === "es" ? "en" : "es")
                }
              />
            </div>

            <div className="w-full h-[80%] flex justify-start items-start">
              <div className="contenedor_manipulacion w-full">
                <div className="w-full flex flex-row justify-center items-center gap-8">
                  <div className="w-[3/6] flex flex-col justify-center items-center">
                    <label htmlFor="">
                      <b>{translation.bg}</b>
                    </label>
                    <input
                      className="w-[50px] h-[50px]"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => handleBackground(e.target.value)}
                    />
                  </div>
                  <div className="w-[3/6] flex flex-col justify-center items-center">
                    <label htmlFor="">
                      <b>{translation.wave}</b>
                    </label>
                    <input
                      className="w-[50px] h-[50px]"
                      type="color"
                      value={initialColor}
                      onChange={(e) => handleColorWave(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col mt-6">
                  <label htmlFor="">
                    <b>{translation.direction}</b>
                  </label>
                  <select
                    className="border rounded bg-white py-2 px-4 text-gray-800 border-indigo-200 mt-3"
                    id="select_render_ondas"
                    onChange={(e) => handleRenderWave(e.target.value)}
                  >
                    <option value="vertical">Vertical</option>
                    <option value="horizontal">Horizontal</option>
                  </select>
                </div>
                {/*<div className="w-full flex flex-col mt-3">
                <label htmlFor="">
                  <b>{translation.waveHight}</b>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={waveHeight}
                  onChange={(e) =>
                    handleWaveHeightChange(parseInt(e.target.value))
                  }
                />
              </div>*/}
                <div className="w-full flex flex-col mt-3">
                  <label htmlFor="">
                    <b>{translation.waveCountNumber}</b>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={waveCount}
                    onChange={(e) =>
                      handleWaveCountChange(parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="w-full mt-5 p-4 bg-gray-100">
                  <label className="block mb-2 font-semibold">
                    {translation.SvgGenerated} :
                  </label>
                  <textarea
                    className="w-full h-28 p-2 border border-gray-300 rounded"
                    value={svgCode}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[15%] flex flex-col justify-center items-start border-2 rounded-lg ">
              <span className="w-full text-center text-red-400 font-bold">
                <b>{translation.export}</b>
              </span>
              <div className="w-full  flex justify-center items-center md:p-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                  onClick={handleExportAsPNG}
                >
                  <b>PNG</b>
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-4"
                  onClick={handleExportAsSVG}
                >
                  <b>SVG</b>
                </button>
                <button
                  className="bg-[#c50abe] text-white px-4 py-2 rounded mr-4"
                  onClick={handleExportAsCode}
                >
                  <b>Code</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundGenerator;
