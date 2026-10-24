"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot check
        if (formData.get("_gotcha")) {
            return; // Silently ignore bot submissions
        }

        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");

        // Simple validation & Size limits
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const message = formData.get("message") as string;

        // Prevent massive payloads (DoS protection)
        if (name?.length > 100 || email?.length > 100 || message?.length > 1000) {
            setErrorMessage("Veuillez raccourcir votre message. La taille maximale a été dépassée.");
            setIsError(true);
            setIsLoading(false);
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Veuillez entrer une adresse email valide.");
            setIsError(true);
            setIsLoading(false);
            return;
        }

        // Basic XSS Sanitization (preventing HTML tags)
        const hasHtmlTags = /<[^>]*>?/gm;
        if (hasHtmlTags.test(name) || hasHtmlTags.test(message)) {
            setErrorMessage("Caractères non autorisés détectés. Veuillez utiliser du texte brut.");
            setIsError(true);
            setIsLoading(false);
            return;
        }

        try {
            const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xaqpwgal";
            const response = await fetch(formspreeUrl, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            } else {
                const data = await response.json();
                if (Array.isArray(data?.errors)) {
                    setErrorMessage(data.errors.map((err: { message?: string }) => String(err.message ?? "")).join(", "));
                } else {
                    setErrorMessage("Oups ! Un problème est survenu lors de l'envoi.");
                }
                setIsError(true);
            }
        } catch {
            setErrorMessage("Oups ! Un problème est survenu lors de l'envoi.");
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const fieldClass =
        "w-full bg-transparent border-b border-paper/25 py-3 outline-none focus:border-signal transition-colors text-paper placeholder:text-paper/30 text-lg";

    return (
        <section id="contact" className="bg-ink text-paper pt-20 md:pt-32 pb-10">
            <div className="frame">
                <SectionHeader
                    index="05"
                    label="Contact"
                    shape="quarter"
                    inverted
                    title={
                        <>
                            Parlons-en<span className="text-signal">.</span>
                        </>
                    }
                    aside="Un poste, une mission, une question de sécurité : écrivez-moi, je réponds personnellement."
                />

                <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-12">
                    <div className="col-span-4 md:col-span-4 flex flex-col gap-8">
                        {[
                            { k: "Email", v: "yveskurts@gmail.com", href: "mailto:yveskurts@gmail.com" },
                            { k: "LinkedIn", v: "in/jean-yves-issiolou", href: "https://www.linkedin.com/in/jean-yves-issiolou/" },
                            { k: "GitHub", v: "NamelessCiv", href: "https://github.com/NamelessCiv" },
                        ].map((c) => (
                            <div key={c.k}>
                                <div className="label text-paper/50 mb-1.5">{c.k}</div>
                                <a
                                    href={c.href}
                                    {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                                    className="text-lg hover:text-signal transition-colors break-all"
                                >
                                    {c.v} ↗
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-4 md:col-span-7 md:col-start-6 min-h-[420px]">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-10"
                                >
                                    {/* Honeypot field for bot protection */}
                                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                                    <label className="block">
                                        <span className="label text-paper/50">01 — Nom</span>
                                        <input type="text" name="name" required maxLength={100} autoComplete="name" placeholder="Votre nom" className={fieldClass} />
                                    </label>

                                    <label className="block">
                                        <span className="label text-paper/50">02 — Email</span>
                                        <input type="email" name="email" required maxLength={100} autoComplete="email" placeholder="email@exemple.com" className={fieldClass} />
                                    </label>

                                    <label className="block">
                                        <span className="label text-paper/50">03 — Message</span>
                                        <textarea name="message" rows={4} required maxLength={1000} placeholder="Comment puis-je vous aider ?" className={`${fieldClass} resize-none`} />
                                    </label>

                                    {isError && (
                                        <p className="font-mono text-sm text-signal" role="alert">
                                            ERR — {errorMessage || "Désolé, une erreur est survenue. Veuillez réessayer."}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group self-start inline-flex items-center gap-8 bg-signal text-ink px-6 py-4 font-medium hover:bg-paper transition-colors disabled:opacity-60"
                                    >
                                        {isLoading ? "Envoi en cours…" : "Envoyer le message"}
                                        <span className="font-mono transition-transform group-hover:translate-x-1">→</span>
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="border-t border-paper/25 pt-8"
                                >
                                    <div className="label text-signal mb-4">Statut : transmis</div>
                                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Merci, message bien reçu.</h3>
                                    <p className="text-paper/70 text-lg mb-8 max-w-md">
                                        Je reviens vers vous dès que possible.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="label underline underline-offset-4 hover:text-signal transition-colors"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <footer className="mt-24 md:mt-36 pt-6 border-t border-paper/20 grid grid-cols-1 md:grid-cols-3 gap-4 label text-paper/50">
                    <span>© 2026 Jean Yves Issiolou</span>
                    <span className="md:text-center">CSP stricte · Aucun traceur · Aucun cookie</span>
                    <a href="#home" className="md:text-right hover:text-signal transition-colors">Haut de page ↑</a>
                </footer>
            </div>
        </section>
    );
};

export default ContactForm;
