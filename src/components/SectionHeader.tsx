import React from "react";
import Shape, { ShapeKind } from "@/components/Shape";

interface SectionHeaderProps {
    index: string;
    label: string;
    shape: ShapeKind;
    title: React.ReactNode;
    aside?: React.ReactNode;
    inverted?: boolean;
}

// En-tête de section façon chapitre de revue : filet, forme, numéro, intitulé
const SectionHeader = ({ index, label, shape, title, aside, inverted = false }: SectionHeaderProps) => {
    return (
        <header className="mb-12 md:mb-20">
            <div className={`flex items-center justify-between label border-t pt-3 ${inverted ? "border-paper text-paper/60" : "border-ink text-muted"}`}>
                <span className="flex items-center gap-3">
                    <Shape kind={shape} className="w-3 h-3 text-signal" />
                    <span>
                        <span className={inverted ? "text-paper" : "text-ink"}>§{index}</span> — {label}
                    </span>
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
