import { useState } from "react";
import SwAlert from "../SwAlert/SwAlert";
import SpainFlag from "../../assets/imgs/bandera_sp.png";
import UKFlag from "../../assets/imgs/bandera_uk.png";
import translations from "../../translation.json";

const BoxShadowGeneretor = () => {
  const initialHOffset = 0;
  const initialVOffset = 4;
  const initialBlurRadius = 10;
  const initialSpreadRadius = 0;
  const initialShadowColor = "#000000";
  const initialBackgroundColor = "#ffffff";
  const [hOffset, setHOffset] = useState(initialHOffset);
  const [vOffset, setVOffset] = useState(initialVOffset);
  const [blurRadius, setBlurRadius] = useState(initialBlurRadius);
  const [spreadRadius, setSpreadRadius] = useState(initialSpreadRadius);
  const [shadowColor, setShadowColor] = useState(initialShadowColor);
  const [backgroundColor, setBackgroundColor] = useState(
    initialBackgroundColor
  );
  const [inset, setInset] = useState(false);
  const [language, setLanguage] = useState("en"); 

  // Obtenemos las traducciones según el idioma seleccionado
  const translation = translations[language];

  const generateBoxShadow = () => {
    const insetValue = inset ? "inset" : "";
    return `${insetValue} ${hOffset}px ${vOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
  };

  const handleCopyClick = () => {
    const cssCode = `box-shadow: ${generateBoxShadow()};\nbackground-color: ${backgroundColor};`;
    navigator.clipboard.writeText(cssCode);
    SwAlert(translation.copyToClipboard);
  };

  const handleReset = () => {
    setHOffset(initialHOffset);
    setVOffset(initialVOffset);
    setBlurRadius(initialBlurRadius);
    setSpreadRadius(initialSpreadRadius);
    setShadowColor(initialShadowColor);
    setBackgroundColor(initialBackgroundColor);
    setInset(false);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
    <div className="w-full min-h-screen bg-[#eee] flex justify-center items-center md:items-center">
      <div className="w-full md:max-w-7xl min-h-screen md:min-h-[764px] p-0 md:p-12 ">
        <div className="w-full p-2 min-h-[300px] md:h-[764px] flex justify-center items-center mt-[70px] sm:mt-[50px]">
          <div className="w-full md:h-[90%] flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div
              className="flex w-full md:w-3/6 h-[300px] md:h-[100%] justify-center items-center bg-white rounded-lg"
              id="contenedor_padre_preview"
            >
              <button
                className="w-40 h-40 bg-white shadow-lg flex justify-center items-center rounded-lg"
                style={{
                  boxShadow: generateBoxShadow(),
                  backgroundColor: backgroundColor,
                }}
                id="contenedor_preview"
              >
                {translation.preview}
              </button>
            </div>
            <div className="w-full md:w-3/6 md:h-[100%] flex flex-col justify-center items-end p-8 bg-white md:rounded-lg">
              <img
                src={language === "es" ? UKFlag : SpainFlag}
                alt={language === "es" ? translation.spainFlagAlt : translation.ukFlagAlt}
                className="h-8 w-8 cursor-pointer"
                onClick={() =>
                  handleLanguageChange(language === "es" ? "en" : "es")
                }
              />
              <div className="w-full mt-4">
                <div className="w-full flex flex-col">
                  <label>{translation.horizontalOffset}</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={hOffset}
                    onChange={(e) => setHOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>{translation.verticalOffset}</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={vOffset}
                    onChange={(e) => setVOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>{translation.blurRadius}</label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>{translation.spreadRadius}</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={spreadRadius}
                    onChange={(e) => setSpreadRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>{translation.shadowColor}</label>
                  <input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>{translation.backgroundColor}</label>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    className={`${
                      inset ? "bg-gray-300" : "bg-gray-100"
                    } text-gray-800 py-1 px-4 rounded`}
                    onClick={() => setInset(false)}
                  >
                    {translation.regular}
                  </button>
                  <button
                    className={`${
                      inset ? "bg-gray-100" : "bg-gray-300"
                    } text-gray-800 py-1 px-4 rounded`}
                    onClick={() => setInset(true)}
                  >
                    {translation.inset}
                  </button>
                  <button
                    className="bg-gray-200 text-gray-800 py-1 px-4 rounded"
                    onClick={handleReset}
                  >
                    {translation.reset}
                  </button>
                </div>
                <div className="w-full mt-4 p-4 bg-gray-100">
                  <label className="block mb-2 font-semibold">
                    {translation.generatedCSS}
                  </label>
                  <textarea
                    className="w-full h-24 p-2 border border-gray-300 rounded"
                    value={`box-shadow: ${generateBoxShadow()};\nbackground-color: ${backgroundColor};`}
                    readOnly
                  />
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleCopyClick}
                >
                  {translation.copyCSS}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BoxShadowGeneretor;
