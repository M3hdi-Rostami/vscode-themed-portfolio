"use client";

import Image from "next/image";
import Link from "next/link";

function MainTabBar() {
  const explorerItems = [
    { name: "home.tsx", path: "/", icon: "/logos/react_icon.svg" },
    { name: "about.html", path: "/about", icon: "/logos/html_icon.svg" },
    { name: "contact.css", path: "/contact", icon: "/logos/css_icon.svg" },
    { name: "projects.js", path: "/projects", icon: "/logos/js_icon.svg" },
    { name: "github.md", path: "/github", icon: "/logos/markdown_icon.svg" },
  ];

  return (
    <div className="h-8 bg-[var(--main-tab-bar-bg)] text-neutral-500 flex items-center text-sm">
      {explorerItems.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className="h-full flex items-center gap-2 px-4 py-1 border-r border-r-[#222222] last:border-none hover:cursor-pointer hover:bg-[#1e1e1e]/30"
        >
          <Image src={item.icon} alt={item.name} height={18} width={18} />
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default MainTabBar;
