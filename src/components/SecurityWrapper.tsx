"use client";

import React, { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Attach event listener to the document
        document.addEventListener("contextmenu", handleContextMenu);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return <>{children}</>;
}
