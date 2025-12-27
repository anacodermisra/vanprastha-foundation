import React, { useEffect } from 'react';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-primary mb-8">Terms and Conditions</h1>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
                    <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using the website of Vanprastha Foundation (https://vanprasthafoundation.netlify.app/), you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
                        <p className="mb-4">
                            You agreed to use this site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                        <p className="mb-4">
                            The content, layout, design, data, and graphics on this website are protected by intellectual property laws. You may not copy, reproduce, republish, download, post, broadcast, transmit, make available to the public, or otherwise use our content in any way except for your own personal, non-commercial use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            Vanprastha Foundation will not be liable for any damages, including indirect or consequential damages, or any damages arising from the use or loss of use, data, or profits, whether in contract, negligence or other tortious action, arising from or in connection with the use of this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
                        <p className="mb-4">
                            Vanprastha Foundation reserves the right to vary these terms of use at any time by posting changes online. Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
