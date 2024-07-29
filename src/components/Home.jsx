import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BannerParent from "./banner/BannerParent";
import NavbarMobile from "./NavbarMobile";
import WeeklyParent from './weekly/WeeklyParent';
import VisaSuppport from "./VisaSuppport/VisaSuppport";
import TravelDeals from "./TravelDeals";
import Cities from "./Cities";
import ImageThing from './ImageThing';
import Contact from "./Contact";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 860);
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[100vw]">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <BannerParent />
      <WeeklyParent screenWidth={screenWidth} />
      <VisaSuppport />
      <TravelDeals />
      <Cities />
      <ImageThing screenWidth={screenWidth} />
      <Contact />
      <Form/>
      <Footer/>
    </div>
  );
};

export default Home;
