'use client'

import Image from "next/image";
import Link from "next/link";
import { VscChevronDown, VscKebabVertical } from "react-icons/vsc";
import { pages } from "@/app/data/pages";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname()
  const isActive = (path: string) => pathName === path;

  return (
    <div className="h-full w-64 bg-[var(--sidebar-bg)] md:block hidden">
      <div className="text-[var(--text-color)] text-xs px-5 py-2 flex items-center justify-between">
        <span className="uppercase font-medium">explorer</span>
        <VscKebabVertical size={16} className="rotate-90" />
      </div>
      <div className="text-[var(--text-color)] text-xs py-2 flex items-center gap-1">
        <VscChevronDown size={16} />
        <span className="uppercase font-medium">Portfolio</span>
      </div>
      <div className="text-[var(--text-color)] text-xs font-medium flex flex-col gap-0.5">
        {pages.map((page) => (
          <Link href={page.path} key={page.name}>
            <div className={`flex items-center gap-2 hover:bg-[var(--activity-bar-bg)]/60 transition-all py-1 px-4 ${isActive(page.path) ? 'bg-[var(--activity-bar-bg)]/60 border-l-2 border-[var(--primary-color)] cursor-not-allowed' : ''}`}>
              <Image src={page.icon} alt={page.name} height={18} width={18} />
              <p>{page.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
