import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Mock data - in real app, fetch from Google Sheets
const CONTRIBUTORS = [
    { name: "Anand K.", role: "Supporter", image: "https://ui-avatars.com/api/?name=Anand+K&background=random" },
    { name: "Priya S.", role: "Volunteer", image: "https://ui-avatars.com/api/?name=Priya+S&background=random" },
    { name: "Rahul M.", role: "Donor", image: "https://ui-avatars.com/api/?name=Rahul+M&background=random" },
    { name: "Sarah J.", role: "Supporter", image: "https://ui-avatars.com/api/?name=Sarah+J&background=random" },
    { name: "David R.", role: "Donor", image: "https://ui-avatars.com/api/?name=David+R&background=random" },
];

const ContributorSlider = () => {
    return (
        <div className="py-12">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-gray-800">Our Generous Contributors</h3>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="pb-12 px-4"
            >
                {CONTRIBUTORS.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-light"
                            />
                            <h4 className="font-bold text-lg text-gray-800">{person.name}</h4>
                            <p className="text-primary text-sm font-medium">{person.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ContributorSlider;
