import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "General",
            questions: [
                {
                    q: "What is Vanprastha Foundation's primary mission?",
                    a: "Vanprastha Foundation is dedicated to the ecological restoration of the Himalayan region, rural health empowerment, child education ('Masti Ki Pathshala'), and sustainable community development in Uttarakhand."
                },
                {
                    q: "Where is the foundation based?",
                    a: "Our registered field head office is situated in Village Ratkhal, PO Dunagiri, Dwarahat, Almora District, Uttarakhand (263653), with our liaison office in Tagore Garden, New Delhi."
                }
            ]
        },
        {
            category: "Donations & Contributions",
            questions: [
                {
                    q: "Are donations tax-exempt?",
                    a: "Yes, all donations made to Vanprastha Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act."
                },
                {
                    q: "How can I contribute online?",
                    a: "You can donate securely via our official Razorpay portal (cards, netbanking, UPI) or directly via UPI / bank transfer."
                },
                {
                    q: "Can I sponsor a specific initiative like tree planting or medical camps?",
                    a: "Absolutely! You can choose to contribute directly toward Project Punarjeevan (tree plantation), Medical & Dental Camps, Menstrual Hygiene Drives, or Educational materials for village kids."
                }
            ]
        },
        {
            category: "Volunteering & Visits",
            questions: [
                {
                    q: "Can I volunteer on-ground in Uttarakhand?",
                    a: "Yes! We welcome enthusiastic volunteers for plantation drives, medical camps, teaching sessions, and village cleanliness programs. Submit a form via our Volunteer page to get started."
                },
                {
                    q: "Do you offer remote volunteering?",
                    a: "Yes, we regularly collaborate with remote volunteers for digital design, content writing, campaign coordination, and tech support."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24 font-display">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block">
                        Common Questions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Frequently Asked <span className="text-primary italic">Questions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Find answers to common questions about our initiatives, contributions, tax benefits, and volunteering.
                    </p>
                </AnimatedSection>

                {/* FAQ Sections */}
                <div className="space-y-10 mb-16">
                    {faqs.map((cat, cIdx) => (
                        <AnimatedSection key={cIdx} delay={cIdx * 0.1}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-200 pb-3">
                                <HelpCircle className="w-6 h-6 text-primary" /> {cat.category}
                            </h2>
                            <div className="space-y-4">
                                {cat.questions.map((item, qIdx) => {
                                    const indexKey = `${cIdx}-${qIdx}`;
                                    const isOpen = openIndex === indexKey;
                                    return (
                                        <div
                                            key={qIdx}
                                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : indexKey)}
                                                className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg text-slate-900 hover:text-primary transition-colors"
                                            >
                                                <span>{item.q}</span>
                                                <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium text-base border-t border-slate-50 pt-4">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Contact Banner */}
                <AnimatedSection delay={0.4}>
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
                        <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h3>
                        <p className="text-slate-600 mb-6 font-medium">We're here to help! Feel free to reach out to us directly.</p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=foundationvanprastha@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-green-600 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all shrink-0 text-sm shadow-sm"
                        >foundationvanprastha@gmail.com
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default FAQ;
