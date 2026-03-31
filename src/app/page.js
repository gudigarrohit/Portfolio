"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavDots from "@/component/sections/NavDots";
import HeroSection from "@/component/sections/HeroSection";
import AboutSection from "@/component/sections/AboutSection";
import SkillsSection from "@/component/sections/SkillsSection";
import ProjectsSection from "@/component/sections/ProjectsSection";
import AchievementsSection from "@/component/sections/AchievementsSection";
import ContactSection from "@/component/sections/ContactSection";
import Footer from "@/component/sections/Footer";
import CursorLight from "@/component/sections/CursorLight";
import Loader from "@/component/sections/Loader";
import Gallery from "@/component/sections/Gallery";

import UploadImage from "@/component/sections/UploadImage";

const sectionIds = ["hero", "about", "skills", "projects", "achievements", "contact", "footer"];



export default function Page() {
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(true);

  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white" style={{ cursor: "none" }}>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CursorLight />
      <NavDots activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
  
        <UploadImage onUpload={() => setRefresh(!refresh)} />
        <Gallery refresh={refresh} />
    

    </div>
  );
}