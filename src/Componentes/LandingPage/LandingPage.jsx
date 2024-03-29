import ButtonShadow from "../ButtonShadow/ButtonShadow";
import shadowsJson from "../../shadows.json";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [boxSelected, setBoxselected] = useState("");

  const softShadows = shadowsJson.softShadows;
  const hoverEffects = shadowsJson.hoverEffects;
  const glowingEffects = shadowsJson.glowingEffects;
  const borderEffects = shadowsJson.borderEffects;
  const radiantEffects = shadowsJson.radiantEffects;

  const getShadowStyle = (item) => {
    let shadowStyle = "0px 0px 0px rgba(0, 0, 0, 0)";
    if (item) shadowStyle = item.style;
    return shadowStyle;
  };

  useEffect(() => {
    console.log(
      softShadows,
      hoverEffects,
      glowingEffects,
      borderEffects,
      radiantEffects
    );
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl min-h-screen p-12 flex flex-col items-center ">
        <h1 className="text-[#71731f] text-[56px] font-bold mt-10">
          BOX-SHADOWS
        </h1>
        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-4 font-bold">SOFT-SHADOWS</h2>
            <div className="flex flex-row flex-wrap">
              {softShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={`Button ${item.id}`}
                  shadowStyle={getShadowStyle(item)}
                />
              ))}
            </div>
          </div>
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-4 font-bold">Hover-Effects</h2>
            <div className="flex flex-row flex-wrap">
              {hoverEffects?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={`Button ${item.id}`}
                  shadowStyle={getShadowStyle(item)}
                />
              ))}
            </div>
          </div>
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-4 font-bold">Glowing Effects</h2>
            <div className="flex flex-row flex-wrap">
              {glowingEffects?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={`Button ${item.id}`}
                  shadowStyle={getShadowStyle(item)}
                />
              ))}
            </div>
          </div>
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-4 font-bold">Border Effects</h2>
            <div className="flex flex-row flex-wrap">
              {borderEffects?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={`Button ${item.id}`}
                  shadowStyle={getShadowStyle(item)}
                />
              ))}
            </div>
          </div>
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-4 font-bold">Radiant Effects</h2>
            <div className="flex flex-row flex-wrap">
              {radiantEffects?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={`Button ${item.id}`}
                  shadowStyle={getShadowStyle(item)}
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
