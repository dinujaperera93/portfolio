"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, Moon, Sun, Target, X } from "lucide-react";

import JobMatcher from "@/components/features/job-matcher";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [jobMatcherOpen, setJobMatcherOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [matchingKeywords, setMatchingKeywords] = useState<string[]>([]);
  const mediumProfileUrl = "https://medium.com/@dinujaperera93";
  const githubProfileUrl = "https://github.com/dinujaperera93";

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { label: "Blogs", href: mediumProfileUrl },
    { id: "contact", label: "Contact" },
  ];

  const handleKeywordsExtract = (keywords: string[]) => {
    setMatchingKeywords(keywords);
  };

  const handleNavItemClick = (item: (typeof navItems)[number]) => {
    setMobileMenuOpen(false);

    if ("href" in item) {
      window.open(item.href, "_blank");
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex min-w-0 justify-between items-center gap-3">
            <motion.div
              className="flex flex-1 items-center gap-2 cursor-pointer min-w-0"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                  <Image
                    src="/dinuja-avatar.jpg"
                    alt="Dinuja Perera portrait"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="truncate text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dinuja Perera
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id ?? item.label}
                  variant="ghost"
                  onClick={() => handleNavItemClick(item)}
                  className={`transition-colors ${
                    item.id && activeSection === item.id
                      ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "/Dinuja_Perera_Machine_Learning_Engineer.pdf",
                    "_blank",
                  )
                }
                className="hidden md:inline-flex border-gray-300 dark:border-gray-600"
                title="Download my CV"
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setJobMatcherOpen(true)}
                className="hidden md:inline-flex rounded-full border-gray-300 dark:border-gray-600 relative"
                title="Match with Job Description"
              >
                <Target className="w-4 h-4" />
                {matchingKeywords.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                    {matchingKeywords.length}
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:inline-flex rounded-full border-gray-300 dark:border-gray-600"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    githubProfileUrl,
                    "_blank",
                  )
                }
                className="hidden md:inline-flex rounded-full border-gray-300 dark:border-gray-600"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dinuja-perera/",
                    "_blank",
                  )
                }
                className="hidden md:inline-flex rounded-full border-gray-300 dark:border-gray-600"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="md:hidden rounded-full border-gray-300 dark:border-gray-600"
                title={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Button
                    key={`mobile-${item.id ?? item.label}`}
                    variant="ghost"
                    onClick={() => handleNavItemClick(item)}
                    className={`justify-start rounded-2xl px-4 py-3 text-left ${
                      item.id && activeSection === item.id
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setJobMatcherOpen(true);
                  }}
                  className="justify-center rounded-2xl border-gray-300 dark:border-gray-600 relative"
                >
                  Match Job
                  {matchingKeywords.length > 0 && (
                    <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-1.5 text-xs text-white">
                      {matchingKeywords.length}
                    </span>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDarkMode(!darkMode);
                  }}
                  className="justify-center rounded-2xl border-gray-300 dark:border-gray-600"
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open(githubProfileUrl, "_blank");
                  }}
                  className="justify-center rounded-2xl border-gray-300 dark:border-gray-600"
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open(
                      "/Dinuja_Perera_Machine_Learning_Engineer.pdf",
                      "_blank",
                    );
                  }}
                  className="justify-center rounded-2xl border-gray-300 dark:border-gray-600"
                >
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open(
                      "https://www.linkedin.com/in/dinuja-perera/",
                      "_blank",
                    );
                  }}
                  className="justify-center rounded-2xl border-gray-300 dark:border-gray-600"
                >
                  LinkedIn
                </Button>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection("contact");
                  }}
                  className="justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      <JobMatcher
        isOpen={jobMatcherOpen}
        onClose={() => setJobMatcherOpen(false)}
        onKeywordsExtract={handleKeywordsExtract}
      />

      <section id="hero">
        <Hero
          scrollToSection={scrollToSection}
          keywords={matchingKeywords}
          onOpenJobMatcher={() => setJobMatcherOpen(true)}
          githubProfileUrl={githubProfileUrl}
        />
      </section>

      <section id="about">
        <About keywords={matchingKeywords} />
      </section>

      <section id="experience">
        <Experience keywords={matchingKeywords} />
      </section>

      <section id="skills">
        <Skills keywords={matchingKeywords} />
      </section>

      <section id="projects">
        <Projects keywords={matchingKeywords} />
      </section>

      <section id="education">
        <Education keywords={matchingKeywords} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 dark:text-slate-500">
            © 2025 Dinuja Perera. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-600 text-sm mt-2">
            Built with passion for Machine Learning and AI
          </p>
        </div>
      </footer>
    </div>
  );
}
