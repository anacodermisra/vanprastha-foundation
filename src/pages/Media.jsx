import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Image as ImageIcon, X, ZoomIn, Filter, Layers, Mail } from 'lucide-react';

const Media = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = [
        { id: 'all', name: 'All Media' },
        { id: 'punarjeevan', name: 'Project Punarjeevan' },
        { id: 'medical', name: 'Medical & Dental Camps' },
        { id: 'hygiene', name: 'Menstrual Hygiene Drives' },
        { id: 'education', name: 'Education & Masti Ki Pathshala' },
        { id: 'cleanliness', name: 'Cleanliness Drives' },
        { id: 'community', name: 'Community & Culture' },
    ];

    const mediaItems = [
        // Project Punarjeevan
        {
            src: '/assets/punarjeevan1.jpg',
            title: 'Himalayan Reforestation in Action',
            category: 'punarjeevan',
            categoryName: 'Project Punarjeevan',
            description: 'Volunteers and villagers planting native saplings on wildfire-scarred hill slopes in Dunagiri.'
        },
        {
            src: '/assets/project-punarjeevan.jpg',
            title: 'Dunagiri Hillside Panorama',
            category: 'punarjeevan',
            categoryName: 'Project Punarjeevan',
            description: 'High-altitude Himalayan hills earmarked for ecological conservation.'
        },

        // Medical & Dental Camps
        {
            src: '/assets/medical_camp_5.jpg',
            title: 'Free Health Screening & Consultation',
            category: 'medical',
            categoryName: 'Medical & Dental Camps',
            description: 'Specialist doctors examining local villagers during the Ratkhal free health camp.'
        },
        {
            src: '/assets/medical_camp_1.jpg',
            title: 'Patient Diagnostic Session',
            category: 'medical',
            categoryName: 'Medical & Dental Camps',
            description: 'Providing comprehensive physical examinations and medicine distribution.'
        },
        {
            src: '/assets/medical_camp_3.jpg',
            title: 'Elderly & Women Consultations',
            category: 'medical',
            categoryName: 'Medical & Dental Camps',
            description: 'Ensuring accessible medical advice for senior citizens and village mothers.'
        },
        {
            src: '/assets/media_dr_rajeev_exercise.png',
            title: 'Medical Camp Newspaper Press Clipping',
            category: 'medical',
            categoryName: 'Medical & Dental Camps',
            description: 'Newspaper coverage of the free medical & dental camp organized with Dr. Rajeev Seth and BUDS.'
        },

        // Menstrual Hygiene Drives
        {
            src: '/assets/menstrual_hygiene_1.jpg',
            title: 'Women Hygiene Awareness Session',
            category: 'hygiene',
            categoryName: 'Menstrual Hygiene Drives',
            description: 'Village women gathering for open dialogue and education on reproductive health.'
        },
        {
            src: '/assets/menstrual_hygiene_3.png',
            title: 'Sanitary Pad Distribution',
            category: 'hygiene',
            categoryName: 'Menstrual Hygiene Drives',
            description: 'Director Mrs. Sunaina Misra distributing high-quality sanitary kits to participants.'
        },
        {
            src: '/assets/menstrual_hygiene_5.jpg',
            title: 'Kumaoni Cultural Celebration',
            category: 'hygiene',
            categoryName: 'Menstrual Hygiene Drives',
            description: 'Concluding the awareness camp with traditional Kumaoni music and dance.'
        },

        // Education & Masti Ki Pathshala
        {
            src: '/assets/klkhatterclass1.jpg',
            title: 'Masti Ki Pathshala Interactive Class',
            category: 'education',
            categoryName: 'Education & Masti Ki Pathshala',
            description: 'Former DRDO scientist Mr. K.L. Khatter mentoring enthusiastic village students.'
        },
        {
            src: '/assets/klkhatterclass2.jpg',
            title: 'Hands-on Science & Mentorship',
            category: 'education',
            categoryName: 'Education & Masti Ki Pathshala',
            description: 'Children engaging in experiential learning and curiosity-driven science discussions.'
        },

        // Cleanliness & Sanitation Drives
        {
            src: '/assets/cleanliness_1.jpg',
            title: 'Village Cleanliness Drive',
            category: 'cleanliness',
            categoryName: 'Cleanliness Drives',
            description: 'Volunteers and villagers clearing plastic waste from natural streams and pathways.'
        },
        {
            src: '/assets/cleanliness_2.jpg',
            title: 'Youth & Women Leading Sanitation',
            category: 'cleanliness',
            categoryName: 'Cleanliness Drives',
            description: 'Promoting Swachh Bharat ideals with grassroots community participation.'
        },

        // Community & Culture
        {
            src: '/assets/community-group.jpg',
            title: 'Ratkhal Village Community Banner',
            category: 'community',
            categoryName: 'Community & Culture',
            description: 'Children, elders, and volunteers united under the Vanprastha Foundation banner.'
        },
        {
            src: '/assets/kumaoni women.jpg',
            title: 'Kumaoni Heritage & Tradition',
            category: 'community',
            categoryName: 'Community & Culture',
            description: 'Preserving local customs, traditional crafts, and indigenous ecological wisdom.'
        },
        {
            src: '/assets/award_sardar_patel.jpg',
            title: 'Sardar Patel Award Ceremony',
            category: 'community',
            categoryName: 'Community & Culture',
            description: 'Founder CA Alok Misra receiving the Sardar Patel Award from renowned actress and Parliamentarian Mrs. Hema Malini.'
        }
    ];

    const filteredItems = activeCategory === 'all'
        ? mediaItems
        : mediaItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24 font-display">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                        <Layers className="w-3.5 h-3.5" /> Visual Archive
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Media & <span className="text-primary italic">Photo Gallery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Explore authentic moments, field snapshots, and documented milestones from our environmental, healthcare, and educational initiatives across Uttarakhand.
                    </p>
                </AnimatedSection>

                {/* Category Filter Tabs */}
                <AnimatedSection delay={0.1} className="mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-5xl mx-auto">
                        {categories.map((cat) => {
                            const count = cat.id === 'all'
                                ? mediaItems.length
                                : mediaItems.filter(m => m.category === cat.id).length;
                            const isActive = activeCategory === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                                        isActive
                                            ? 'bg-primary text-slate-900 shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>{cat.name}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-extrabold ${
                                        isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {filteredItems.map((item, idx) => (
                        <AnimatedSection key={idx} delay={Math.min((idx % 8) * 0.05, 0.4)}>
                            <div
                                onClick={() => setSelectedImage(item)}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-sm text-slate-900 p-2.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                                            <ZoomIn className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                                        {item.categoryName}
                                    </span>
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <h3 className="font-bold text-slate-900 text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs line-clamp-2 mt-1 font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="bg-slate-900 flex items-center justify-center p-4 max-h-[65vh] overflow-hidden">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl"
                                />
                            </div>

                            <div className="p-6 md:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                        {selectedImage.categoryName}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{selectedImage.title}</h3>
                                    <p className="text-slate-600 text-sm md:text-base font-medium mt-1">{selectedImage.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-all shrink-0"
                                >
                                    Close Preview
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Media Inquiries Contact Banner */}
                <AnimatedSection delay={0.3}>
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">Press, Film & High-Resolution Requests</h4>
                                <p className="text-slate-600 text-sm font-medium">
                                    Need high-resolution footage, press kits, or photo permissions? Reach out directly to our communications team.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=foundationvanprastha@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-green-600 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all shrink-0 text-sm shadow-sm"
                        >
                            foundationvanprastha@gmail.com
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Media;
