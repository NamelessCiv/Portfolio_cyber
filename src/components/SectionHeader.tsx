import React from "react";

interface SectionHeaderProps {
    index: string;
    label: string;
    title: React.ReactNode;
    aside?: React.ReactNode;
    inverted?: boolean;
}

// En-tête de section façon chapitre de revue : filet, numéro, intitulé
const SectionHeader = ({ index, label, title, aside, inverted = false }: SectionHeaderProps) => {
    return (
        <header className="mb-12 md:mb-20">
            <div className={`flex items-center justify-between label border-t pt-3 ${inverted ? "border-paper text-paper/60" : "border-ink text-muted"}`}>
                <span>
                    <span className="text-signal">§{index}</span> — {label}
                </span>
                <span>{index} / 05</span>
            </div>
            <div className="mt-8 md:mt-10 grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-6 items-end">
                <h2 className="col-span-4 md:col-span-7 text-5xl md:text-7xl font-semibold tracking-[-0.035em] leading-[0.92] [font-stretch:115%]">
                    {title}
                </h2>
                {aside && (
                    <div className={`col-span-4 md:col-span-4 md:col-start-9 text-base leading-relaxed ${inverted ? "text-paper/70" : "text-muted"}`}>
                        {aside}
                    </div>
                )}
            </div>
        </header>
    );
};

export default SectionHeader;
