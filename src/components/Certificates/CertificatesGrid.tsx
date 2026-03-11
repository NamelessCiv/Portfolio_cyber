"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
    {
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "2026",
        id: "87YF734LJTDZ",
        description: "Acquisition des concepts fondamentaux de la cybersécurité, de l'éthique professionnelle et des outils d'analyse de menaces.",
        url: "https://coursera.org/share/d688df7fbd58628c75f85f30aad87a42"
    },
    {
        title: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "2026",
        id: "NX25EY4D4KFD",
        description: "Identification des menaces et vulnérabilités primaires, cadres de sécurité, outils SIEM et utilisation de playbooks de réponse aux incidents.",
        url: "https://coursera.org/share/5b28e86774b003371c614c4449477dd4"
    },
    {
        title: "Tools of the Trade: Linux and SQL",
        issuer: "Google",
        date: "2026",
        id: "YOY6LXBENDMX",
        description: "Bases des systèmes d'exploitation (Linux), gestion via Bash shell, et extraction d'informations depuis des bases de données relationnelles via SQL.",
        url: "https://coursera.org/share/0abf79b15b7a981efbc1db0cffc7e614"
    }
];

const CertificatesGrid = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section id="certificats" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background relative border-t border-white/5">
            <div className="mb-16 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Certifications <span className="text-foreground">Professionnelles</span></h2>
                <p className="text-secondary max-w-xl text-sm md:text-base">
                    Accréditations techniques validant une expertise continue dans les domaines critiques de la cyberdéfense.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-accent/40 transition-all duration-500 block cursor-pointer flex flex-col"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,127,255,0.1)]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono text-secondary tracking-widest uppercase py-1 px-3 border border-white/5 rounded-full">{cert.id}</span>
                        </div>

                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                                <span className="h-px flex-grow bg-gradient-to-r from-accent/20 to-transparent"></span>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm text-accent font-medium">{cert.issuer}</span>
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                <span className="text-sm text-secondary">{cert.date}</span>
                            </div>
                            <p className="text-secondary/70 text-sm leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1 mb-6">
                                "{cert.description}"
                            </p>
                        </div>

                        <div className="flex items-center text-accent text-sm font-medium mt-4">
                            Voir le détail
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>

                        {/* Decorative verify badge glow */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-tighter">
                                <span className="flex h-1.5 w-1.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                                </span>
                                Verified
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-background/95 border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(0,127,255,0.1)]">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{selectedCert.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-accent font-medium">{selectedCert.issuer}</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                        <span className="text-secondary">{selectedCert.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                <div className="text-secondary text-sm mb-1 uppercase tracking-wider font-semibold">ID du certificat</div>
                                <div className="font-mono text-foreground font-medium">{selectedCert.id}</div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-foreground font-semibold mb-2">Description</h4>
                                <p className="text-secondary/80 leading-relaxed">
                                    {selectedCert.description}
                                </p>
                            </div>

                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="px-6 py-2.5 rounded-lg font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    Fermer
                                </button>
                                <a
                                    href={selectedCert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-lg font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white shadow-[0_0_15px_rgba(0,127,255,0.2)] hover:shadow-[0_0_25px_rgba(0,127,255,0.4)] transition-all flex items-center gap-2"
                                >
                                    Vérifier l'authenticité sur Coursera
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificatesGrid;
