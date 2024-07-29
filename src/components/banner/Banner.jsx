import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { useLanguage } from "../../LanguageContext";

const Banner = ({ info, handleClick, index }) => {
  const [currentBg, setCurrentBg] = useState(info.bg);
  const [isVisible, setIsVisible] = useState(true);
  const { translations } = useLanguage();

  useEffect(() => {
    let timeoutId;
    if (info.bg !== currentBg) {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setCurrentBg(info.bg);
        setIsVisible(true);
      }, 150);
    }

    return () => clearTimeout(timeoutId);
  }, [info, currentBg]);

  const nums = Array(4)
    .fill()
    .map((_, idx) => idx);

  return (
    <div
      className={`banner h-[100vh] z-0 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } pt-28 lg:px-24 md:px-16 vsm:px-6 flex flex-col justify-evenly w-full`}
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col align-middle items-center justify-center text-center text-white">
        <p className="text-xl">{translations.banner.title}</p>
        <h1 className="text-6xl font-bold">{info.info.name}</h1>
        <a href="#contact" className="w-64 p-3 bg-primary mt-3 rounded-full hover:bg-white hover:text-primary transition-all">
          {translations.banner.go}
        </a>
      </div>
      <InfoCard
        population={info.info.population}
        territory={info.info.territory}
        price={info.info.price}
      />
      <div className="flex flex-row text-center align-middle justify-evenly">
        {nums.map((num) => (
          <div key={num} onClick={() => handleClick(num)} className={`slider-num md:w-20 w-14 lg:w-32 text-white ${index === num && 'active'}`}>{num + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Banner;