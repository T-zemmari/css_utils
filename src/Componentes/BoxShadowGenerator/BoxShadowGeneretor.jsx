import { useState } from "react";
import SwAlert from "../SwAlert/SwAlert";

const BoxShadowGeneretor = () => {
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(4);
  const [blurRadius, setBlurRadius] = useState(10);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [inset, setInset] = useState(false);

  const generateBoxShadow = () => {
    const insetValue = inset ? "inset" : "";
    return `${insetValue} ${hOffset}px ${vOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
  };

  const cssCode = `box-shadow: ${generateBoxShadow()};`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(cssCode);
    SwAlert("CSS copiado al portapapeles!");
  };

  return (
    <>
      <div className="w-full sm:max-w-7xl min-h-[580px] p-12 sm:mt-36 border-2 bg-white">
        <div className="p-4 h-[580px]">
          <div className="h-[90%] flex flex-row justify-between items-center gap-8">
            <div className="w-3/6 h-[100%] flex justify-center items-center">
              <div
                className="w-40 h-40 bg-white border border-gray-300 shadow-lg flex justify-center items-center rounded-lg"
                style={{ boxShadow: generateBoxShadow() }}
              >
                Preview
              </div>
            </div>
            <div className="w-3/6 flex justify-center items-end">
              <div className="mt-4">
                <div className="w-full flex flex-col">
                  <label>Horizontal Offset:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={hOffset}
                    onChange={(e) => setHOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Vertical Offset:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={vOffset}
                    onChange={(e) => setVOffset(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Blur Radius:</label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Spread Radius:</label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={spreadRadius}
                    onChange={(e) => setSpreadRadius(Number(e.target.value))}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label>Shadow Color:</label>
                  <input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    className={`${
                      inset ? "bg-gray-300" : "bg-gray-100"
                    } text-gray-800 py-1 px-4 rounded`}
                    onClick={() => setInset(false)}
                  >
                    Regular
                  </button>
                  <button
                    className={`${
                      inset ? "bg-gray-100" : "bg-gray-300"
                    } text-gray-800 py-1 px-4 rounded`}
                    onClick={() => setInset(true)}
                  >
                    Inset
                  </button>
                </div>
                <div className="w-full mt-4 p-4 bg-gray-100">
                  <label className="block mb-2 font-semibold">
                    CSS generado:
                  </label>
                  <textarea
                    className="w-full h-24 p-2 border border-gray-300 rounded"
                    value={cssCode}
                    readOnly
                  />
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleCopyClick}
                >
                  Copy CSS
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
