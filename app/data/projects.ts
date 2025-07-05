export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "VSCode Portfolio",
    description:
      "A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/M3hdi-Rostami/vscode-themed-portfolio",
    slug: "vscode-portfolio1",
  },
  {
    title: "gym24",
    description:
      "A modern and responsive gym and fitness club template built with React, designed to showcase services, trainers, and schedules with a clean and dynamic UI.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/M3hdi-Rostami/gym24",
    slug: "vscode-portfolio1",
  },
];
