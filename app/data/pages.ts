export interface Page {
  name: string;
  path: string;
  icon: string;
}

export const pages: Page[] = [
  { name: "home.tsx", path: "/", icon: "/logos/react_icon.svg" },
  { name: "about.html", path: "/about", icon: "/logos/html_icon.svg" },
  { name: "contact.css", path: "/contact", icon: "/logos/css_icon.svg" },
  { name: "projects.js", path: "/projects", icon: "/logos/js_icon.svg" },
  { name: "github.md", path: "/github", icon: "/logos/markdown_icon.svg" },
];
