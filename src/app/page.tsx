import HeroContainer from "@/components/Hero/HeroContainer";
import ExpertiseSection from "@/components/Expertise/ExpertiseSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import CertificatesGrid from "@/components/Certificates/CertificatesGrid";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroContainer imagePath="/whatsapp-photo.jpeg" />
      <ExpertiseSection />
      <ProjectsSection />
      <CertificatesGrid />
      <ContactForm />
    </main>
  );
}
