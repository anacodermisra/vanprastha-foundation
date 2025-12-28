import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Vanprastha Foundation</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Village Awareness towards Nature, Protection of Resources, Afforestation, Sustainability, Tradition, Harmony & Action.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><HashLink smooth to="/#about" className="hover:text-accent transition-colors">About Us</HashLink></li>
                            <li><HashLink smooth to="/#initiatives" className="hover:text-accent transition-colors">Initiatives</HashLink></li>
                            <li><Link to="/volunteer" className="hover:text-accent transition-colors">Volunteer</Link></li>
                            <li><Link to="/contribute" className="hover:text-accent transition-colors">Contribute</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                                <p>Khet - 267, 269 ,275, Khata no. 16, Ratkhal, Dunagiri, Almora,<br />Ranikhet, Uttarakhand-263653</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                                <a href="mailto:foundationvanprastha@gmail.com" className="hover:text-white transition-colors">
                                    foundationvanprastha@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vanprastha Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
