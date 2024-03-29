import ButtonShadow from "../ButtonShadow/ButtonShadow";
import shadowsJson from "../../shadows.json";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [boxSelected, setBoxselected] = useState("");

  const lightShadows = shadowsJson.lightShadows;
  const aggressiveShadows = shadowsJson.aggressiveShadows;
  const mildShadows = shadowsJson.mildShadows;
  const colorShadows = shadowsJson.colorShadows;
  const hoverShadows = shadowsJson.hoverShadows;
  const insetShadows = shadowsJson.insetShadows;
  const insetsubtleShadows = shadowsJson.insetsubtleShadows;

  useEffect(() => {
    console.log(lightShadows, aggressiveShadows);
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl min-h-screen p-12 flex flex-col items-center">
        <h1 className="text-[#71731f] text-[56px] font-bold mt-10">
          BOX-SHADOWS
        </h1>
        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">SOFT-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {lightShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">MIDDLE-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {mildShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">AGRESSIVE-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {aggressiveShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">COLORS-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {colorShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">HOVERD-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {hoverShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">SUBTLE-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {insetsubtleShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">INSET-SHADOWS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap:20">
              {insetShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
