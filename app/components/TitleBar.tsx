import Image from "next/image";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

function MenuBar() {
  return (
    <div className="h-7 w-full bg-[var(--title-bar-bg)] py-1 px-2 flex items-center justify-between gap-4 text-neutral-300">
      <div className="flex items-center gap-3">
        <Image
          src="/logos/vscode_icon.svg"
          alt="VSCode Icon"
          height={16}
          width={16}
        />
        <div className="md:flex hidden items-center text-sm">
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            File
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            Edit
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            View
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            Go
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            Run
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            Terminal
          </p>
          <p className="cursor-default hover:bg-[#555555]/80 px-2 py-0.5 rounded">
            Help
          </p>
        </div>
      </div>
      <p className="flex-1 text-center">M3hdi Rostami - Visual Studio Code</p>
      <div className="flex items-center">
        <span className="p-1 cursor-pointer hover:bg-[#555555]/80 rounded">
          <VscChromeMinimize />
        </span>
        <span className="p-1 cursor-pointer hover:bg-[#555555]/80 rounded">
          <VscChromeMaximize />
        </span>
        <span className="p-1 cursor-pointer hover:bg-red-500/80 rounded">
          <VscChromeClose />
        </span>
      </div>
    </div>
  );
}

export default MenuBar;
