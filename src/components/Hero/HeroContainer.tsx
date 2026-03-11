"use client";

import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

interface HeroContainerProps {
    imagePath: string;
}

const HeroContainer = ({ imagePath }: HeroContainerProps) => {
    return (
        <section id="home" className="min-h-screen relative flex items-center bg-background overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 flex justify-end items-end md:pr-20 lg:pr-40">
                <HeroImage imagePath={imagePath} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full md:w-[60%] lg:w-1/2 pt-20">
                <HeroContent />
            </div>
        </section>
    );
};

export default HeroContainer;
