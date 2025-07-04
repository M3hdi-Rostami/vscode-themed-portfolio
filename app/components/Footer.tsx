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
    <div className="h-7 w-full bg-blue-500 flex items-center justify-between gap-2 text-neutral-300">
      <div className="bg-green-700/90 text-white h-full w-10 flex items-center justify-center cursor-pointer hover:bg-green-600/90">
        <VscRemote />
      </div>
      <div className="flex items-center justify-between w-full h-full text-xs font-medium text-white">
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
        <div className="text-white">
          Built by Mehdi Rostami - {new Date().getFullYear()} | Powered by Next
          js
        </div>
        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center gap-1 hover:bg-white/20 h-full cursor-default px-1 transition">
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
