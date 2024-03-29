import ButtonShadow from "../ButtonShadow/ButtonShadow";
import shadowsJson from "../../shadows.json";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [boxSelected, setBoxselected] = useState("");
  const [arrayShadows, setArrayShadows] = useState(shadowsJson["shadows"]);

  const getShadowStyle = (item) => {
    let shadowStyle = "0px 0px 0px rgba(0, 0, 0, 0)";
    if (item) shadowStyle = item.style;
    return shadowStyle;
  };

  useEffect(() => {
    console.log(arrayShadows);
  }, []);
  return (
    <>
      <div className="w-full sm:max-w-7xl min-h-screen p-12  flex flex-col items-center">
        <h1 className="text-[#71731f] text-[56px] font-bold mt-10">
          BOX-SHADOWS
        </h1>
        <div className="w-full h-[600px] bg-white mt-4 flex flex-row justify-start items-start flex-wrap p-10">
          {arrayShadows?.map((item) => {
            return (
              <ButtonShadow
                key={item.id}
                buttonText={`Button ${item.id}`}
                shadowStyle={getShadowStyle(item)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
