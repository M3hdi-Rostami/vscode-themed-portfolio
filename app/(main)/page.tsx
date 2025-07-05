"use client";

import { useEffect, useState } from "react";
import DecorElements from "../components/decorElements/DecorElements";
import styles from "../styles/HomePage.module.scss";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

export default function Home() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: "const HomePage = () => {", type: "function" },
    {
      code: "  const [isLoaded, setIsLoaded] = useState(true);",
      type: "variable",
    },
    { code: "  const developerInfo = {", type: "variable" },
    { code: "    name: 'Mehdi Rostami',", type: "array-item" },
    { code: "    role: 'Frontend web Developer',", type: "array-item" },
    { code: "    bio: 'Building modern web experiences'", type: "array-item" },
    { code: "  };", type: "array-end" },
    { code: "", type: "blank" },
    { code: "  useEffect(() => {", type: "nested-function" },
    {
      code: "    document.title = `${developerInfo.name} | Portfolio`;",
      type: "return",
    },
    { code: "    setIsLoaded(true);", type: "function-call" },
    { code: "  }, []);", type: "close" },
    { code: "", type: "blank" },
    { code: "  return (", type: "return-object" },
    { code: '    <main className="hero-container">', type: "object-method" },
    { code: "      <h1>{developerInfo.name}</h1>", type: "object-method" },
    { code: "      <p>{developerInfo.role}</p>", type: "object-method" },
    { code: '      <div className="cta">', type: "object-method" },
    {
      code: '        <Link href="/projects">View Projects</Link>',
      type: "object-method",
    },
    { code: "      </div>", type: "object-method" },
    { code: "    </main>", type: "object-method" },
    { code: "  );", type: "close" },
    { code: "};", type: "close-function" },
    { code: "", type: "blank" },
    { code: "export default HomePage;", type: "function-call" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);
  return (
    <div className="relative font-sans flex justify-center items-center h-full w-[calc(100%_-48px)] md:w-full text-[var(--text-color)]">
      <div className="md:max-w-[1200px] md:text-left text-center w-full md:mx-auto flex md:grid md:grid-cols-[1.2fr_1fr] items-center justify-center md:gap-16 p-6 md:p-16 h-full">
        <div className="relative z-20 w-full max-w-full md:block hidden">
          <div className="w-full max-w-[600px] h-[550px] bg-[var(--main-bg)] rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)] relative border border-[var(--explorer-border)]">
            <div className="flex flex-1 relative py-4 font-mono text-[0.9rem] leading-6 h-full overflow-hidden">
              <div className="flex flex-col py-4 w-[50px] bg-[var(--main-bg)] text-[#636e83] font-mono text-[13px] select-none text-right z-20">
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${index === activeLineIndex ? styles.activeLine : ""
                      }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${index === activeLineIndex ? styles.highlightedLine : ""
                      }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 relative z-20 py-12 content text-center md:text-left">
          <div className="w-full">
            <h1 className="text-7xl font-extrabold m-0 text-[var(--text-color)] tracking-[-0.02em] leading-[1.1]">
              Mehdi <span className="text-[var(--primary-color)]">Rostami</span>
            </h1>

            <div className="text-xl text-[var(--text-color)] mt-3">Frontend Web Developer</div>
          </div>

          <p className="text-lg leading-[1.6] text-[var(--text-color)]">
            I build elegant, responsive web applications with modern
            technologies. Focused on clean code and intuitive user
            experiences.
          </p>

          <div className="mt-4 w-max mx-auto lg:mx-0">
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <DecorElements />
    </div>
  );
}
