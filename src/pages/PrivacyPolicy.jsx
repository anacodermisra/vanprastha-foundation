import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            When you visit Vanprastha Foundation (https://vanprasthafoundation.netlify.app/), we may collect personal information such as your name, email address, phone number, and payment details when you voluntarily provide them (e.g., while making a donation or signing up for newsletters).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To process donations and issue tax-exemption certificates.</li>
                            <li>To communicate with you regarding our initiatives, detailed updates, and campaigns.</li>
                            <li>To improve our website functionality and user experience.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the internet is 100% secure. We do not sell or share your personal data with third-party marketers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                        <p className="mb-4">
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                        <p className="mb-4">
                            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <address className="not-italic">
                            <strong>Vanprastha Foundation</strong><br />
                            Khet - 267, 269 ,275, Khata no. 16, Ratkhal, Dunagiri, Almora,<br />
                            Ranikhet, Uttarakhand-263653<br />
                            Email: <a href="mailto:foundationvanprastha@gmail.com" className="text-accent hover:underline">foundationvanprastha@gmail.com</a>
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
