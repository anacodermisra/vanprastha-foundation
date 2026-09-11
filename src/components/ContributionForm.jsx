import React, { useState } from 'react';
import { Heart, Loader, QrCode, Copy, Check } from 'lucide-react';

import upiQr from '../assets/upi-qr.png'; // Make sure this asset exists or is created

const ContributionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        consent: false,
    });
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const upiId = "vanprastha@upi"; // Replace with actual UPI ID

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate network delay for "Saving to Google Sheets"
        setTimeout(() => {
            console.log('Saving to sheets:', formData);
            alert('Thank you! Please ensure you have completed the payment via UPI. We have recorded your details.');
            setLoading(false);
            setFormData({
                name: '',
                email: '',
                amount: '',
                consent: false,
            });
        }, 1500);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Side: UPI QR Code */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <h4 className="text-xl font-serif font-bold text-gray-800 mb-4">Scan to Contribute</h4>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
                    {/* Placeholder setup - ensuring functionality even if image missing */}
                    <img
                        src={upiQr}
                        alt="UPI QR Code"
                        className="w-48 h-48 object-contain"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200?text=QR+Code"; }}
                    />
                </div>
                <p className="text-sm text-gray-500 mb-2">or pay via UPI ID</p>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-md border border-gray-300">
                    <span className="font-mono text-gray-700 font-medium">{upiId}</span>
                    <button onClick={copyToClipboard} className="text-gray-500 hover:text-primary transition-colors">
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Your Details</h3>
                <p className="text-sm text-gray-600 mb-6">Please fill this form after making the payment so we can acknowledge your support.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                            <p className="text-gray-500 text-xs">Display my name in the "Thank You" slider.</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                    >
                        {loading ? <Loader className="animate-spin mr-2" /> : <Heart className="mr-2 fill-current" />}
                        {loading ? 'Processing...' : 'I Have Contributed'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContributionForm;
