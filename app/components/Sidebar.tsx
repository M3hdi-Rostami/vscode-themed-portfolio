import Image from "next/image";
import Link from "next/link";
import { VscChevronDown, VscKebabVertical } from "react-icons/vsc";

function Sidebar() {
  const explorerItems = [
    {
      name: "home.tsx",
      path: "/",
      icon: "/logos/react_icon.svg",
    },
    {
      name: "about.html",
      path: "/about",
      icon: "/logos/html_icon.svg",
    },
    {
      name: "contact.css",
      path: "/contact",
      icon: "/logos/css_icon.svg",
    },
    {
      name: "projects.js",
      path: "/projects",
      icon: "/logos/js_icon.svg",
    },
    {
      name: "articles.json",
      path: "/articles",
      icon: "/logos/json_icon.svg",
    },
    {
      name: "github.md",
      path: "/github",
      icon: "/logos/markdown_icon.svg",
    },
  ];
  return (
    <div className="h-full w-64 bg-[#252526]">
      <div className="text-white text-xs px-5 py-2 flex items-center justify-between">
        <span className="uppercase font-medium">explorer</span>
        <VscKebabVertical size={16} className="rotate-90" />
      </div>
      <div className="text-white text-xs py-2 flex items-center gap-1">
        <VscChevronDown size={16} />
        <span className="uppercase font-medium">Portfolio</span>
      </div>
      <div className="px-4 text-neutral-200 text-xs font-medium flex flex-col">
        {explorerItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <div className="flex items-center gap-2 hover:bg-neutral-600/20 transition py-0.5">
              <Image src={item.icon} alt={item.name} height={18} width={18} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
