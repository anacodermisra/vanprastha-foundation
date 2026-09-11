import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import AnimatedSection from '../components/AnimatedSection';

// Imports checked and verified



const AnimatedCounter = ({ target, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const [hasAnimated, setHasAnimated] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTime;
                    const duration = 2000; // 2 seconds

                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        // Ease out cubic
                        const easeProgress = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(easeProgress * target));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(target);
                        }
                    };

                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, hasAnimated]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const useScrollToHash = () => {
    const { hash } = useLocation();

    React.useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
};

const Home = () => {
    useScrollToHash();
    const { content, loading } = useContent();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>;
    }

    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light font-display text-slate-900 antialiased">
            {/* Hero Section */}
            {/* Hero Section - Boxed Auto-Scrolling Gallery with Refined Left-Aligned Overlay */}
            <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[360px] md:min-h-[480px] max-h-[580px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-900">
                        {/* Carousel Slides */}
                        <div className="absolute inset-0 z-0">
                            {(() => {
                                // Strictly landscape images with proper aspect ratios (no portrait images like rural-women.jpg)
                                const images = [
                                    "/assets/hero-banner.jpg",
                                    "/assets/award_sardar_patel.jpg",
                                    "/assets/punarjeevan1.jpg",
                                    "/assets/klkhatterclass1.jpg",
                                    "/assets/community-group.jpg",
                                    "/assets/medical_camp_5.jpg",
                                    "/assets/menstrual_hygiene_3.png",
                                    "/assets/menstrual_hygiene_5.jpg"
                                ];
                                const [index, setIndex] = React.useState(0);

                                React.useEffect(() => {
                                    const timer = setInterval(() => {
                                        setIndex((prev) => (prev + 1) % images.length);
                                    }, 4500);
                                    return () => clearInterval(timer);
                                }, [images.length]);

                                return (
                                    <div className="h-full w-full relative">
                                        {images.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: i === index ? 1 : 0
                                                }}
                                                transition={{ duration: 1.0, ease: "easeInOut" }}
                                                className="absolute inset-0"
                                            >
                                                {/* Directional gradient so left-aligned text is crisp and readable without washing out the photo */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />
                                                <img
                                                    src={img}
                                                    alt={`Slide ${i}`}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </motion.div>
                                        ))}

                                        {/* Minimalist Indicators */}
                                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                            {images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setIndex(i)}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                    className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* Refined Left-Aligned Content Overlay */}
                        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 md:px-14 lg:px-16">
                            <div className="max-w-xl text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="flex flex-col gap-4"
                                >
                                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                        Nurturing <span className="text-accent">Nature,</span> <br />
                                        Empowering Communities
                                    </h1>
                                    <p className="text-slate-200 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-lg">
                                        Dedicated to high-end environmental conservation and sustainable community development focused on the Uttarakhand hills.
                                    </p>
                                    <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
                                        <Link
                                            to="/contribute"
                                            className="inline-flex items-center justify-center rounded-xl h-11 sm:h-12 px-6 bg-primary hover:bg-secondary text-white text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-primary/30"
                                        >
                                            Join Our Mission
                                        </Link>
                                        <Link
                                            to="/#about"
                                            className="inline-flex items-center justify-center rounded-xl h-11 sm:h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 text-sm sm:text-base font-semibold transition-all"
                                        >
                                            See Our Impact
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-background-light border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                            <AnimatedSection>
                                <h2 className="text-primary text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{content.about.title}</h2>
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium mb-8">
                                    {content.about.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 min-w-[170px]">
                                        <span className="text-primary font-bold text-3xl block mb-1">
                                            <AnimatedCounter target={2000} suffix="+" />
                                        </span>
                                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Trees Sown</span>
                                    </div>
                                    <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 min-w-[170px]">
                                        <span className="text-secondary font-bold text-3xl block mb-1">
                                            <AnimatedCounter target={1000} suffix="+" />
                                        </span>
                                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Lives Impacted</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2} className="relative">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                    <img src="/assets/community-group.jpg" alt="Community" className="w-full h-full object-cover" />
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {content.about.objectives.map((obj, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.1}>
                                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                                        <h3 className="text-primary text-xl font-bold mb-3">{obj.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{obj.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Initiatives Section */}
            <section id="initiatives" className="py-24 px-4 @container max-w-7xl mx-auto w-full">
                <AnimatedSection className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">Our Initiatives</h2>
                        <p className="text-slate-500 text-lg mt-2 font-medium italic underline decoration-primary decoration-4 underline-offset-8">Making a difference where it matters most</p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                    {/* Map through the initiatives using the Stitch card design */}
                    {content.initiatives.previous.concat(content.initiatives.upcoming).map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <Link to={`/initiative/${item.id}`} className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 h-full">
                                <div className="md:w-1/3 overflow-hidden">
                                    <div
                                        className="h-full min-h-[240px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${item.images && item.images.length > 0 ? item.images[0] : '/assets/logo.png'}")` }}
                                    />
                                </div>
                                <div className="p-8 md:w-2/3 relative bg-white flex flex-col justify-center">
                                    <h3 className="text-slate-900 text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-3 font-medium">{item.description}</p>
                                    <div className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-3 transition-all uppercase tracking-widest">
                                        Full Story <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Support CTA Section */}
            <section className="mx-4 my-12 p-10 md:p-16 rounded-3xl bg-background-dark text-white relative overflow-hidden max-w-7xl xl:mx-auto shadow-2xl">
                <AnimatedSection>
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                        <Heart className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-8">
                        <div className="text-center md:text-left md:max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">Support Our Mission</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">Every donation directly funds our conservation projects and helps protect our planet's future.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 shrink-0">
                            <a
                                href="https://pages.razorpay.com/vanprasthafoundation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center min-w-[180px] h-14 bg-primary text-slate-900 text-lg font-bold rounded-xl hover:brightness-110 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                            >
                                Donate Now
                            </a>
                            <Link to="/#about" className="flex items-center justify-center min-w-[180px] h-14 bg-white/10 text-white text-lg font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Home;
