"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/app/data/pages";

function MainTabBar() {
  const pathName = usePathname()
  const isActive = (path: string) => pathName === path;

  return (
    <div className="h-8 lg:w-full w-[calc(100%-3rem)] bg-[var(--main-tab-bar-bg)] text-neutral-500 flex items-center text-sm overflow-x-auto main-tab-bar">
      {pages.map((page) => (
        <Link
          href={page.path}
          key={page.name}
          className={`  h-full min-w-max flex items-center gap-2 px-6 py-1 border-r border-r-[#222222] hover:bg-[#1e1e1e]/30 ${isActive(page.path) ? 'bg-[var(--main-bg)] text-[var(--text-color)] hover:bg-[var(--main-bg)] cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <Image src={page.icon} alt={page.name} height={18} width={18} />
          <p>{page.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default MainTabBar;
