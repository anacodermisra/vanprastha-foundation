import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ShieldCheck, FileText, CheckCircle, Scale, Building } from 'lucide-react';

const Governance = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24 font-display">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3 block">
                        Good Governance & Transparency
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Transparent Operations, <br />
                        <span className="text-primary italic">Maximum Impact</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Trust is the bedrock of our foundation. We maintain complete transparency in our financial allocations, ensuring every rupee accelerates our ecological and community missions in the Himalayas.
                    </p>
                </AnimatedSection>

                {/* Compliance & Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <AnimatedSection delay={0.1}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center h-full">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">12A & 80G Certified</h3>
                            <p className="text-slate-600 text-sm font-medium">All donations made to Vanprastha Foundation are eligible for tax deductions under section 80G.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center h-full">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Financial Audits</h3>
                            <p className="text-slate-600 text-sm font-medium">Audited annually by independent certified chartered accountants for complete financial rigor.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center h-full">
                            <div className="w-12 h-12 rounded-2xl bg-accent/20 text-slate-900 flex items-center justify-center mx-auto mb-4">
                                <Building className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Registered Trust</h3>
                            <p className="text-slate-600 text-sm font-medium">Formally registered non-profit trust operating under the Indian Trusts Act with clear statutory mandates.</p>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Notice Card */}
                <AnimatedSection delay={0.4}>
                    <div className="bg-white p-10 rounded-3xl border border-dashed border-slate-300 text-center shadow-sm">
                        <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">Public Disclosure & Annual Reports</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto font-medium mb-6">
                            We are committed to open access for all our supporters. If you require detailed financial disclosures, activity summaries, or statutory compliance filings, please write to us directly.
                        </p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=foundationvanprastha@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all text-sm"
                        >
                            Request Compliance Documents
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Governance;
