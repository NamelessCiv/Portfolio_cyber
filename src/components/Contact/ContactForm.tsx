"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                if (Object.hasOwn(data, 'errors')) {
                    setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setErrorMessage("Oups ! Un problème est survenu lors de l'envoi.");
                }
                setIsError(true);
            }
        } catch (error) {
            setErrorMessage("Oups ! Un problème est survenu lors de l'envoi.");
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4 leading-tight">Sécurisons votre <span className="text-foreground">futur</span></h2>
                <p className="text-secondary text-base md:text-lg">Prêt à renforcer vos défenses ? Parlons-en.</p>
            </div>

            <div className="max-w-2xl mx-auto min-h-[400px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.form
                            key="contact-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-8 md:gap-12 w-full"
                        >
                            {/* Honeypot field for bot protection */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Votre Nom"
                                    className="w-full bg-transparent border-b border-border-subtle py-3 md:py-4 outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50 text-sm md:text-base"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500"></div>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="email@exemple.com"
                                    className="w-full bg-transparent border-b border-border-subtle py-3 md:py-4 outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50 text-sm md:text-base"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500"></div>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Comment puis-je vous aider ?"
                                    className="w-full bg-transparent border-b border-border-subtle py-3 md:py-4 outline-none focus:border-accent transition-colors text-foreground placeholder:text-secondary/50 resize-none text-sm md:text-base"
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500"></div>
                            </div>

                            {isError && (
                                <p className="text-red-500 text-sm text-center">{errorMessage || "Désolé, une erreur est survenue. Veuillez réessayer."}</p>
                            )}

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="relative px-10 md:px-12 py-3 md:py-4 bg-accent text-background font-bold rounded-full overflow-hidden group min-w-[180px] md:min-w-[200px] text-sm md:text-base disabled:opacity-70 transition-transform active:scale-95"
                                >
                                    <AnimatePresence mode="wait">
                                        {isLoading ? (
                                            <motion.span
                                                key="loading"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <svg className="animate-spin h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Envoi...
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="send"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                            >
                                                Envoyer
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success-message"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200 }}
                            className="flex flex-col items-center text-center py-12"
                        >
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="absolute inset-0 bg-accent/20 rounded-full animate-ping"
                                ></motion.div>
                                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M5 13l4 4L19 7"
                                    ></motion.path>
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Merci de m'avoir contacté !</h3>
                            <p className="text-secondary text-lg mb-8 max-w-md">
                                Votre message a bien été envoyé avec succès. Je reviendrai vers vous dès que possible.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-accent hover:underline font-medium text-sm transition-all"
                            >
                                Envoyer un autre message
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <footer className="mt-20 md:mt-32 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-secondary text-[10px] uppercase tracking-widest text-center md:text-left">
                <div>© 2026 JEAN YVES ISSIOLOU. TOUS DROITS RÉSERVÉS.</div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lowercase tracking-normal text-xs">
                    <a href="https://www.linkedin.com/in/jean-yves-issiolou/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                    <a href="https://github.com/NamelessCiv" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a href="#" className="hover:text-accent transition-colors text-[10px]">Politique de Confidentialité</a>
                    <a href="#" className="hover:text-accent transition-colors text-[10px]">SOC Status</a>
                </div>
            </footer>
        </section>
    );
};

export default ContactForm;
