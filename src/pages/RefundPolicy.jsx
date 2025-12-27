import React, { useEffect } from 'react';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-primary mb-8">Refund Policy</h1>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Donation Policy</h2>
                        <p className="mb-4">
                            We are grateful for your donation and support of our organization. Donations are generally non-refundable. If you have made an error in making your donation or change your mind about contributing to our organization, please contact us. Refunds are returned using the original method of payment. If you made your donation by credit card, your refund will be credited to that same credit card.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Automated Recurring Donation Cancellation</h2>
                        <p className="mb-4">
                            Ongoing support is important to enabling projects to continue their work, so we encourage donors to continue to contribute to projects over time. But if you must cancel your recurring donation, please notify us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Request</h2>
                        <p className="mb-4">
                            If you believe that there has been an error with your donation, please contact us within 7 days of the transaction date at <a href="mailto:foundationvanprastha@gmail.com" className="text-accent hover:underline">foundationvanprastha@gmail.com</a>. We will review your request and process a refund if appropriate.
                        </p>
                        <p className="mb-4">
                            Please include specific details such as date, donation amount, donor name, and the nature of the error in your correspondence.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
