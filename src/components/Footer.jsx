import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Footer = () => {
    const { lang } = useContent();
    return (
        <footer className="bg-dark text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Vanprastha Foundation</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {lang === 'en' 
                                ? 'Village Awareness towards Nature, Protection of Resources, Afforestation, Sustainability, Tradition, Harmony & Action.' 
                                : 'प्रकृति के प्रति ग्राम जागरूकता, संसाधनों का संरक्षण, वनीकरण, स्थिरता, परंपरा, सद्भाव और कार्रवाई।'}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{lang === 'en' ? 'Quick Links' : 'त्वरित लिंक'}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><HashLink smooth to="/#about" className="hover:text-accent transition-colors">{lang === 'en' ? 'About Us' : 'हमारे बारे में'}</HashLink></li>
                            <li><HashLink smooth to="/#initiatives" className="hover:text-accent transition-colors">{lang === 'en' ? 'Initiatives' : 'पहल'}</HashLink></li>
                            <li><Link to="/leadership" className="hover:text-accent transition-colors">{lang === 'en' ? 'Leadership & Board' : 'नेतृत्व और निदेशक मंडल'}</Link></li>
                            <li><Link to="/awards" className="hover:text-accent transition-colors">{lang === 'en' ? 'Awards & Recognition' : 'पुरस्कार और मान्यता'}</Link></li>
                            <li><Link to="/media" className="hover:text-accent transition-colors">{lang === 'en' ? 'Media Center' : 'मीडिया सेंटर'}</Link></li>
                            <li><Link to="/governance" className="hover:text-accent transition-colors">{lang === 'en' ? 'Governance' : 'शासन'}</Link></li>
                            <li><Link to="/faq" className="hover:text-accent transition-colors">{lang === 'en' ? 'FAQ' : 'सामान्य प्रश्न'}</Link></li>
                            <li><Link to="/volunteer" className="hover:text-accent transition-colors">{lang === 'en' ? 'Volunteer' : 'स्वयंसेवक'}</Link></li>
                            <li><a href="https://pages.razorpay.com/vanprasthafoundation" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{lang === 'en' ? 'Contribute Online' : 'ऑनलाइन योगदान करें'}</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{lang === 'en' ? 'Legal' : 'कानूनी'}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/governance" className="hover:text-accent transition-colors">{lang === 'en' ? '12A & 80G Compliance' : '12A और 80G अनुपालन'}</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">{lang === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">{lang === 'en' ? 'Terms & Conditions' : 'नियम और शर्तें'}</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-accent transition-colors">{lang === 'en' ? 'Refund Policy' : 'धनवापसी नीति'}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{lang === 'en' ? 'Contact Us' : 'संपर्क करें'}</h4>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                                <p>{lang === 'en' ? 'Khet - 267, 269 ,275, Khata no. 16, Ratkhal, Dunagiri, Almora,' : 'खेत - 267, 269, 275, खाता नं. 16, रतखाल, दूनागिरी, अल्मोड़ा,'}<br />{lang === 'en' ? 'Ranikhet, Uttarakhand-263653' : 'रानीखेत, उत्तराखंड-263653'}</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                                <a 
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=foundationvanprastha@gmail.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    foundationvanprastha@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vanprastha Foundation. {lang === 'en' ? 'All rights reserved.' : 'सभी अधिकार सुरक्षित।'}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
