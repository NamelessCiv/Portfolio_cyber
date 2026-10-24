"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const skills = [
    {
        title: "Réponse aux incidents",
        description: "Détection d'anomalies réseau par l'analyse de logs, playbooks pour isoler et contenir les menaces.",
        tools: "SIEM · Playbooks · Triage",
    },
    {
        title: "Vulnérabilités & menaces",
        description: "Classification des actifs, modélisation des menaces et outils de scan pour évaluer le risque.",
        tools: "Threat modeling · Scan · Actifs",
    },
    {
        title: "Administration Linux sécurisée",
        description: "Permissions, authentification et scripts Bash pour automatiser la sécurité système.",
        tools: "Linux · Bash · IAM",
    },
    {
        title: "Investigation SQL",
        description: "Requêtes sur les journaux et traces pour extraire des preuves d'accès non autorisés.",
        tools: "SQL · Forensics · Logs",
    },
    {
        title: "Gouvernance, risque & conformité",
        description: "Éthique de la sécurité, frameworks de gestion des risques et contrôle d'accès.",
        tools: "GRC · NIST CSF · Contrôles",
    },
    {
        title: "Design graphique",
        description: "Identité visuelle, typographie et mise en page — appliquées aussi aux rapports et supports de sensibilisation.",
        tools: "Composition · Typo · Visuels",
    },
];

const ExpertiseSection = () => {
    return (
        <section id="competences" className="py-20 md:py-32">
            <div className="frame">
                <SectionHeader
                    index="02"
                    label="Compétences"
                    title="Index des compétences"
                    aside="Ce que je pratique au quotidien, classé comme un sommaire : du terrain technique jusqu'à la manière de le communiquer."
                />

                <ol className="border-t border-ink">
                    {skills.map((skill, i) => (
                        <motion.li
                            key={skill.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-2 py-6 md:py-7 border-b border-rule hover:bg-ink hover:text-paper transition-colors duration-200 -mx-3 px-3"
                        >
                            <span className="col-span-1 font-mono text-sm text-muted group-hover:text-signal">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="col-span-3 md:col-span-4 text-xl md:text-2xl font-medium tracking-tight">
                                {skill.title}
                            </h3>
                            <p className="col-span-4 md:col-span-4 text-muted group-hover:text-paper/70 leading-relaxed">
                                {skill.description}
                            </p>
                            <span className="col-span-4 md:col-span-3 label text-muted group-hover:text-paper/60 md:text-right md:self-start md:pt-1.5">
                                {skill.tools}
                            </span>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ExpertiseSection;
