import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

import heroBanner from '../assets/hero-banner.jpg';
import communityGroup from '../assets/community-group.jpg';
import projectPunarjeevan from '../assets/project-punarjeevan.jpg';
import educationInitiative from '../assets/education-initiative.jpg';
import medicalCampFlyer from '../assets/medical-camp-flyer.jpg';

const Section = ({ children, className = "", ...props }) => (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
        {children}
    </section>
);

const Home = () => {
    const { content, loading } = useContent();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>;
    }

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="relative bg-primary w-full">
                <div className="relative w-full">
                    <div className="absolute inset-0 bg-black/0 z-10"></div>
                    <img
                        src={heroBanner}
                        alt="Vanprastha Foundation Banner"
                        className="w-full h-auto block"
                    />
                </div>
            </div>

            {/* About Section */}
            <Section id="about" className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">About Us</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {content.about.description}
                        </p>

                        <img src={communityGroup} alt="Vanprastha Community" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
                            {content.about.objectives.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-light rounded-xl shadow-sm border border-gray-100 h-full"
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Initiatives Section */}
            <Section id="initiatives" className="bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">Our Initiatives</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Previous Initiatives */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-2 h-8 bg-secondary mr-3 rounded-full"></span>
                                Previous Work
                            </h3>
                            <div className="space-y-6">
                                {content.initiatives.previous.map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        {item.title === "Project Punarjeevan" && (
                                            <img src={projectPunarjeevan} alt="Project Punarjeevan" className="w-full h-48 object-cover rounded-md mb-4" />
                                        )}
                                        {item.title === "Empowering Village Children" && (
                                            <img src={educationInitiative} alt="Education Initiative" className="w-full h-48 object-cover rounded-md mb-4" />
                                        )}
                                        <h4 className="text-xl font-bold text-green-800 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <Link to={`/initiative/${item.id}`} className="text-primary font-bold hover:underline inline-flex items-center text-sm">
                                            Read More <ArrowRight className="w-3 h-3 ml-1" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Initiatives */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-2 h-8 bg-accent mr-3 rounded-full"></span>
                                Upcoming
                            </h3>
                            <div className="space-y-6">
                                {content.initiatives.upcoming.length > 0 ? (
                                    content.initiatives.upcoming.map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent relative overflow-hidden">
                                            <div className="absolute top-0 right-0 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                                {item.date}
                                            </div>
                                            {item.title.includes("Medical Camp") && (
                                                <img src={medicalCampFlyer} alt="Medical Camp" className="w-full h-48 object-cover rounded-md mb-4" />
                                            )}
                                            <h4 className="text-xl font-bold text-dark mb-2">{item.title}</h4>
                                            <p className="text-gray-600 mb-4">{item.description}</p>
                                            <div className="flex items-center gap-4">
                                                <a href="/contribute" className="text-primary font-bold hover:underline inline-flex items-center text-sm">
                                                    Support <Heart className="w-3 h-3 ml-1" />
                                                </a>
                                                <Link to={`/initiative/${item.id}`} className="text-gray-600 hover:text-primary font-bold hover:underline inline-flex items-center text-sm">
                                                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-dashed border-gray-300">
                                        <p className="text-gray-500 italic">No upcoming initiatives scheduled at the moment.</p>
                                        <p className="text-gray-500 text-sm mt-2">Check back soon or subscribe to our newsletter for updates!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
