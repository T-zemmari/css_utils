import { useState, useRef } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import { saveAs } from "file-saver";

const BackgroundGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const svgRef = useRef(null);

  const handleExportAsPNG = () => {
    saveSvgAsPng(svgRef.current, "background.png");
  };

  const handleExportAsSVG = () => {
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    saveAs(blob, "background.svg");
  };

  return (
    <>
      <div className="w-full sm:max-w-7xl min-h-screen sm:min-h-[580px] p-2 sm:p-12 sm:mt-36 bg-white flex flex-col-reverse justify-start items-start sm:flex-row sm:rounded-lg">
        <div
          className={`contenedor_padre_preview w-full h-full sm:w-3/6 sm:h-[580px] border-x-2 border-indigo-100`}
        >
          <div className="contenedor_preview sm:mt-8">
            <img src="" alt="" />
          </div>
        </div>
        <div
          className={`contenedor_padre_taller w-full sm:w-3/6 h-[580px]  mt-24 sm:mt-0 p-2 sm:p-0 sm:border-l-2`}
        >
          <div className="w-full h-[85%] flex justify-start items-start border-y-2 border-indigo-100">
          
          </div>
          <div className="w-full h-[15%] flex justify-end sm:p-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
              onClick={handleExportAsPNG}
            >
              Exportar PNG
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-4"
              onClick={handleExportAsSVG}
            >
              Exportar SVG
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleExportAsSVG}
            >
              Previsualizar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundGenerator;
