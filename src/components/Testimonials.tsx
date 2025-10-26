import React from 'react';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="max-w-3xl w-full mx-auto text-center">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-card-background p-8 rounded-xl border border-border-color"
                >
                    <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6">&quot;{testimonial.message}&quot;</p>
                    <div className="flex items-center justify-center">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
