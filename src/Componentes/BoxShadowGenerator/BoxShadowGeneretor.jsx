import { useState } from "react";
import SwAlert from "../SwAlert/SwAlert";
import SpainFlag from "../../assets/imgs/bandera_sp.png";
import UKFlag from "../../assets/imgs/bandera_uk.png";

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
  const [language, setLanguage] = useState("es"); // Default language: Spanish

  const generateBoxShadow = () => {
    const insetValue = inset ? "inset" : "";
    return `${insetValue} ${hOffset}px ${vOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
  };

  const handleCopyClick = () => {
    const cssCode = `box-shadow: ${generateBoxShadow()};\nbackground-color: ${backgroundColor};`;
    navigator.clipboard.writeText(cssCode);
    SwAlert("CSS copiado al portapapeles!");
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
      <div className="w-full sm:max-w-7xl min-h-[580px] p-12 sm:mt-36 border-2 bg-white">
        <div className="p-4 h-[580px]">
          <div className="h-[90%] flex flex-row justify-between items-center gap-8">
            <div
              className="w-3/6 h-[100%] flex justify-center items-center"
              id="contenedor_padre_preview"
            >
              <div
                className="w-40 h-40 bg-white border border-gray-300 shadow-lg flex justify-center items-center rounded-lg"
                style={{
                  boxShadow: generateBoxShadow(),
                  backgroundColor: backgroundColor,
                }}
                id="contenedor_preview"
              >
                Vista Previa
              </div>
            </div>
            <div className="w-3/6 flex flex-col justify-center items-end">
              <img
                src={language === "es" ? SpainFlag : UKFlag}
                alt={language === "es" ? "Bandera de España" : "UK Flag"}
                className="h-8 w-8 cursor-pointer"
                onClick={() =>
                  handleLanguageChange(language === "es" ? "en" : "es")
                }
              />
              <div className="w-full mt-4">
                <div className="w-full flex flex-col">
                  <label>Desplazamiento Horizontal:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={hOffset}
                    onChange={(e) => setHOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Desplazamiento Vertical:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={vOffset}
                    onChange={(e) => setVOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Radio de Desenfoque:</label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Radio de Extensión:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={spreadRadius}
                    onChange={(e) => setSpreadRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Color de la Sombra:</label>
                  <input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Color de Fondo:</label>
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
                    Normal
                  </button>
                  <button
                    className={`${
                      inset ? "bg-gray-100" : "bg-gray-300"
                    } text-gray-800 py-1 px-4 rounded`}
                    onClick={() => setInset(true)}
                  >
                    Encajado
                  </button>
                  <button
                    className="bg-gray-200 text-gray-800 py-1 px-4 rounded"
                    onClick={handleReset}
                  >
                    Reiniciar
                  </button>
                </div>
                <div className="w-full mt-4 p-4 bg-gray-100">
                  <label className="block mb-2 font-semibold">
                    CSS generado:
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
                  Copiar CSS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxShadowGeneretor;
