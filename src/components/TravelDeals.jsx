import React from "react";
import { useLanguage } from "../LanguageContext";

const TravelDeals = () => {
  const { translations } = useLanguage();

  return (
    <section id="about-us">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          {translations.TravelDeals.title}
        </h1>
        <p className="text-gray-600 mb-6">{translations.TravelDeals.desc}</p>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="https://zamontour.uz/assets/images/afr.jpg"
              alt="Cheap Railway Tickets With Us"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">
                {translations.TravelDeals.train.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {translations.TravelDeals.ww}
              </p>
              <p className="text-gray-500">
                {translations.TravelDeals.train.desc}
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-3xl">
                <a href="">{translations.banner.explore}</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="https://zamontour.uz/assets/images/airplane.jpg"
              alt="Discover Exciting Air Travel Deals"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">
                {translations.TravelDeals.plane.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {translations.TravelDeals.gd}
              </p>
              <p className="text-gray-500">
                {translations.TravelDeals.plane.desc}
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-3xl">
                <a href="#">{translations.banner.explore}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDeals;
