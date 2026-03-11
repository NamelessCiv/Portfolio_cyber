"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Réponse aux Incidents : Playbooks & SIEM",
        description: "Simulation de détection de menaces et analyse de risques métier, en appliquant des contrôles de sécurité et des playbooks de mitigation.",
        tags: ["RISK ANALYSIS", "SIEM", "INCIDENT RESPONSE"],
        img: "/project-soc.jpg"
    },
    {
        title: "Investigation & Scripting BASH/SQL",
        description: "Automatisation de la gestion des systèmes de fichiers sous Linux via Bash et requêtes SQL pour extraire des preuves d'accès non autorisés.",
        tags: ["LINUX", "BASH", "SQL", "FORENSICS"],
        img: "/project-malware.jpg"
    },
    {
        title: "Analyse de Conformité & Éthique",
        description: "Audit des cadres de gouvernance de sécurité et recommandations stratégiques pour l'alignement aux standards d'éthique professionnelle.",
        tags: ["COMPLIANCE", "ETHICS", "FRAMEWORKS"],
        img: "/project-scanner.jpg"
    }
];

const ProjectsSection = () => {
    return (
        <section id="projets" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background relative">
            <div className="mb-16 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Projets <span className="text-foreground">Sélectionnés</span></h2>
                <p className="text-secondary max-w-xl text-sm md:text-base">
                    Démonstrations techniques et déploiements d'infrastructures de défense active.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Project Image Area (Mockup glow) */}
                        <div className="h-48 bg-gradient-to-br from-accent/20 to-transparent relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 font-black text-6xl select-none group-hover:scale-110 transition-transform duration-700">0{index + 1}</span>
                            </div>
                            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div className="p-8">
                            <div className="flex gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-md font-bold tracking-tighter uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                                Voir l'Etude de Cas
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Decorative data stream line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
