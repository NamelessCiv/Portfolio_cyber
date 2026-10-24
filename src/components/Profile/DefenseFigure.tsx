"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Shape from "@/components/Shape";

const layers = ["Périmètre", "Réseau", "Hôte", "App."];

const size = 400;
const step = 40;
const ease = [0.7, 0, 0.3, 1] as const;

// Cycle de la menace : approche, blocage au périmètre, recul
const threatCycle = { duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: 2.2 };

// Figure : la défense en profondeur traduite en formes primaires.
// Les couches se tracent de l'extérieur vers l'intérieur, puis la menace
// vient buter contre le périmètre, en boucle.
const DefenseFigure = () => {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-15%" });
    const reduce = useReducedMotion();
    const play = inView && !reduce;
    const initial = reduce ? false : "hidden";
    const animate = reduce || inView ? "visible" : "hidden";

    return (
        <figure>
            <svg
                ref={ref}
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-auto overflow-visible"
                role="img"
                aria-labelledby="fig-defense"
            >
                <title id="fig-defense">Défense en profondeur : quatre couches concentriques protègent les données au centre, la menace est bloquée au périmètre</title>

                {layers.map((layer, i) => {
                    const inset = 40 + i * step;
                    const side = size - inset * 2;
                    return (
                        <g key={layer}>
                            <motion.rect
                                x={inset}
                                y={inset}
                                width={side}
                                height={side}
                                className="fill-none stroke-ink"
                                strokeWidth={i === 0 ? 2 : 1}
                                initial={initial}
                                animate={animate}
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: { pathLength: 1, transition: { duration: 0.9, ease, delay: i * 0.22 } },
                                }}
                            />
                            <motion.text
                                x={inset + 8}
                                y={inset + 16}
                                className="fill-muted font-mono text-[9px] uppercase tracking-wider"
                                initial={initial}
                                animate={animate}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.5 + i * 0.22 } },
                                }}
                            >
                                {String(i + 1).padStart(2, "0")} {layer}
                            </motion.text>
                        </g>
                    );
                })}

                {/* Le périmètre s'allume quand la menace le touche */}
                {play && (
                    <motion.rect
                        x={40}
                        y={40}
                        width={size - 80}
                        height={size - 80}
                        className="fill-none stroke-signal"
                        strokeWidth={2}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 0] }}
                        transition={{ ...threatCycle, times: [0, 0.38, 0.45, 0.9] }}
                    />
                )}

                <motion.g
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    initial={initial}
                    animate={animate}
                    variants={{
                        hidden: { scale: 0 },
                        visible: { scale: 1, transition: { type: "spring", stiffness: 220, damping: 16, delay: 1.1 } },
                    }}
                >
                    <circle cx={size / 2} cy={size / 2 + 10} r={26} className="fill-signal" />
                    <text
                        x={size / 2}
                        y={size / 2 + 13}
                        textAnchor="middle"
                        className="fill-paper font-mono text-[7px] uppercase tracking-wider"
                    >
                        Données
                    </text>
                </motion.g>

                {/* Menace : arrive en diagonale et s'arrête net au périmètre */}
                <motion.g
                    initial={initial}
                    animate={animate}
                    variants={{
                        hidden: { opacity: 0, x: 24, y: -24 },
                        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease, delay: 1.5 } },
                    }}
                >
                    <motion.g
                        animate={play ? { x: [0, -12, -12, 0], y: [0, 12, 12, 0] } : undefined}
                        transition={{ ...threatCycle, times: [0, 0.4, 0.55, 1], ease: "easeInOut" }}
                    >
                        <line x1={size - 22} y1={22} x2={size - 40} y2={40} className="stroke-ink" strokeDasharray="3 3" />
                        <polygon points={`${size},0 ${size},24 ${size - 24},0`} className="fill-ink" />
                    </motion.g>
                </motion.g>

                {play && (
                    <motion.text
                        x={size - 52}
                        y={30}
                        textAnchor="end"
                        className="fill-signal font-mono text-[9px] uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ ...threatCycle, times: [0, 0.4, 0.45, 0.8, 1] }}
                    >
                        Bloqué
                    </motion.text>
                )}
            </svg>
            <figcaption className="mt-4 flex justify-between label text-muted">
                <span>Fig. 02 — Défense en profondeur</span>
                <span className="flex items-center gap-1.5">
                    <Shape kind="triangle" className="w-2.5 h-2.5 text-ink" /> Menace
                </span>
            </figcaption>
        </figure>
    );
};

export default DefenseFigure;
