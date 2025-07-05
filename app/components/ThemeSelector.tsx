'use client'

import { VscArrowRight, VscCheck, VscChromeClose } from "react-icons/vsc";
import { themes } from "@/app/data/themes";
import { Theme } from "../types";
import { useThemeSelectorStore } from "../store/useThemeStore";
import { useState } from "react";

function ThemeSelector() {
  const { handleHide } = useThemeSelectorStore()

  const [currentTheme, setCurrentTheme] = useState<string>(localStorage.getItem('theme') || 'default-dark')

  function selectTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme)
  }

  return <div className="absolute top-0 left-0 right-0 mx-auto z-50 select-none p-2 rounded-lg w-xs md:w-xl bg-[var(--sidebar-bg)] text-[var(--text-color)] shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
    <div className="text-center font-medium border-b border-[var(--main-bg)]/90 pb-2 px-3 mb-2 text-[var(--text-color)]/60 flex items-center justify-between">
      color themes
      <span className="p-1 cursor-pointer hover:bg-[#555555]/80 rounded" onClick={handleHide}>
        <VscChromeClose />
      </span>
    </div>
    <ul className="text-[var(--text-color)]/60 max-h-[15rem] md:max-h-[20rem] overflow-y-auto">
      {themes.map((theme: Theme) => (
        <li key={theme.name} onClick={() => currentTheme !== theme.name && selectTheme(theme.name)} className={`group hover:bg-[var(--activity-bar-bg)] transition-all rounded px-4 py-1 hover:text-[var(--primary-color)] flex items-center justify-between ${currentTheme === theme.name ? 'bg-[var(--activity-bar-bg)] text-[var(--primary-color)] cursor-not-allowed' : 'cursor-pointer'}`}>
          {theme.name}
          {currentTheme === theme.name ? <VscCheck className="text-[var(--primary-color)]" /> : <VscArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />}

        </li>
      ))}
    </ul>
  </div>;
}

export default ThemeSelector;
