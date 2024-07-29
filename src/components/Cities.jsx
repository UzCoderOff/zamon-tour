import React from "react";
import { useLanguage } from "../LanguageContext";

const Cities = () => {
  const { translations } = useLanguage();

  const cities = translations.Cities;

  return (
    <section className="max-w-6xl mx-auto p-6 border-t-2">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">
          {translations.cities_title}
        </h1>
        <h4 className="text-gray-600 mb-6">
          {translations.cities_desc}
        </h4>
        {cities.map((city, index) => (
          <div
            key={index}
            className={`item flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 ${
              index !== cities.length - 1 ? "border-b-2 pb-8 mb-8" : ""
            }`}
          >
            <img
              src={city.image}
              alt={city.city}
              className="w-full md:w-1/3 rounded-3xl"
              style={{ maxWidth: "350px" }}
            />
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    {city.city}
                  </h4>
                  <span className="text-gray-600">{city.country}</span>
                </div>
                <div className="main-button">
                  <a
                    href="#contact"
                    className="bg-primary text-white py-3 px-4 hover:bg-teal-200 rounded-3xl"
                  >
                    {city.link}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{city.description}</p>
              <ul className="info mt-4 space-y-2">
                <li className="flex items-center">
                  <i className="fa fa-user mr-2"></i> {city.population}
                </li>
                <li className="flex items-center">
                  <i className="fa fa-globe mr-2"></i> {city.area}
                </li>
                <li className="flex items-center">
                  <i className="fa fa-home mr-2"></i> {city.gdp}
                </li>
              </ul>
              <div className="text-button mt-4">
                <a href="#contact" className="text-primary">
                  {translations.inters} <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cities;
