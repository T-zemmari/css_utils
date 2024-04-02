import ButtonShadow from "../ButtonShadow/ButtonShadow";
import shadowsJson from "../../shadows.json";
import { useEffect, useState } from "react";
import SwAlert from "../SwAlert/SwAlert";
import ScrollToTopButton from "../ButtonScrollToTop/ButtonScrollToTop";
import { Link } from "react-router-dom";
import bgOneSvg from "../../assets/svgs/background_2.svg";

const LandingPage = () => {
  const [boxSelected, setBoxselected] = useState("");
  const [bgSize, setBgSize] = useState("contain");

  const lightShadows = shadowsJson.lightShadows;
  const aggressiveShadows = shadowsJson.aggressiveShadows;
  const mildShadows = shadowsJson.mildShadows;
  const colorShadows = shadowsJson.colorShadows;
  const hoverShadows = shadowsJson.hoverShadows;
  const insetShadows = shadowsJson.insetShadows;
  const insetsubtleShadows = shadowsJson.insetsubtleShadows;

  useEffect(() => {
    const resize = () => {
      let widthWindows = window.innerWidth;
      if (widthWindows <= 768) {
        setBgSize(`950%`);
      } else {
        setBgSize(`contain`);
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [bgSize]);

  const handleCopiarCss = (shadowCss, shadowCssHoverd) => {
    let cssCode = `box-shadow:${shadowCss}`;
    if (shadowCssHoverd != undefined) {
      cssCode = `.elemento_css{
        box-shadow:${shadowCss};
      }`;
      cssCode += `.elemento_css:hover{
        box-shadow:${shadowCss};
      }`;
    }
    navigator.clipboard.writeText(cssCode);
    SwAlert(`Css copiado correctamente`);
  };

  const handleClickGoToBoxShadows = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ScrollToTopButton />
      <div
        className="w-full min-h-screen flex flex-col mt-32 md:mt-0 justify-start md:justify-center items-center md:items-start  p-4 md:p-12"
        style={{
          backgroundImage: `url(${bgOneSvg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: `${bgSize}`,
        }}
      >
        <h1 className="text-6xl md:text-4xl lg:text-8xl font-bold mb-6 text-gray-900 sm:mt-8 lg:mt-0">
          CSS Utils App
        </h1>
        <p className="w-[400px] text-2xl md:text-xl text-gray-700 mb-8">
          ¡Bienvenido a CSS Utils! Esta aplicación proporciona herramientas para
          generar propiedades CSS como sombras de caja y fondos ondulados.
        </p>
        <div className="flex gap-2 md:gap-4">
          <Link
            to="/box-shadow-generator"
            className="w-[50%] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generador Box Shadow
          </Link>
          <Link
            to="/background-generator"
            className="w-[50%] bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Generador Background
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className="w-[150px] h-[150px] rounded-full bg-[#ffb4b9] mt-10 text-white font-bold"
            onClick={() => handleClickGoToBoxShadows("box_shadows_container")}
          >
            BOXSHADOWS
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl min-h-screen p-2 md:p-12 flex flex-col items-center">
        <hr />
        <h1
          className="text-[#71731f] text-[36px] md:text-[56px] font-bold  md:mt-12"
          id="box_shadows_container"
        >
          BOX-SHADOWS
        </h1>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">SOFT-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {lightShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">MIDDLE-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {mildShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">AGRESSIVE-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {aggressiveShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">COLORS-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {colorShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">HOVERD-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {hoverShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">SUBTLE-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {insetsubtleShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[100%] bg-white mt-4 flex flex-col justify-start items-start rounded-lg">
          <div className="w-full min-h-[180px] flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl mb-10 font-bold">INSET-SHADOWS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap:20">
              {insetShadows?.map((item) => (
                <ButtonShadow
                  key={item.id}
                  buttonText={item.name}
                  shadowStyle={item.style}
                  hoverStyle={item?.hoverStyle}
                  onClick={() => handleCopiarCss(item.style, item?.hoverStyle)}
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
