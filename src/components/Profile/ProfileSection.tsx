import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Shape, { ShapeKind } from "@/components/Shape";
import DefenseFigure from "./DefenseFigure";

const steps: { shape: ShapeKind; verb: string; text: string }[] = [
    {
        shape: "circle",
        verb: "Détecter",
        text: "Lire les journaux d'événements comme on lit une page : chercher le motif, repérer ce qui dépasse, comprendre l'intention derrière le bruit.",
    },
    {
        shape: "square",
        verb: "Contenir",
        text: "Isoler l'actif touché, couper le chemin de l'attaquant, appliquer le playbook sans improviser. Limiter l'impact avant tout.",
    },
    {
        shape: "triangle",
        verb: "Documenter",
        text: "Une chronologie claire, des preuves traçables, des recommandations actionnables. Un incident bien raconté n'arrive pas deux fois.",
    },
];

const ProfileSection = () => {
    return (
        <section id="profil" className="py-20 md:py-32">
            <div className="frame">
                <SectionHeader
                    index="01"
                    label="Profil"
                    shape="circle"
                    title={
                        <>
                            Détecter tôt.{" "}
                            <em className="font-serif font-normal tracking-normal [font-stretch:100%]">Contenir</em>{" "}
                            vite.
                        </>
                    }
                    aside="Analyste SOC formé au parcours Google Cybersecurity. Ma méthode tient en trois temps, appliqués avec la même rigueur à chaque alerte."
                />

                <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-14">
                    <ol className="col-span-4 md:col-span-6 border-t border-ink">
                        {steps.map((s, i) => (
                            <li key={s.verb} className="grid grid-cols-6 gap-x-6 py-8 border-b border-rule">
                                <div className="col-span-1 flex flex-col gap-3 pt-1.5">
                                    <Shape kind={s.shape} className={`w-5 h-5 ${i === 0 ? "text-signal" : "text-ink"}`} />
                                    <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                                </div>
                                <div className="col-span-5">
                                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight [font-stretch:115%]">
                                        {s.verb}
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="col-span-4 md:col-span-5 md:col-start-8 md:pt-8">
                        <DefenseFigure />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
