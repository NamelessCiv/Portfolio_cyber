import React from "react";
import SectionHeader from "@/components/SectionHeader";

const disciplines = [
    {
        verb: "Défendre",
        text: "Lire des journaux d'événements comme on lit une page : chercher le motif, repérer ce qui dépasse, comprendre l'intention derrière le bruit. Détecter tôt, contenir vite, documenter proprement.",
        keywords: ["SIEM", "Logs", "Incident response", "Linux", "SQL"],
    },
    {
        verb: "Composer",
        text: "Le design graphique m'a appris la hiérarchie, la grille, le contraste. Les mêmes outils servent à rédiger un rapport d'incident clair, un tableau de bord lisible ou une sensibilisation qui marque.",
        keywords: ["Typographie", "Grille", "Identité visuelle", "Mise en page"],
    },
];

const ProfileSection = () => {
    return (
        <section id="profil" className="py-20 md:py-32">
            <div className="frame">
                <SectionHeader
                    index="01"
                    label="Profil"
                    title={
                        <>
                            Deux disciplines,{" "}
                            <em className="font-serif font-normal tracking-normal [font-stretch:100%]">une même</em>{" "}
                            rigueur.
                        </>
                    }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ink">
                    {disciplines.map((d, i) => (
                        <article
                            key={d.verb}
                            className={`py-10 md:py-12 ${i === 0 ? "md:pr-12 md:border-r border-b md:border-b-0 border-rule" : "md:pl-12"}`}
                        >
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight [font-stretch:115%]">
                                    {d.verb}
                                </h3>
                                <span className="font-mono text-xs text-signal">{i === 0 ? "A" : "B"}</span>
                            </div>
                            <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-xl">{d.text}</p>
                            <ul className="mt-8 flex flex-wrap gap-2">
                                {d.keywords.map((k) => (
                                    <li key={k} className="label border border-ink/25 px-2.5 py-1">
                                        {k}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
