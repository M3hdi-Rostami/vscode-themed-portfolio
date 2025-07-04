import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithubAlt,
  VscLinkExternal,
  VscTypeHierarchy,
} from "react-icons/vsc";

import { Repo } from "@/app/types";

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-[var(--sidebar-bg)] rounded-lg p-5 h-full border border-white/10 relative overflow-hidden">
      <div className="flex justify-between items-start mb-3 flex-wrap gap-y-3 gap-x-2">
        <h3 className="relative inline-block text-[1.1rem] font-semibold text-[var(--primary-color)] m-0 after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-px after:bg-[var(--primary-color)] after:opacity-50">
          {repo.name}
        </h3>
        {repo.language && (
          <div className="flex items-center gap-1 text-xs text-white/70 px-2 py-1 rounded bg-white/5 whitespace-nowrap">
            <VscTypeHierarchy className="text-[var(--primary-color)] text-[0.9rem]" />
            <span>{repo.language}</span>
          </div>
        )}
      </div>

      <p className="mt-3 mb-3 text-[var(--text-color)] text-[0.92rem] leading-[1.5] break-words">
        {repo.description || "No description provided"}
      </p>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 flex-wrap gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center text-xs text-white/70 whitespace-nowrap">
            <VscStarEmpty className="text-[var(--primary-color)] mr-1 text-base" />
            {repo.stargazers_count}
          </div>
          <div className="flex items-center text-xs text-white/70 whitespace-nowrap">
            <VscRepoForked className="text-[var(--primary-color)] mr-1 text-base" />
            {repo.forks}
          </div>
          <div className="flex items-center text-xs text-white/70 whitespace-nowrap">
            <VscEye className="text-[var(--primary-color)] mr-1 text-base" />
            {repo.watchers}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository"
            className="opacity-70 hover:opacity-100 transition-opacity duration-100"
          >
            <VscGithubAlt className="text-[var(--primary-color)] text-base" />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Live Site"
              className="opacity-70 hover:opacity-100 transition-opacity duration-100"
            >
              <VscLinkExternal className="text-[var(--primary-color)] text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
