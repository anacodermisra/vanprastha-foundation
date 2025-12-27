import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Initiatives', path: '/#initiatives' },
        { name: 'Volunteer', path: '/volunteer' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img src={logo} alt="Vanprastha Logo" className="h-12 w-auto" />
                            <span className="text-xl md:text-2xl font-serif font-bold text-primary hidden sm:block">Vanprastha Foundation</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <HashLink smooth key={link.name} to={link.path} className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                                {link.name}
                            </HashLink>
                        ))}
                        <Link to="/contribute" className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <Heart className="w-4 h-4 mr-2" />
                            Contribute
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <HashLink
                                smooth
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </HashLink>
                        ))}
                        <Link
                            to="/contribute"
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-green-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Contribute
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
