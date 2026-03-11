"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#expertise" },
        { name: "Projets", href: "#projets" },
        { name: "Certificats", href: "#certificats" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const element = document.getElementById(link.href.replace("#", ""));
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 md:px-8 py-4 glass mx-4 mt-4 rounded-2xl transition-all duration-500">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-300 uppercase tracking-widest text-[10px] relative group ${isActive ? "text-accent font-bold" : "hover:text-foreground"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile menu trigger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.div
                        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-foreground"
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-foreground"
                    />
                    <motion.div
                        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-foreground"
                    />
                </button>
            </nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-3xl font-bold tracking-tighter transition-colors ${isActive ? "text-accent" : "hover:text-accent/70"
                                        }`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
