import React from "react";

export type ShapeKind = "circle" | "square" | "triangle" | "half" | "quarter";

interface ShapeProps {
    kind: ShapeKind;
    className?: string;
}

// Formes primaires Bauhaus, utilisées comme signalétique
const Shape = ({ kind, className = "w-3.5 h-3.5" }: ShapeProps) => {
    return (
        <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="currentColor">
            {kind === "circle" && <circle cx="10" cy="10" r="10" />}
            {kind === "square" && <rect width="20" height="20" />}
            {kind === "triangle" && <polygon points="10,0 20,20 0,20" />}
            {kind === "half" && <path d="M0 15 A10 10 0 0 1 20 15 Z" />}
            {kind === "quarter" && <path d="M0 0 H20 A20 20 0 0 1 0 20 Z" />}
        </svg>
    );
};

export default Shape;
