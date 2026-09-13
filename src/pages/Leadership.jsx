import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Heart, Users, HandHeart, Quote, Award, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';

const Leadership = () => {
    const { lang } = useContent();

    const founderData = {
        name: "CA(Dr.) Alok Misra",
        designation: lang === 'en' ? "Founder & Promoter" : "संस्थापक एवं प्रवर्तक",
        image: "/images/founder.jpg",
        highlightQuote: lang === 'en'
            ? "Our journey is rooted in a simple belief: every individual deserves dignity, and our environment deserves respect."
            : "हमारी यात्रा एक सरल विश्वास पर टिकी है: प्रत्येक व्यक्ति गरिमा का हकदार है, और हमारे पर्यावरण को सम्मान मिलना चाहिए।",
        bio: lang === 'en' ? [
            "CA(Dr.) Alok Misra is the visionary founder and guiding force behind Vanprastha Foundation. With a profound commitment to sustainable development and Himalayan ecological protection, he established the foundation to address environmental degradation, healthcare access, and quality rural education across Uttarakhand.",
            "Under his stewardship, the foundation has planted thousands of native trees across the degraded hills of Dunagiri and Almora, set up free multi-specialty healthcare camps for remote villages, and spearheaded rural educational enrichment.",
            "His transformative social contributions were honored with the prestigious Sardar Patel Award, presented by veteran actress and Parliamentarian Mrs. Hema Malini in recognition of outstanding social impact and environmental leadership."
        ] : [
            "सीए (डॉ.) आलोक मिश्रा वनप्रस्थ फाउंडेशन के दूरदर्शी संस्थापक और मार्गदर्शक हैं। सतत विकास और हिमालयी पारिस्थितिकी संरक्षण के प्रति गहरी प्रतिबद्धता के साथ, उन्होंने उत्तराखंड में पर्यावरण संरक्षण, स्वास्थ्य सेवाओं और ग्रामीण शिक्षा को सशक्त बनाने के लिए इस फाउंडेशन की स्थापना की।",
            "उनके नेतृत्व में फाउंडेशन ने दूनागिरी और अल्मोड़ा की पहाड़ियों में हजारों देशी पौधे रोपे हैं, दूरदराज के गांवों के लिए निःशुल्क बहु-विशेषज्ञता स्वास्थ्य शिविर आयोजित किए हैं, और ग्रामीण बच्चों की शिक्षा को संवारा है।",
            "उनके विशिष्ट सामाजिक योगदान के लिए उन्हें सुप्रसिद्ध अभिनेत्री और सांसद श्रीमती हेमा मालिनी द्वारा प्रतिष्ठित सरदार पटेल पुरस्कार से सम्मानित किया गया है।"
        ]
    };

    const directors = [
        {
            name: "Mrs. Sunaina Misra",
            designation: lang === 'en' ? "Director" : "निदेशक",
            image: "/images/director1.jpg",
            highlightQuote: lang === 'en'
                ? "Building sustainable solutions for the future of our rural communities."
                : "हमारे ग्रामीण समुदायों के भविष्य के लिए स्थायी समाधान तैयार करना।",
            bio: lang === 'en' ? [
                "Mrs. Sunaina Misra directs community welfare and women empowerment initiatives at Vanprastha Foundation. She actively leads rural hygiene awareness camps, destigmatizing menstrual health and distributing sanitary hygiene kits across remote hill villages.",
                "Her compassionate leadership bridges healthcare gaps and fosters empathetic, trusting relationships with village women, elders, and families throughout the Kumaon region."
            ] : [
                "श्रीमती सुनैना मिश्रा वनप्रस्थ फाउंडेशन में सामुदायिक कल्याण और महिला सशक्तिकरण की पहलों का नेतृत्व करती हैं। वे ग्रामीण स्वच्छता जागरूकता शिविरों का आयोजन कर मासिक धर्म स्वास्थ्य से जुड़ी वर्जनाओं को दूर करने और सेनेटरी किट वितरित करने में अग्रणी भूमिका निभाती हैं।",
                "उनका संवेदनशील नेतृत्व कुमाऊं क्षेत्र की ग्रामीण महिलाओं और परिवारों के साथ एक मजबूत व भरोसेमंद रिश्ता कायम करता है।"
            ]
        },
        {
            name: "Anand Misra",
            designation: lang === 'en' ? "Director" : "निदेशक",
            image: "/images/director2.jpg",
            highlightQuote: lang === 'en'
                ? "Empowerment starts at the grassroots level, through education and healthcare."
                : "सशक्तिकरण ज़मीनी स्तर से शुरू होता है—शिक्षा और स्वास्थ्य सेवा के माध्यम से।",
            bio: lang === 'en' ? [
                "Anand Misra oversees strategic planning, ground operations, and youth outreach for Vanprastha Foundation. He leads on-the-ground volunteer drives for mass afforestation, free health diagnostics, and rural digital literacy.",
                "Passionate about youth involvement and sustainable technology, he works to connect modern community frameworks with Himalayan grassroots needs."
            ] : [
                "आनंद मिश्रा वनप्रस्थ फाउंडेशन की रणनीतिक योजना, ज़मीनी गतिविधियों और युवा सहभागिता की देखरेख करते हैं। वे बड़े पैमाने पर वनीकरण, निःशुल्क स्वास्थ्य जांच और ग्रामीण डिजिटल साक्षरता अभियानों का प्रत्यक्ष संचालन करते हैं।",
                "युवाओं की भागीदारी और आधुनिक तकनीक के प्रति समर्पित होकर, वे हिमालयी आवश्यकताओं को आधुनिक समाधानों से जोड़ने का कार्य करते हैं।"
            ]
        }
    ];

    const coreValues = [
        {
            title: lang === 'en' ? "Compassion" : "दया और करुणा",
            description: lang === 'en'
                ? "Serving with deep empathy and kindness for all living beings, human and nature alike."
                : "प्रकृति और मनुष्य दोनों के लिए गहरी सहानुभूति और संवेदनशीलता के साथ सेवा करना।",
            icon: Heart
        },
        {
            title: lang === 'en' ? "Community" : "सामुदायिक भावना",
            description: lang === 'en'
                ? "Building inclusive, resilient, and self-reliant rural networks rooted in local wisdom."
                : "स्थानीय परंपराओं और ज्ञान पर आधारित आत्मनिर्भर और सशक्त ग्रामीण नेटवर्क का निर्माण।",
            icon: Users
        },
        {
            title: lang === 'en' ? "Service" : "निःस्वार्थ सेवा",
            description: lang === 'en'
                ? "Action-oriented, transparent social impact that creates lasting positive change."
                : "कर्मठ और पारदर्शी सामाजिक प्रभाव जो जीवन में स्थायी सकारात्मक बदलाव लाए।",
            icon: HandHeart
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-24 font-display text-slate-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 block">
                        {lang === 'en' ? 'Our Stewardship' : 'हमारा नेतृत्व एवं मार्गदर्शन'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        {lang === 'en' ? (
                            <>Leadership & <span className="text-primary italic">Board of Directors</span></>
                        ) : (
                            <>नेतृत्व एवं <span className="text-primary italic">निदेशक मंडल</span></>
                        )}
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        {lang === 'en'
                            ? "Guided by Himalayan wisdom, dedicated social stewardship, and modern ethics to foster sustainable ecological restoration and community empowerment."
                            : "हिमालयी चेतना, समर्पित जनसेवा और आधुनिक नैतिकता से प्रेरित—उत्तराखंड के सतत पर्यावरण संरक्षण और ग्रामीण सशक्तिकरण के लिए प्रतिबद्ध।"}
                    </p>
                </AnimatedSection>

                {/* Founder Section - Featured Spotlight Card */}
                <AnimatedSection className="mb-20">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            {/* Founder Image */}
                            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[550px] bg-slate-900 overflow-hidden group">
                                <img
                                    src={founderData.image}
                                    alt={founderData.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        {lang === 'en' ? 'Founder Profile' : 'संस्थापक परिचय'}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{founderData.name}</h2>
                                    <p className="text-primary-light font-medium text-base text-accent">{founderData.designation}</p>
                                </div>
                            </div>

                            {/* Founder Bio & Quote */}
                            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50/50">
                                <div>
                                    {/* Quote Block */}
                                    <div className="relative mb-8 pl-6 border-l-4 border-primary bg-primary/5 py-4 px-6 rounded-r-2xl">
                                        <Quote className="w-8 h-8 text-primary/30 absolute -top-3 -left-4 bg-white rounded-full p-1 border border-primary/20" />
                                        <p className="text-lg md:text-xl font-serif italic font-semibold text-slate-800 leading-relaxed">
                                            "{founderData.highlightQuote}"
                                        </p>
                                    </div>

                                    {/* Bio Paragraphs */}
                                    <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                                        {founderData.bio.map((para, i) => (
                                            <p key={i} className={i === 0 ? "text-base md:text-lg text-slate-800 font-semibold" : "text-sm sm:text-base"}>
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Recognition Callout */}
                                <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-4 bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">
                                            {lang === 'en' ? 'Sardar Patel Award Recipient' : 'सरदार पटेल पुरस्कार से सम्मानित'}
                                        </h4>
                                        <p className="text-xs text-slate-600">
                                            {lang === 'en'
                                                ? 'Honored by Mrs. Hema Malini for pioneering social and ecological initiatives in Uttarakhand.'
                                                : 'उत्तराखंड में उत्कृष्ट सामाजिक एवं पर्यावरणीय पहलों के लिए श्रीमती हेमा मालिनी द्वारा सम्मानित।'}
                                        </p>
                                    </div>
                                    <Link to="/awards" className="ml-auto text-xs font-bold text-primary hover:underline whitespace-nowrap hidden sm:block">
                                        {lang === 'en' ? 'View Award →' : 'पुरस्कार देखें →'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Directors Section */}
                <div className="mb-20">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2 block">
                            {lang === 'en' ? 'Board Members' : 'निदेशक मंडल'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            {lang === 'en' ? 'Board of Directors' : 'निदेशक मंडल के सदस्य'}
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {directors.map((director, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.2}>
                                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden group">
                                        <img
                                            src={director.image}
                                            alt={director.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-2xl font-bold text-white mb-0.5">{director.name}</h3>
                                            <p className="text-accent font-medium text-sm">{director.designation}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col justify-between flex-grow">
                                        <div>
                                            <div className="mb-6 pl-4 border-l-4 border-primary/60 bg-slate-50 py-3 px-4 rounded-r-xl">
                                                <p className="text-slate-800 font-serif italic text-sm sm:text-base font-semibold">
                                                    "{director.highlightQuote}"
                                                </p>
                                            </div>

                                            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                                                {director.bio.map((p, pIdx) => (
                                                    <p key={pIdx}>{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Core Values Section */}
                <AnimatedSection className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2 block">
                            {lang === 'en' ? 'What Drives Us' : 'हमारी मूल प्रेरणा'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            {lang === 'en' ? 'Our Core Values' : 'हमारे मूल मूल्य'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {coreValues.map((val, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                        <val.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                        {val.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Himalayan Philosophy Banner */}
                <AnimatedSection>
                    <div className="bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden text-center">
                        <Quote className="w-20 h-20 text-white/10 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-serif italic font-bold max-w-3xl mx-auto mb-4 leading-snug">
                            {lang === 'en'
                                ? '"True leadership in these mountains requires a heart that beats in sync with the forest."'
                                : '"इन पर्वतों में सच्चे नेतृत्व के लिए एक ऐसे हृदय की आवश्यकता होती है जो वनों के साथ धड़कता हो।"'}
                        </h3>
                        <p className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-8">
                            {lang === 'en' ? 'Board Philosophy • Vanprastha Foundation' : 'मार्गदर्शक दर्शन • वनप्रस्थ फाउंडेशन'}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/volunteer"
                                className="px-6 py-3 rounded-xl bg-primary hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all"
                            >
                                {lang === 'en' ? 'Join Our Volunteer Network' : 'हमारे स्वयंसेवक नेटवर्क से जुड़ें'}
                            </Link>
                            <Link
                                to="/governance"
                                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
                            >
                                {lang === 'en' ? 'Governance & Transparency' : 'शासन और पारदर्शिता'}
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Leadership;
