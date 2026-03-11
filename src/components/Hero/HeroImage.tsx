"use client";

import React from "react";
import Image from "next/image";

interface HeroImageProps {
    imagePath: string;
}

const HeroImage = ({ imagePath }: HeroImageProps) => {
    return (
        <div className="relative w-full h-[50vh] md:w-[45%] lg:w-[35%] md:h-[65vh] mt-10 md:mt-auto lg:my-auto flex items-center justify-center">
            {/* 
                Clean, modern frame for the profile photo
            */}
            <div className="relative w-[85%] max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] bg-zinc-900/40 backdrop-blur-md group transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:border-cyan-500/40">
                {/* Subtle outer glow effect inside the border */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                <Image
                    src={imagePath}
                    alt="Jean Yves ISSIOLOU - SOC Analyst"
                    fill
                    className="object-cover object-top filter brightness-[1.02] contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroImage;
