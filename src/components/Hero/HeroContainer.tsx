"use client";

import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

interface HeroContainerProps {
    imagePath: string;
}

const HeroContainer = ({ imagePath }: HeroContainerProps) => {
    return (
        <section id="home" className="pt-14">
            <div className="frame grid grid-cols-4 md:grid-cols-12 gap-x-5 md:gap-x-6 pt-10 md:pt-16 pb-16 md:pb-24">
                <div className="col-span-4 md:col-span-8 order-2 md:order-1">
                    <HeroContent />
                </div>
                <div className="col-span-3 col-start-2 md:col-span-4 md:col-start-9 order-1 md:order-2 mb-10 md:mb-0">
                    <HeroImage imagePath={imagePath} />
                </div>
            </div>
        </section>
    );
};

export default HeroContainer;
