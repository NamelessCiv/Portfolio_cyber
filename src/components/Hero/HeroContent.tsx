"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.7, 0, 0.3, 1] as const;

const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jean-yves-issiolou/" },
    { name: "GitHub", href: "https://github.com/NamelessCiv" },
    { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=yveskurts@gmail.com" },
];

const HeroContent = () => {
    return (
        <div className="flex flex-col h-full">
            <motion.div
                className="flex items-center justify-between label text-muted border-b border-ink pb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <span>Portfolio — Éd. 2026</span>
                <span className="hidden sm:inline">Cybersécurité × Design graphique</span>
            </motion.div>

            <h1 className="mt-8 md:mt-12 font-semibold tracking-[-0.04em] leading-[0.86] [font-stretch:120%] text-[clamp(3.25rem,10.5vw,9.5rem)]">
                {["Jean Yves", "Issiolou"].map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-[0.06em]">
                        <motion.span
                            className="block"
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.1 }}
                        >
                            {line}
                            {i === 1 && <span className="text-signal">.</span>}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <motion.div
                className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-8 gap-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <p className="sm:col-span-5 text-xl md:text-2xl leading-snug tracking-tight text-ink-soft">
                    Analyste SOC. Je surveille, je détecte, je contiens —{" "}
                    <em className="font-serif text-[1.15em] text-ink">et je compose</em>. La sécurité et le design
                    graphique partagent une même exigence&nbsp;: rendre lisible ce qui est complexe.
                </p>

                <div className="sm:col-span-3 flex flex-col justify-end gap-5">
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-between gap-6 bg-ink text-paper px-5 py-4 text-sm font-medium hover:bg-signal transition-colors"
                    >
                        Me contacter
                        <span className="font-mono transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <ul className="flex gap-5 label">
                        {links.map((l) => (
                            <li key={l.name}>
                                <a
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted hover:text-signal transition-colors underline underline-offset-4 decoration-rule"
                                >
                                    {l.name} ↗
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            <motion.p
                className="mt-10 md:mt-auto md:pt-10 font-mono text-[10px] leading-relaxed text-muted break-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                aria-hidden="true"
            >
                <span className="text-ink">sha256</span>(&quot;jean yves issiolou&quot;) = dcc9729c99ff12c350d8b8b2e973e8d957614a3b3db9659a0c00ed6aa07cf69d
            </motion.p>
        </div>
    );
};

export default HeroContent;
