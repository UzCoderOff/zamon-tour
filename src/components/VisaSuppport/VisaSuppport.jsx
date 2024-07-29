import React from 'react';
import peopleIcon from '../../assets/imgs/people.svg';
import visa1 from '../../assets/imgs/visa1.jpg';
import visa2 from '../../assets/imgs/visa2.jpg';
import visa3 from '../../assets/imgs/visa3.jpeg';
import visa4 from '../../assets/imgs/visa4.jpg';
import visa5 from '../../assets/imgs/visa5.jpg';
import visa6 from '../../assets/imgs/visa6.jpg';
import visa7 from '../../assets/imgs/visa7.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { useLanguage } from '../../LanguageContext';

const VisaSuppport = () => {
    const { translations } = useLanguage();

    const offers = [
        {
            title: translations.Visa.countries.China,
            people: '234',
            img: visa1
        },
        {
            title: translations.Visa.countries.HongKong,
            people: '234',
            img: visa2
        },
        {
            title: translations.Visa.countries.European,
            people: '234',
            img: visa3
        },
        {
            title: translations.Visa.countries.India,
            people: '234',
            img: visa4
        },
        {
            title: translations.Visa.countries.Japan,
            people: '234',
            img: visa5
        },
        {
            title: translations.Visa.countries.SaudiArabia,
            people: '234',
            img: visa6
        },
        {
            title: translations.Visa.countries.Oman,
            people: '234',
            img: visa7
        }
    ];

    return (
        <section className='my-20  border-b'>
            <div className="xm:w-[320px]  sm:w-[700px] md:w-[1000px] lg:w-[1320px] mx-auto">
                <div className="text-center mb-20">
                    <h1 className='font-bold text-3xl'>{translations.Visa.title}</h1>
                    <p className='lg:w-[680px] text-gray-400 mx-auto pt-5'>{translations.Visa.desc}</p>
                </div>

                <div className="flex">
                    <Swiper
                        slidesPerView={window.screen.width <= 780 ? 1 : window.screen.width >= 1060 ? 3 : 2}
                        spaceBetween={30}
                        navigation={true}
                        loop={true}
                        keyboard={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation, Keyboard]}
                        className="pb-28"
                    >
                        {offers.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative xm:w-[280px] md:w-[320px] lg:w-[400px] mb-28">
                                    <div className="img-container">
                                        <img src={item.img} alt="slider" className='image' />
                                    </div>
                                    <div className="py-4 px-5 bg-white z-10 absolute top-16 right-1 shadow-2xl rounded-2xl">
                                        <div className="flex justify-between border-b pb-5">
                                            <div>
                                                <h1 className='xm:text-xm md:text-xl font-bold'>{item.title}</h1>
                                                <p className='text-gray-500 xm:text-sm'><img src={peopleIcon} alt="people" className='inline' /> {item.people} {translations.Visa.offer1}</p>
                                            </div>
                                        </div>
                                        <h1 className='my-3 md:text-xl xm:text-sm'>{translations.offertitle}</h1>
                                        <ul>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px]'>
                                                <i className="fa-solid fa-taxi"></i> {translations.offer3}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px]'>
                                                <i className="fa-solid fa-plane"></i> {translations.offer4}
                                            </li>
                                            <li className='text-gray-500 xm:text-xs md:text-sm my-3 max-w-[220px]'>
                                                <i className="fa-solid fa-building"></i> {translations.offer5}
                                            </li>
                                        </ul>
                                        <div className="flex justify-center">
                                            <a href="#contact" className='bg-primary text-white xm:text-xs md:text-XL px-7 py-3 rounded-full inline-block my-5 mx-auto'>{translations.MakeAReservation}</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default VisaSuppport;
