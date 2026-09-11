import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Award, Trophy, Newspaper, CheckCircle, HeartHandshake, TreePine, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Awards = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24 font-display">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Awards & <span className="text-primary italic">Recognition</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Honoring the unwavering dedication of our volunteers, mentors, and community partners in transforming lives across the Uttarakhand Himalayas.
                    </p>
                </AnimatedSection>

                {/* Major Highlights Grid */}
                <div className="space-y-16 mb-20">
                    {/* Highlight 1: Sardar Patel Award */}
                    <AnimatedSection delay={0.1}>
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2 w-full">
                                <img
                                    src="/assets/award_sardar_patel.jpg"
                                    alt="Sardar Patel Award - CA Alok Misra presented by Mrs. Hema Malini"
                                    className="w-full rounded-lg shadow-lg object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 w-full flex flex-col justify-center">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                    Sardar Patel Award
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    Our founder <strong>CA Alok Misra</strong> receiving the prestigious Sardar Patel Award presented by renowned actress and Parliamentarian <strong>Mrs. Hema Malini</strong>. This award honors Vanprastha Foundation's transformative efforts towards Himalayan ecological restoration, community welfare, and sustainable rural development in Uttarakhand.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Highlight 2: Dr. Rajeev Seth & Medical Mission Feature */}
                    <AnimatedSection delay={0.2}>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 pt-12 border-t border-gray-200">
                            <div className="lg:w-1/2 w-full">
                                <img
                                    src="/assets/media_dr_rajeev_exercise.png"
                                    alt="Medical Camp Newspaper Clipping - Dr Rajeev Seth"
                                    className="w-full rounded-lg shadow-lg object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 w-full flex flex-col justify-center">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                    Medical Camp Press Feature
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    Newspaper coverage highlighting our landmark Free Medical & Dental Camp organized in collaboration with Bal Umang Drishya Sanstha (BUDS) and AIIMS specialists led by <strong>Dr. Rajeev Seth</strong> (MBBS & MD AIIMS, Managing Trustee BUDS), <strong>Dr. Professor Tulika Seth</strong> (AIIMS), and <strong>Dr. Aalok Tiwari</strong>. The camp delivered vital consultations, pediatric care, dental treatments, and medicines to hundreds of remote village residents in Ratkhal.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Bottom Call to Action */}
                <AnimatedSection delay={0.3}>
                    <div className="bg-primary text-white p-10 md:p-14 rounded-3xl text-center shadow-xl relative overflow-hidden">
                        <h3 className="text-2xl md:text-4xl font-extrabold mb-4">Support Our Journey Forward</h3>
                        <p className="text-white/90 max-w-xl mx-auto mb-8 font-medium">
                            Every recognition belongs to the village guardians and donors who make this possible. Join hands with us today.
                        </p>
                        <a
                            href="https://pages.razorpay.com/vanprasthafoundation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-primary font-bold text-lg rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Donate to Our Mission
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Awards;
