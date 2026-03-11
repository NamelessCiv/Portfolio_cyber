"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
    title: string;
    description: string;
    delay: number;
}

const FloatingCard = ({ title, description, delay }: FloatingCardProps) => {
    return (
        <motion.div
            className="glass p-8 rounded-2xl flex flex-col gap-4 w-full md:w-[350px] relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/20 transition-all"></div>

            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
                {description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-accent text-xs font-mono">
                <span className="w-1 h-1 bg-accent rounded-full animate-pulse"></span>
                OPERATIONAL
            </div>
        </motion.div>
    );
};

const ExpertiseSection = () => {
    const skills = [
        {
            title: "Évaluation de Vulnérabilités & Menaces",
            description: "Classification des actifs organisationnels, modélisation des menaces et utilisation d'outils de scan pour évaluer les risques des systèmes.",
            delay: 0.1,
        },
        {
            title: "Réponse aux Incidents (SIEM)",
            description: "Détection d'anomalies de réseaux via l'analyse de logs et utilisation de playbooks avancés pour isoler et contenir les menaces.",
            delay: 0.3,
        },
        {
            title: "Administration Sécurisée Linux",
            description: "Maîtrise des permissions, de l'authentification et scripting Bash pour automatiser la sécurité système.",
            delay: 0.2,
        },
        {
            title: "Investigation Base de Données (SQL)",
            description: "Analyse des journaux et traces numériques via requêtes SQL pour extraire des preuves d'accès non autorisés.",
            delay: 0.4,
        },
        {
            title: "Gouvernance, Risque & Conformité",
            description: "Application stricte de l'éthique de la sécurité et des frameworks globaux de gestion des risques organisationnels et contrôles d'accès.",
            delay: 0.5,
        },
    ];

    return (
        <section id="expertise" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>

            <div className="mb-16 md:mb-20 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Expertise <span className="text-foreground">Dynamique</span></h2>
                <p className="text-secondary max-w-xl mx-auto md:mx-0 text-sm md:text-base">
                    Une approche asymétrique de la sécurité, alliant précision technologique et intuition analytique.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 justify-items-center md:justify-items-start">
                {skills.map((skill, index) => (
                    <FloatingCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        delay={skill.delay}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExpertiseSection;
