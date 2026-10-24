"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const certificates = [
    {
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "2026",
        id: "87YF734LJTDZ",
        description: "Concepts fondamentaux de la cybersécurité, éthique professionnelle et outils d'analyse de menaces.",
        url: "https://coursera.org/share/d688df7fbd58628c75f85f30aad87a42",
    },
    {
        title: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "2026",
        id: "NX25EY4D4KFD",
        description: "Menaces et vulnérabilités, cadres de sécurité, outils SIEM et playbooks de réponse aux incidents.",
        url: "https://coursera.org/share/5b28e86774b003371c614c4449477dd4",
    },
    {
        title: "Tools of the Trade: Linux and SQL",
        issuer: "Google",
        date: "2026",
        id: "YOY6LXBENDMX",
        description: "Systèmes d'exploitation Linux, shell Bash et extraction d'informations via SQL.",
        url: "https://coursera.org/share/0abf79b15b7a981efbc1db0cffc7e614",
    },
    {
        title: "Assets, Threats, and Vulnerabilities",
        issuer: "Google",
        date: "2026",
        id: "G-ATV2026",
        description: "Classification des actifs, analyse des menaces et évaluation des vulnérabilités.",
        url: "https://coursera.org/share/407a16fc6470332a324d9cc26fb7adb4",
    },
    {
        title: "Sound the Alarm: Detection and Response",
        issuer: "Google",
        date: "2026",
        id: "G-SDR2026",
        description: "Détection d'incidents, analyse des logs via SIEM et procédures de réponse documentées.",
        url: "https://coursera.org/share/ff16c9f88206d4acb96ceae4da3f4332",
    },
];

const CertificatesGrid = () => {
    return (
        <section id="certificats" className="py-20 md:py-32">
            <div className="frame">
                <SectionHeader
                    index="04"
                    label="Certifications"
                    shape="half"
                    title="Registre"
                    aside="Parcours Google Cybersecurity. Chaque entrée est vérifiable en ligne via son lien Coursera."
                />

                <div className="border-t border-ink">
                    <div className="hidden md:grid grid-cols-12 gap-x-6 py-3 label text-muted border-b border-rule">
                        <span className="col-span-2">Référence</span>
                        <span className="col-span-5">Intitulé</span>
                        <span className="col-span-2">Émetteur</span>
                        <span className="col-span-1">Année</span>
                        <span className="col-span-2 text-right">Vérification</span>
                    </div>

                    {certificates.map((cert, i) => (
                        <motion.a
                            key={cert.id}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-2 py-6 border-b border-rule items-baseline"
                        >
                            <span className="col-span-4 md:col-span-2 font-mono text-xs text-muted group-hover:text-signal transition-colors">
                                {cert.id}
                            </span>
                            <div className="col-span-4 md:col-span-5">
                                <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:underline underline-offset-4 decoration-1">
                                    {cert.title}
                                </h3>
                                <p className="mt-1.5 text-sm text-muted leading-relaxed">{cert.description}</p>
                            </div>
                            <span className="col-span-2 md:col-span-2 text-sm">{cert.issuer}</span>
                            <span className="col-span-1 md:col-span-1 font-mono text-sm">{cert.date}</span>
                            <span className="col-span-1 md:col-span-2 label text-right group-hover:text-signal transition-colors">
                                <span className="hidden md:inline">Coursera </span>↗
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesGrid;
