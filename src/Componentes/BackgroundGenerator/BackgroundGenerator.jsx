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
      <div className="w-full sm:max-w-7xl min-h-screen sm:min-h-[580px] p-2 sm:mt-36 flex flex-col-reverse justify-start items-start sm:gap-3 sm:flex-row sm:rounded-lg">
        <div
          className={`contenedor_padre_preview w-full h-full sm:w-4/6 sm:h-[580px]  bg-white sm:rounded-lg`}
        >
          <div className="contenedor_preview sm:mt-8">
            <img src="" alt="" />
          </div>
        </div>
        <div
          className={`contenedor_padre_taller w-full sm:w-2/6 h-[580px] mt-24 sm:mt-0 p-2 sm:p-4 bg-white sm:rounded-lg`}
        >
          <div className="w-full h-[80%] flex justify-start items-start"></div>
          <div className="w-full h-[20%] flex flex-col justify-center items-start border-2 rounded-lg ">
            <span className="w-full text-center text-red-400 font-bold">Exportar</span>
            <div className="w-full  flex justify-center items-center sm:p-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                onClick={handleExportAsPNG}
              >
                PNG
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-4"
                onClick={handleExportAsSVG}
              >
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
