"use client";

import Image from "next/image";
import Link from "next/link";

import { pages } from "@/app/data/pages";

function MainTabBar() {
  return (
    <div className="h-8 bg-[var(--main-tab-bar-bg)] text-neutral-500 flex items-center text-sm">
      {pages.map((page) => (
        <Link
          href={page.path}
          key={page.name}
          className="h-full flex items-center gap-2 px-4 py-1 border-r border-r-[#222222] last:border-none hover:cursor-pointer hover:bg-[#1e1e1e]/30"
        >
          <Image src={page.icon} alt={page.name} height={18} width={18} />
          <p>{page.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default MainTabBar;
