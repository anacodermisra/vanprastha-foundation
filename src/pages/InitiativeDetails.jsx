import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../context/ContentContext';

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
        <div className="min-h-screen bg-light pt-24 pb-16">
            <div className="container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Main Image */}
                    <div className="h-64 md:h-96 w-full relative">
                        <img
                            src={initiative.images[0]}
                            alt={initiative.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                            {initiative.title}
                        </h1>

                        {initiative.date && (
                            <div className="inline-block bg-accent text-dark font-bold px-4 py-1 rounded-full text-sm mb-6">
                                {initiative.date}
                            </div>
                        )}

                        <div className="prose prose-lg text-gray-700 max-w-none">
                            <p className="whitespace-pre-line leading-relaxed">
                                {initiative.fullContent}
                            </p>
                        </div>

                        {/* Additional Images Grid */}
                        {initiative.images.length > 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                {initiative.images.slice(1).map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${initiative.title} ${idx + 2}`}
                                        className="rounded-xl shadow-md w-full h-64 object-cover"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InitiativeDetails;
