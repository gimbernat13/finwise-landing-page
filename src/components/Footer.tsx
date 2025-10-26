import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/kaelus/kaleus-logo.webp"
                            alt="Kaelus TV"
                            width={100}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>

                    <a
                        href="https://wa.me/522212141679?text=Hola,%20quiero%20más%20información%20sobre%20Kaelus%20TV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground-accent hover:text-primary mb-3 transition-colors"
                    >
                        <FaWhatsapp size={20} />
                        <span>+52 221 214 1679</span>
                    </a>

                    <a
                        href="tel:+522212141679"
                        className="flex items-center gap-2 text-foreground-accent hover:text-primary transition-colors"
                    >
                        <FaPhone size={18} />
                        <span>+52 221 214 1679</span>
                    </a>

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p>
            </div>
        </footer>
    );
};

export default Footer;
