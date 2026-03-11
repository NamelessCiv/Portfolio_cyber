"use client";

import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

interface HeroContainerProps {
    imagePath: string;
}

const HeroContainer = ({ imagePath }: HeroContainerProps) => {
    return (
        <section id="home" className="min-h-[100svh] relative flex flex-col md:flex-row items-center bg-background overflow-hidden pt-28 md:pt-0">
            {/* Background Image Layer (Top on mobile, absolute on desktop) */}
            <div className="relative w-full md:absolute md:inset-0 z-0 flex justify-center md:justify-end items-center md:items-end md:pr-20 lg:pr-40 order-1 md:order-2">
                <HeroImage imagePath={imagePath} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full md:w-[60%] lg:w-1/2 pt-8 md:pt-20 order-2 md:order-1">
                <HeroContent />
            </div>
        </section>
    );
};

export default HeroContainer;
