import React from "react";
import { useLanguage } from "../LanguageContext";


const Footer = () => {
  const { translations } = useLanguage();

  return (
    <div className="w-full h-80  flex flex-col z-10 bg-primary ">
      <div
        className="w-full h-[232px] z-40 flex lg:flex-row flex-col text-center align-middle lg:text-left justify-evenly items-center"
        style={{
          background: "url(https://zamontour.uz/assets/images/cta-bg.jpg)",
          backgroundPositionX: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1 className="text-white text-4xl font-bold">{translations.footer.h1}</h1>
          <p className="text-white text-xl font-semibold">{translations.footer.p}</p>
        </div>
        <button className="bg-primary p-3 rounded-3xl border-white border-[1px] text-white hover:bg-white hover:text-primary transition-all duration-300">
          <a href="#contact">{translations.footer.p}</a>
        </button>
      </div>
      <h1 className="text-center pt-7 text-white font-medium">
        Copyright © 2024 Zamon Business Tour. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
