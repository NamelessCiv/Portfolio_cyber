"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            if (!target) return;

            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                (target.style && target.style.cursor === "pointer");

            setIsHovering(!!isInteractive);
        };

        const onMouseDown = () => setIsActive(true);
        const onMouseUp = () => setIsActive(false);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <div
            className={`custom-cursor pointer-events-none hidden md:block ${(isActive || isHovering) ? "active" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CustomCursor;
