'use client'

import Link from "next/link";
import { type ReactNode, type MouseEvent, useEffect } from "react";
import {
  VscAccount,
  VscCode,
  VscFiles,
  VscGithubAlt,
  VscMail,
  VscSettingsGear,
} from "react-icons/vsc";
import { useThemeSelectorStore } from "../store/useThemeStore";

function ActivityBar() {

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'default-dark';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const { handleToggle } = useThemeSelectorStore()

  return (
    <div className="h-full min-w-12 w-12 bg-[var(--activity-bar-bg)] flex flex-col items-center justify-between py-4">
      <div className="flex flex-col items-center gap-6">
        <Link href={"/"}>
          <IconWrapper>
            <VscFiles size={24} />
          </IconWrapper>{" "}
        </Link>
        <Link href={"/github"}>
          <IconWrapper>
            <VscGithubAlt size={24} />
          </IconWrapper>
        </Link>
        <Link href={"/projects"}>
          <IconWrapper>
            <VscCode size={24} />
          </IconWrapper>
        </Link>
        <Link href={"/contact"}>
          <IconWrapper>
            <VscMail size={24} />
          </IconWrapper>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Link href={"/about"}>
          <IconWrapper>
            <VscAccount size={24} />
          </IconWrapper>
        </Link>

        <IconWrapper onClick={handleToggle}>
          <VscSettingsGear size={24} />
        </IconWrapper>
      </div>
    </div>
  );
}

function IconWrapper({ children, onClick = () => { } }: { children: ReactNode; onClick?: (event: MouseEvent<HTMLDivElement>) => void }) {
  return (
    <div onClick={onClick} className="text-neutral-400 hover:text-neutral-100 transition cursor-pointer">
      {children}
    </div>
  );
}

export default ActivityBar;
