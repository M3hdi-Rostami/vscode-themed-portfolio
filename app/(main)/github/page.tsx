import { Repo, User } from "@/app/types";
import { VscPerson, VscRepo } from "react-icons/vsc";

import GitHubCalendar from 'react-github-calendar';
import Image from "next/image";
import { RepoCard } from "@/app/components";

const uName = "M3hdi-Rostami";
async function getUser() {
  const res = await fetch(`https://api.github.com/users/${uName}`);
  return res.json();
}
async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${uName}/repos?sort=pushed&per_page=20`
  );
  return res.json();
}

async function Github() {
  const user: User = await getUser();
  const repos: Repo[] = await getRepos();

  return (
    <div className="h-full w-[calc(100%_-48px)] md:w-full p-6 md:p-16 overflow-y-auto content">
      <div className="max-w-[900px] mx-auto h-full w-full pb-10">
        <div className="flex flex-col items-center text-center pt-12">
          <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-6 tracking-[-0.03em] leading-[1.2]">
            GitHub
          </h1>
          <p className="text-[1.1rem] font-normal text-[var(--text-color)]/70 mb-12 max-w-[600px] leading-[1.6]">
            Browse through my GitHub repositories and see what I&apos;ve been
            working on. These are some of my public repositories showcasing
            various projects and skills.
          </p>
        </div>

        <div className="bg-[var(--sidebar-bg)] rounded-lg p-8 mb-8 border border-white/10 w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 px-8">
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={100}
              height={100}
              priority
              className="rounded-full border-3 border-[var(--primary-color)] w-[100px] h-[100px]"
            />
            <div className="flex flex-col items-center gap-8">
              <h2 className="relative inline-block text-[1.5rem] font-semibold text-[var(--text-color)] uppercase tracking-widest m-0 before:content-['@'] before:text-[1.5rem] before:text-[var(--primary-color)] before:mr-1 after:absolute after:left-1/2 after:bottom-[-4px] after:block after:w-10 after:h-[2px] after:bg-[var(--primary-color)] after:-translate-x-1/2">
                {user.login}
              </h2>

              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-color)]">
                  <VscRepo className="text-[var(--primary-color)]" />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-color)]">
                  <VscPerson className="text-[var(--primary-color)]" />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 my-6 mb-4">
          <h3 className="text-[1.2rem] font-semibold m-0 text-[var(--text-color)]">
            Popular Repositories
          </h3>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mb-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        <div className="bg-[var(--sidebar-bg)] rounded-lg p-6 border border-white/10 w-full overflow-x-auto text-[var(--text-color)]">
          <GitHubCalendar
            username={uName!}
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              width: '100%',
            }}
          />
        </div>
        <br />
      </div>
    </div>
  );
}

export default Github;
