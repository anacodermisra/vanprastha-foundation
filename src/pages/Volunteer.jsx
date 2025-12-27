import React, { useState } from 'react';
import { Send, Users, TreePine, HandHeart, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import { sendVolunteerEmail } from '../services/emailService';

const Volunteer = () => {
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
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div className="min-h-screen bg-light pt-12 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Join Our Community</h1>
                    <p className="text-lg text-gray-600">
                        Become a part of the change. Volunteer your time and skills to help us build a sustainable future.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Info */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <TreePine className="w-10 h-10 text-primary mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Plantation Drives</h3>
                                <p className="text-sm text-gray-500">Help us restore green cover in rural areas.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <Users className="w-10 h-10 text-secondary mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Community Outreach</h3>
                                <p className="text-sm text-gray-500">Spread awareness about health and hygiene.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <HandHeart className="w-10 h-10 text-accent mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Medical Camps</h3>
                                <p className="text-sm text-gray-500">Assist doctors and organize health camps.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Volunteer Registration</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                >
                                    <option value="plantation">Tree Plantation</option>
                                    <option value="education">Education & Teaching</option>
                                    <option value="medical">Medical Camps</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
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
                                    <span>Thank you! Your registration has been sent.</span>
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
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Sign Up
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
