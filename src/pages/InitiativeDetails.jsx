import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import AnimatedSection from '../components/AnimatedSection';

const InitiativeDetails = () => {
    const { id } = useParams();
    const { content } = useContent();

    // Find the initiative in previous or upcoming lists
    const initiative = [...content.initiatives.previous, ...content.initiatives.upcoming]
        .find(item => item.id === id);

    if (!initiative) {
        return <div className="text-center py-20">Initiative not found</div>;
    }

    return (
        <div className="min-h-screen bg-background-light font-display text-slate-900 pb-16">
            <Link to="/#initiatives" className="fixed top-24 left-4 md:left-8 z-50 inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all w-12 h-12 rounded-full shadow-lg">
                <ArrowLeft className="w-6 h-6" />
            </Link>

            {/* Immersive Hero Section */}
            <div
                className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(16,34,21,0.9)), url("${initiative.images[0]}")` }}
            >
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                    <AnimatedSection delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
                            {initiative.title}
                        </h1>
                    </AnimatedSection>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-20">
                <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-w-4xl mx-auto">
                    <div className="p-8 md:p-16 lg:p-20">
                        <div className="prose prose-lg md:prose-xl text-slate-700 max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-relaxed">
                            {initiative.articleContent ? (
                                initiative.articleContent.map((block, index) => {
                                    if (block.type === 'heading') {
                                        return (
                                            <AnimatedSection key={index} delay={0.1}>
                                                <h2 className="text-3xl font-extrabold text-slate-900 mt-12 mb-6 tracking-tight">
                                                    {block.content}
                                                </h2>
                                            </AnimatedSection>
                                        );
                                    } else if (block.type === 'paragraph') {
                                        return (
                                            <AnimatedSection key={index} delay={0.1}>
                                                <p className="mb-6 leading-relaxed text-slate-600 font-medium">
                                                    {block.content}
                                                </p>
                                            </AnimatedSection>
                                        );
                                    } else if (block.type === 'image') {
                                        return (
                                            <AnimatedSection key={index} delay={0.1}>
                                                <figure className="my-10">
                                                    <img src={block.src} alt={block.caption || ""} className="rounded-2xl w-full shadow-lg" />
                                                    {block.caption && <figcaption className="text-sm text-slate-500 text-center mt-3 font-medium">{block.caption}</figcaption>}
                                                </figure>
                                            </AnimatedSection>
                                        )
                                    } else if (block.type === 'collage') {
                                        return (
                                            <AnimatedSection key={index} delay={0.1}>
                                                <figure className="my-10">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                                                        {block.images.map((src, i) => (
                                                            <img key={i} src={src} alt={block.caption || ""} className="w-full h-full object-cover rounded-xl shadow-md" />
                                                        ))}
                                                    </div>
                                                    {block.caption && <figcaption className="text-sm text-slate-500 text-center mt-3 font-medium">{block.caption}</figcaption>}
                                                </figure>
                                            </AnimatedSection>
                                        )
                                    }
                                    return null;
                                })
                            ) : (
                                <p className="whitespace-pre-line leading-relaxed text-slate-600 font-medium">
                                    {initiative.fullContent || initiative.description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Sticky Footer / Sidebar Equivalent CTA */}
                    <div className="bg-background-dark p-8 md:p-12 text-center text-white border-t border-slate-800 flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-4">Support This Initiative</h3>
                        <p className="text-slate-300 mb-8 max-w-lg">Your contribution directly enables Project Punarjeevan and other related efforts.</p>
                        <a
                            href="https://pages.razorpay.com/vanprasthafoundation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center min-w-[200px] h-14 bg-primary text-slate-900 text-lg font-bold rounded-xl hover:brightness-110 transition-all shadow-xl hover:-translate-y-1"
                        >
                            Contribute Now
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InitiativeDetails;
