import Link from "next/link";
import { type ReactNode } from "react";
import {
  VscAccount,
  VscCode,
  VscFiles,
  VscGithubAlt,
  VscMail,
  VscSettingsGear,
} from "react-icons/vsc";

function ActivityBar() {
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
        <Link href={"/setting"}>
          <IconWrapper>
            <VscSettingsGear size={24} />
          </IconWrapper>
        </Link>
      </div>
    </div>
  );
}

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="text-neutral-400 hover:text-neutral-100 transition cursor-pointer">
      {children}
    </div>
  );
}

export default ActivityBar;
