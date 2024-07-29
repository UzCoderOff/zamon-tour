import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import antalya from "../../assets/antalya.jpg";
import dubai from "../../assets/dubai.jpg";
import egypt from "../../assets/egypt.jpg";
import istanbul from "../../assets/istanbul.jpg";
import { useLanguage } from "../../LanguageContext";

const BannerParent = () => {
  const [index, setIndex] = useState(0);
  const { translations } = useLanguage();
  const bannerImages = [
    { bg: antalya, info: translations.banner.cities.antalia },
    { bg: dubai, info: translations.banner.cities.dubai },
    { bg: egypt, info: translations.banner.cities.egypt },
    { bg: istanbul, info: translations.banner.cities.istanbul },
  ];

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(bannerTimer);
  }, []);

  const handleClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div
      className="banner-wrapper h-[100vh] w-[100vw]"
      style={{ transition: "opacity .5s ease-in-out" }}
    >
      <Banner info={bannerImages[index]} handleClick={handleClick} index={index} />
    </div>
  );
};

export default BannerParent;
