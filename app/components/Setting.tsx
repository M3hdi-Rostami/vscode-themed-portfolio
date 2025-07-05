'use client'

import { VscArrowRight } from "react-icons/vsc";
import { themes } from "@/app/data/themes";
import { Theme } from "../types";

function Setting() {
  function selectTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  return <div className="absolute top-0 left-0 right-0 mx-auto p-2 rounded-lg w-xl bg-[var(--sidebar-bg)] text-[var(--text-color)] z-50 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
    <div className="text-center font-medium border-b border-[var(--main-bg)]/90 pb-2 mb-2 text-[var(--text-color)]/60 uppercase" >color themes</div>
    <ul className="text-[var(--text-color)]/60">
      {themes.map((theme: Theme) => (
        <li key={theme.name} onClick={() => selectTheme(theme.name)} className="group hover:bg-[var(--activity-bar-bg)] transition-all rounded px-4 py-1 hover:cursor-pointer hover:text-[var(--primary-color)] flex items-center justify-between">
          {theme.name}
          <VscArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </li>
      ))}
    </ul>
  </div>;
}

export default Setting;
