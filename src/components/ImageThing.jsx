import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

const ImageThing = ({ screenWidth }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { translations } = useLanguage();

  const allImages = [
    {
      image: "https://zamontour.uz/assets/images/dubai.jpg",
      name: translations.image_thing.dubai.name,
      population: translations.image_thing.dubai.population,
    },
    {
      image: "https://zamontour.uz/assets/images/antalya.jpg",
      name: translations.image_thing.antalia.name,
      population: translations.image_thing.antalia.population,
    },
    {
      image: "https://zamontour.uz/assets/images/istanbul.jpg",
      name: translations.image_thing.istanbul.name,
      population: translations.image_thing.istanbul.population,
    },
    {
      image: "https://zamontour.uz/assets/images/sharm.jpg",
      name: translations.image_thing.egypt.name,
      population: translations.image_thing.egypt.population,
    },
    {
      image: "https://zamontour.uz/assets/images/best-05.jpg",
      name: translations.image_thing.paris.name,
      population: translations.image_thing.paris.population,
    },
  ];

  const [images, setImages] = useState(allImages);

  useEffect(() => {
    if (screenWidth < 700) {
      setImages(allImages.slice(0, 3));
    } else {
      setImages(allImages);
    }
  }, [screenWidth]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="pt-24 pb-4">
      <div className="text-center">
        <div className="flex align-middle justify-center flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">
            {translations.image_thing.title}
          </h1>
          <h4 className="max-w-[500px] text-center text-gray-400">
            {translations.image_thing.desc}
          </h4>
        </div>
        <div className="flex justify-center items-center space-x-4 my-6">
          {images.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 cursor-pointer rounded-3xl h-[400px] overflow-hidden ${
                activeIndex !== index ? "w-[60px]" : "w-[536px]"
              }`}
              onClick={() => handleImageClick(index)}
            >
              <div
                className={`w-full h-full object-cover flex flex-col-reverse py-3 align-middle ${
                  activeIndex !== index
                    ? "items-center scale-105"
                    : "items-start scale-100 pl-4"
                }`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-row text-white items-center gap-3">
                  <div
                    className={`rounded-full bg-white w-8 h-8 flex align-middle justify-center items-center ${
                      activeIndex !== index && "mb-4"
                    }`}
                  >
                    <i className="fas fa-expand text-blue-700"></i>
                  </div>
                  {activeIndex === index && (
                    <div className="text-left">
                      <h1 className="text-2xl font-bold">{item.name}</h1>
                      <p>
                        {translations.image_thing.population}
                        {item.population}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageThing;
