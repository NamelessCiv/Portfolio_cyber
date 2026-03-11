"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationLoader = () => {
    useEffect(() => {
        // Reveal animations for sections
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return null;
};

export default AnimationLoader;
