import React from "react";
import { useLanguage } from "../LanguageContext";

const Contact = () => {
  const { translations } = useLanguage();

  return (
    <div className="relative mb-5" id="contact">
      <div
        className="bg-cover bg-center min-h-[70vh] w-full flex flex-col items-center justify-center text-white relative z-20"
        style={{
          backgroundImage: `url(https://zamontour.uz/assets/images/heading-bg-02.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-xl  md:text-2xl lg:text-3xl">
          {translations.reserve.choose}
        </h1>
        <h1 className="text-3xl font-bold mt-3 md:text-6xl lg:text-7xl">
          {translations.reserve.book}
        </h1>
        <a
          href="#contact"
          className="px-4 py-3 bg-white rounded-3xl text-primary font-bold hover:bg-primary hover:text-white transition duration-300 mt-4 md:mt-6 lg:mt-8"
          >
          {translations.reserve.learn_more}
        </a>
      </div>
      <div  className="relative -mt-32 z-30 flex flex-col lg:flex lg:flex-row justify-evenly sm:grid sm:grid-cols-2 align-middle items-center gap-7 md:px-16">
        <div className="w-full max-w-sm bg-white shadow-md p-6 rounded-3xl text-center">
          <div className="mb-4 flex align-middle justify-center items-center">
            <div className="bg-[#F0F0F0] w-16 h-16 text-xl align-middle justify-center flex items-center rounded-full text-[#22B3C1]">
              <i class="fa-solid fa-phone"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">{translations.reserve.phone_number}</h2>
          <a href="tel:+998992999996" className="text-primary">+998 99 299 99 96</a>
        </div>
        <div className="w-full max-w-sm bg-white shadow-md p-6 rounded-3xl text-center">
        <div className="mb-4 flex align-middle justify-center items-center">
            <div className="bg-[#F0F0F0] w-16 h-16 text-xl align-middle justify-center flex items-center rounded-full text-[#22B3C1]">
            <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">
          {translations.reserve.email_us}
          </h2>
          <a href="mailto:zamonbiznestour@mail.ru" className="text-primary">zamonbiznestour@mail.ru</a>
        </div>
        <div className="w-full max-w-sm bg-white shadow-md p-6 rounded-3xl text-center">
        <div className="mb-4 flex align-middle justify-center items-center">
            <div className="bg-[#F0F0F0] w-16 h-16 text-xl align-middle justify-center flex items-center rounded-full text-[#22B3C1]">
            <i class="fa-solid fa-location-pin"></i>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">
          {translations.reserve.visit_us}
          </h2>
          <a href="#" className="text-primary">{translations.reserve.address}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
