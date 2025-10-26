'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

interface Movie {
    id: number;
    title: string;
    image: string;
    badge?: string;
}

const movies: Movie[] = [
    { id: 1, title: 'Teléfono Negro', image: '/kaelus/01cfbaf0-telefono-negro-2.-cortesia-universl-pictures.jpg', badge: 'Nuevo' },
    { id: 2, title: 'Monster: Ed Gein', image: '/kaelus/Monster-Ed-Gein-2.webp', badge: 'Nuevo' },
    { id: 3, title: 'Bad', image: '/kaelus/bad.jpg' },
    { id: 6, title: 'Roses', image: '/kaelus/roses.jpg' },
    // { id: 7, title: 'Featured', image: '/kaelus/maxresdefault.jpg' },
    { id: 8, title: 'New Release', image: '/kaelus/6f3be03f-b755-41c5-9a04-1a18cee8a242.jpeg' },
    { id: 9, title: 'Action', image: '/kaelus/d2407e43649b8beb608a0048dc344e8f95388a1e96e1ea4fb1209478fadf9f4c.png' },
    { id: 10, title: 'Latest', image: '/kaelus/484827474_1163661348882596_2184960687926068531_n.jpg' },
];

const MovieCarousel: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isPaused) return;

        const scrollSpeed = 0.5;
        let animationFrameId: number;

        const autoScroll = () => {
            if (scrollContainer && !isDragging) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Reset scroll when reaching the end
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging, isPaused]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 pb-24 md:pb-32 px-5 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Estrenos</h2>

                <div
                    className="relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll left"
                    >
                        <HiChevronLeft size={32} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Duplicate movies for infinite scroll effect */}
                        {[...movies, ...movies].map((movie, index) => (
                            <div
                                key={`${movie.id}-${index}`}
                                className="flex-none w-48 md:w-56 group/item"
                            >
                                <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                                    <Image
                                        src={movie.image}
                                        alt={movie.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover/item:scale-105 pointer-events-none"
                                        draggable={false}
                                    />
                                    {movie.badge && index < movies.length && (
                                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                                            {movie.badge}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll right"
                    >
                        <HiChevronRight size={32} />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default MovieCarousel;
