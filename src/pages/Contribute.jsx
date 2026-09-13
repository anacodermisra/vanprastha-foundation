import React from 'react';
import ContributionForm from '../components/ContributionForm';
import ContributorSlider from '../components/ContributorSlider';
import AnimatedSection from '../components/AnimatedSection';
import { useContent } from '../context/ContentContext';

const Contribute = () => {
    const { lang } = useContent();
    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{lang === 'en' ? 'Support Our Mission' : 'हमारे मिशन का समर्थन करें'}</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        {lang === 'en' ? 'Your contribution helps us plant trees, support rural education, and provide medical aid to those in need.' : 'आपका योगदान हमें पेड़ लगाने, ग्रामीण शिक्षा का समर्थन करने और जरूरतमंद लोगों को चिकित्सा सहायता प्रदान करने में मदद करता है।'}
                    </p>
                    <a
                        href="https://pages.razorpay.com/vanprasthafoundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                    >
                        {lang === 'en' ? 'Donate Online via Razorpay' : 'रेजरपे के माध्यम से ऑनलाइन दान करें'} &rarr;
                    </a>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                    {/* Left Side: Impact / Info */}
                    <AnimatedSection className="space-y-8" delay={0.2}>
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Why Contribute?' : 'योगदान क्यों करें?'}</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <p><strong>{lang === 'en' ? 'Tax Benefits:' : 'कर लाभ:'}</strong> {lang === 'en' ? 'All donations are eligible for tax exemption under 80G.' : 'सभी दान 80G के तहत कर छूट के पात्र हैं।'}</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <p><strong>{lang === 'en' ? 'Transparency:' : 'पारदर्शिता:'}</strong> {lang === 'en' ? 'We publish regular reports on how your funds are utilized.' : 'हम नियमित रूप से रिपोर्ट प्रकाशित करते हैं कि आपके धन का उपयोग कैसे किया जाता है।'}</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">✓</span>
                                    <p><strong>{lang === 'en' ? 'Direct Impact:' : 'प्रत्यक्ष प्रभाव:'}</strong> {lang === 'en' ? '100% of your donation goes directly to the cause.' : 'आपका 100% दान सीधे कारण में जाता है।'}</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{lang === 'en' ? 'Bank Transfer Details' : 'बैंक हस्तांतरण विवरण'}</h3>
                            <div className="space-y-2 text-gray-600">
                                <p><span className="font-semibold">{lang === 'en' ? 'Account Name:' : 'खाता नाम:'}</span> Vanprastha Foundation</p>
                                <p><span className="font-semibold">{lang === 'en' ? 'Account Number:' : 'खाता संख्या:'}</span> XXXXXXXXXXXX</p>
                                <p><span className="font-semibold">{lang === 'en' ? 'IFSC Code:' : 'IFSC कोड:'}</span> XXXXX00000</p>
                                <p><span className="font-semibold">{lang === 'en' ? 'Bank:' : 'बैंक:'}</span> State Bank of India</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Side: Form */}
                    <AnimatedSection delay={0.4}>
                        <ContributionForm />
                    </AnimatedSection>
                </div>

                {/* Slider Section */}
                <AnimatedSection className="border-t border-gray-200 pt-16">
                    <ContributorSlider />
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Contribute;
