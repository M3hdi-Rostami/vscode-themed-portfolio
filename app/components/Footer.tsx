import {
  VscBellDot,
  VscBracketError,
  VscCheckAll,
  VscError,
  VscGitMerge,
  VscInfo,
  VscRemote,
} from "react-icons/vsc";

function Footer() {
  return (
    <div className="h-7 w-full bg-[var(--footer-bg)] flex items-center justify-between gap-2 text-[var(--text-color)]">
      <div className="bg-[var(--footer-remote-box-bg)]/90 text-[var(--text-color)] h-full w-10 flex items-center justify-center cursor-pointer hover:bg-[var(--footer-remote-box-bg)]">
        <VscRemote />
      </div>
      <div className="flex items-center justify-between w-full h-full text-xs font-medium text-[var(--text-color)]">
        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            <VscGitMerge size={16} />
            main
          </span>
          <div className="flex items-center gap-2 hover:bg-white/20 h-full cursor-default px-1 transition">
            <span className="flex items-center gap-1 ">
              <VscError size={16} />0
            </span>
            <span className="flex items-center gap-1 ">
              <VscInfo size={16} />2
            </span>
          </div>
        </div>
        <div className="text-[var(--text-color)] hidden md:block">
          Built by Mehdi Rostami - {new Date().getFullYear()} | Powered by Next
          js
        </div>
        <div className="flex items-center gap-1 h-full">
          <span className="hidden md:flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            UTF-8
          </span>
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            <VscBracketError size={16} />
          </span>
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            TypeScript.JSX
          </span>
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            <VscCheckAll size={16} />
            Prettier
          </span>
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
            <VscBellDot size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
