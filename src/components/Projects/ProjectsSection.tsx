"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const projects = [
    {
        title: "Réponse aux incidents : playbooks & SIEM",
        description: "Détection d'incidents critiques, analyse des logs via SIEM et application de procédures de réponse documentées.",
        tags: ["SIEM", "Incident response", "Risque"],
        url: "https://coursera.org/share/ff16c9f88206d4acb96ceae4da3f4332",
    },
    {
        title: "Investigation & scripting Bash / SQL",
        description: "Automatisation de la gestion de fichiers sous Linux en Bash, requêtes SQL pour extraire des preuves d'accès non autorisés.",
        tags: ["Linux", "Bash", "SQL", "Forensics"],
        url: "https://coursera.org/share/0abf79b15b7a981efbc1db0cffc7e614",
    },
    {
        title: "Évaluation des menaces & vulnérabilités",
        description: "Classification des actifs, analyse des menaces et évaluation des vulnérabilités des systèmes.",
        tags: ["Vulnérabilités", "Threat modeling", "Actifs"],
        url: "https://coursera.org/share/407a16fc6470332a324d9cc26fb7adb4",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projets" className="py-20 md:py-32">
            <div className="frame">
                <SectionHeader
                    index="03"
                    label="Projets"
                    shape="triangle"
                    title="Travaux sélectionnés"
                    aside="Cas pratiques réalisés pendant le parcours : réponse aux incidents, investigation et évaluation des menaces."
                />

                <div className="border-t border-ink">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-4 py-10 md:py-12 border-b border-rule"
                        >
                            <span className="col-span-4 md:col-span-2 text-6xl md:text-7xl font-semibold tracking-tighter leading-none text-ink/15 group-hover:text-signal transition-colors [font-stretch:125%]">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="col-span-4 md:col-span-6">
                                <h3 className="text-2xl md:text-4xl font-medium tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <p className="mt-4 text-muted leading-relaxed max-w-xl">{project.description}</p>
                            </div>
                            <div className="col-span-4 md:col-span-4 flex md:flex-col justify-between md:items-end gap-4">
                                <ul className="flex flex-wrap md:justify-end gap-x-3 gap-y-1 label text-muted">
                                    {project.tags.map((tag) => (
                                        <li key={tag}>#{tag}</li>
                                    ))}
                                </ul>
                                <span className="label text-ink group-hover:text-signal transition-colors whitespace-nowrap">
                                    Voir la certification ↗
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
