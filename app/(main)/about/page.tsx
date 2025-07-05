function About() {
  return (
    <div className="h-full md:mx-auto text-[var(--text-color)] overflow-y-auto pt-10 w-[calc(100%_-48px)] md:w-full p-6 md:p-16 content">
      <div className="flex flex-col items-center max-w-[900px] mx-auto h-full">
        <h1 className="md:text-5xl text-3xl font-bold mb-2 text-[var(--primary-color)] tracking-[-0.03em] text-center">
          Mehdi Rostami
        </h1>
        <div className="text-lg text-[var(--text-color)] mb-12">
          Frontend Developer
        </div>

        <div className="w-full">
          <section className="mb-10">
            <p className="mb-5 text-[var(--text-color)]">
              Hi! Im a frontend developer with a strong passion for building
              modern, responsive, and user-friendly web applications. My main
              stack revolves around JavaScript, TypeScript, and React.
            </p>
            <p className="mb-5 text-[var(--text-color)]">
              I love crafting clean UIs and seamless user experiences. Besides
              React, I’m experienced with tools like Next.js, TailwindCSS,
              Zustand, and I also enjoy dabbling with backend technologies like
              Node.js and Express when needed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
              Experience
            </h2>
            <p className="mb-5 text-[var(--text-color)]">
              Currently working as a Frontend Developer where I collaborate
              closely with designers and backend teams to develop and maintain
              scalable web applications. I’m responsible for implementing new
              features, optimizing performance, and enhancing UI consistency.
            </p>
            <p className="mb-5 text-[var(--text-color)]">
              I also contribute to building and maintaining internal UI
              component libraries to ensure design consistency across projects.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
              Writing & Sharing
            </h2>
            <p className="mb-5 text-[var(--text-color)]">
              I enjoy sharing my knowledge with the community through technical
              articles, blog posts, and open-source contributions. Writing helps
              me stay sharp and give back to the developer ecosystem.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
              Beyond Code
            </h2>
            <p className="mb-0 text-[var(--text-color)]">
              When Im not coding, I spend my time reading, exploring new tech
              trends, or simply relaxing with music. I believe in continuous
              learning and always strive to improve both professionally and
              personally.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
