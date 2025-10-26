'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp: React.FC = () => {
    return (
        <a
            href="https://wa.me/522212141679?text=Hola,%20quiero%20más%20información%20sobre%20Kaelus%20TV"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={32} className="drop-shadow-lg" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold shadow-lg">
                ¿Necesitas ayuda?
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
