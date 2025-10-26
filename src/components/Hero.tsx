import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 min-h-screen"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full h-full">
                <Image
                    src="/images/hero-bg.webp"
                    alt="Hero background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background z-10">
            </div>

            <div className="text-center relative z-20">
                {/* Flash Badge */}
                <div className="inline-block mb-4 animate-pulse">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        🔥 OFERTA ESPECIAL - 3 DISPOSITIVOS
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl md:leading-tight font-black text-foreground max-w-lg md:max-w-4xl mx-auto drop-shadow-2xl">
                    {heroDetails.heading}
                </h1>

                <p className="mt-6 text-2xl md:text-3xl font-semibold text-foreground max-w-2xl mx-auto drop-shadow-lg">
                    {heroDetails.subheading}
                </p>

                {/* Value Props */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 text-foreground">
                        <span className="text-2xl">✓</span>
                        <span className="text-lg font-semibold">28,000 Películas</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                        <span className="text-2xl">✓</span>
                        <span className="text-lg font-semibold">6,000 Series</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                        <span className="text-2xl">✓</span>
                        <span className="text-lg font-semibold">2,000 Canales</span>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-fit mx-auto">
                    <button className="relative bg-gradient-to-r from-primary to-primary-accent text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl [animation:bounce_1s_ease-in-out_1] hover:animate-none group">
                        <span className="relative z-10">CONTRATAR AHORA</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                    <div className="text-foreground-accent text-sm">
                        <p className="font-semibold">💳 Sin compromisos</p>
                        <p>Cancela cuando quieras</p>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 text-foreground-accent text-sm">
                    <p className="flex items-center justify-center gap-2">
                        <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                        <span className="font-semibold">Miles de clientes satisfechos</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
