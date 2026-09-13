import React, { useState } from 'react';
import { Send, Users, TreePine, HandHeart, Loader, CheckCircle, AlertCircle, BookOpen, Droplets } from 'lucide-react';
import { sendVolunteerEmail } from '../services/emailService';
import { useContent } from '../context/ContentContext';

const Volunteer = () => {
    const { lang } = useContent();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'plantation',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await sendVolunteerEmail(formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', phone: '', interest: 'plantation', message: '' });
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
        } catch (error) {
            setStatus({ loading: false, error: error?.text || error?.message || 'Failed to send message. Please try again.', success: false });
        }
    };

    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{lang === 'en' ? 'Join Our Community' : 'हमारे समुदाय से जुड़ें'}</h1>
                    <p className="text-lg text-gray-600">
                        {lang === 'en' ? 'Become a part of the change. Volunteer your time and skills to help us build a sustainable future.' : 'बदलाव का हिस्सा बनें। एक स्थायी भविष्य बनाने में हमारी मदद करने के लिए अपना समय और कौशल स्वयंसेवक के रूप में दें।'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Info */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <TreePine className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Plantation Drives' : 'वृक्षारोपण अभियान'}</h3>
                                <p className="text-sm text-gray-500">{lang === 'en' ? 'Help us restore green cover in rural areas.' : 'ग्रामीण क्षेत्रों में हरियाली बहाल करने में हमारी मदद करें।'}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <Users className="w-10 h-10 text-secondary mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Community Outreach' : 'सामुदायिक संपर्क'}</h3>
                                <p className="text-sm text-gray-500">{lang === 'en' ? 'Spread awareness about health and hygiene.' : 'स्वास्थ्य और स्वच्छता के बारे में जागरूकता फैलाएं।'}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <HandHeart className="w-10 h-10 text-accent mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Medical Camps' : 'चिकित्सा शिविर'}</h3>
                                <p className="text-sm text-gray-500">{lang === 'en' ? 'Assist doctors and organize health camps.' : 'डॉक्टरों की सहायता करें और स्वास्थ्य शिविर आयोजित करें।'}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Education (Pathshala)' : 'शिक्षा (पाठशाला)'}</h3>
                                <p className="text-sm text-gray-500">{lang === 'en' ? 'Teach and empower rural children.' : 'ग्रामीण बच्चों को पढ़ाएं और सशक्त बनाएं।'}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <Droplets className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">{lang === 'en' ? 'Menstrual Hygiene' : 'मासिक धर्म स्वच्छता'}</h3>
                                <p className="text-sm text-gray-500">{lang === 'en' ? 'Break taboos and educate rural women.' : 'वर्जनाओं को तोड़ें और ग्रामीण महिलाओं को शिक्षित करें।'}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-600 text-sm font-medium">
                                {lang === 'en' ? 'Have questions or prefer to contact directly? Write to us at ' : 'कोई प्रश्न है या सीधे संपर्क करना पसंद करेंगे? हमें यहाँ लिखें '}
                                <a 
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=foundationvanprastha@gmail.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-bold hover:underline"
                                >
                                    foundationvanprastha@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">{lang === 'en' ? 'Volunteer Registration' : 'स्वयंसेवक पंजीकरण'}</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'en' ? 'Email' : 'ईमेल'}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'en' ? 'Phone' : 'फोन'}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'en' ? 'Area of Interest' : 'रुचि का क्षेत्र'}</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                >
                                    <option value="plantation">{lang === 'en' ? 'Tree Plantation' : 'वृक्षारोपण'}</option>
                                    <option value="education">{lang === 'en' ? 'Education & Teaching' : 'शिक्षा और शिक्षण'}</option>
                                    <option value="medical">{lang === 'en' ? 'Medical Camps' : 'चिकित्सा शिविर'}</option>
                                    <option value="other">{lang === 'en' ? 'Other' : 'अन्य'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'en' ? 'Message (Optional)' : 'संदेश (वैकल्पिक)'}</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                ></textarea>
                            </div>

                            {status.success && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    <span>{lang === 'en' ? 'Thank you! Your registration has been sent.' : 'धन्यवाद! आपका पंजीकरण भेज दिया गया है।'}</span>
                                </div>
                            )}

                            {status.error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    <span>{status.error}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-green-700 text-white'
                                    }`}
                            >
                                {status.loading ? (
                                    <>
                                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                                        {lang === 'en' ? 'Sending...' : 'भेजा जा रहा है...'}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        {lang === 'en' ? 'Sign Up' : 'साइन अप करें'}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
