{ name: 'About', path: '/#about' },
{ name: 'Initiatives', path: '/#initiatives' },
{ name: 'Volunteer', path: '/volunteer' },
    ];

{
    navLinks.map((link) => (
        <HashLink smooth key={link.name} to={link.path} className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
            {link.name}
        </HashLink>
    ))
}
<Link to="/contribute" className="bg-primary hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
    <Heart className="w-4 h-4 mr-2" />
    Contribute
</Link>
                </div >

    {/* Mobile Menu Button */ }
    < div className = "md:hidden flex items-center" >
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary focus:outline-none"
        >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
                </div >
            </div >
        </div >

    {/* Mobile Menu */ }
{
    isOpen && (
        <div className="md:hidden bg-white border-t">
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
    )
}
    </nav >
);
};

export default Navbar;
