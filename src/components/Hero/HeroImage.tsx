"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
    imagePath: string;
}

// Traits de coupe aux quatre coins, comme sur une épreuve d'imprimerie
const CropMarks = () => (
    <>
        {[
            "-top-3 -left-3 border-b border-r",
            "-top-3 -right-3 border-b border-l",
            "-bottom-3 -left-3 border-t border-r",
            "-bottom-3 -right-3 border-t border-l",
        ].map((pos) => (
            <span key={pos} className={`absolute w-3 h-3 border-ink ${pos}`} aria-hidden="true" />
        ))}
    </>
);

const HeroImage = ({ imagePath }: HeroImageProps) => {
    return (
        <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
        >
            <div className="relative">
                <CropMarks />
                <motion.div
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    animate={{ clipPath: "inset(0 0 0% 0)" }}
                    transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
                    className="duotone relative aspect-[4/5] overflow-hidden"
                >
                    <Image
                        src={imagePath}
                        alt="Portrait de Jean Yves Issiolou"
                        fill
                        sizes="(min-width: 768px) 33vw, 75vw"
                        className="object-cover object-[50%_45%] scale-[1.6] origin-[50%_55%]"
                        priority
                    />
                </motion.div>
            </div>
            <figcaption className="mt-4 flex justify-between label text-muted">
                <span>Fig. 01 — Portrait</span>
                <span>4:5</span>
            </figcaption>
        </motion.figure>
    );
};

export default HeroImage;
