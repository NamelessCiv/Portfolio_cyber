"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Profil", href: "#profil" },
    { name: "Compétences", href: "#competences" },
    { name: "Projets", href: "#projets" },
    { name: "Certifications", href: "#certificats" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );

        ["home", ...navLinks.map((l) => l.href.slice(1))].forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-rule">
                <nav className="frame h-14 flex items-center justify-between gap-6">
                    <a href="#home" className="flex items-baseline gap-3" aria-label="Retour en haut">
                        <span className="font-bold tracking-tight text-lg [font-stretch:115%]">JYI</span>
                        <span className="label text-muted hidden sm:inline">Analyste SOC</span>
                    </a>

                    <ul className="hidden md:flex items-center gap-7">
                        {navLinks.map((link, i) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`group flex items-baseline gap-1.5 text-sm transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`}
                                    >
                                        <span className={`font-mono text-[10px] ${isActive ? "text-signal" : ""}`}>
                                            0{i + 1}
                                        </span>
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden lg:flex items-center gap-2 label text-muted">
                        <span className="w-1.5 h-1.5 bg-signal" />
                        Disponible
                    </div>

                    <button
                        className="md:hidden label py-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? "Fermer" : "Menu"}
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
                        className="fixed inset-0 top-14 z-40 bg-ink text-paper md:hidden"
                    >
                        <ul className="frame pt-10 flex flex-col">
                            {navLinks.map((link, i) => (
                                <li key={link.name} className="border-b border-paper/15">
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-baseline justify-between py-5"
                                    >
                                        <span className="text-4xl font-semibold tracking-tight [font-stretch:110%]">{link.name}</span>
                                        <span className="font-mono text-xs text-signal">0{i + 1}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
