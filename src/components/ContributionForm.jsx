import React, { useState } from 'react';
import { handlePayment } from '../services/razorpay';
import { Heart, Loader } from 'lucide-react';

const ContributionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        consent: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // 1. Save to Google Sheets (Mock)
        console.log('Saving to sheets:', formData);

        // 2. Trigger Payment
        await handlePayment(
            formData.amount,
            (response) => {
                console.log('Payment Success:', response);
                alert('Thank you for your contribution! Payment ID: ' + response.razorpay_payment_id);
                setLoading(false);
                // Reset form or redirect
            },
            (error) => {
                console.error('Payment Error:', error);
                setLoading(false);
            }
        );
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-lg mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Make a Difference</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contribution Amount (₹)</label>
                    <input
                        type="number"
                        name="amount"
                        required
                        min="1"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="1000"
                    />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="font-medium text-gray-700">Public Recognition</label>
                        <p className="text-gray-500">I agree to have my name and photo displayed in the "Thank You" slider.</p>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                    {loading ? <Loader className="animate-spin mr-2" /> : <Heart className="mr-2 fill-current" />}
                    {loading ? 'Processing...' : 'Contribute Now'}
                </button>
            </form>
        </div>
    );
};

export default ContributionForm;
