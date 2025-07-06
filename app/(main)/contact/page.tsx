function Contact() {
  const contactItems = [
    {
      social: "website",
      link: "nitinranganath.com",
      href: "https://m3hdirostami.ir",
    },
    {
      social: "email",
      link: "m3hdi.rostami@gmail.com",
      href: "mailto:m3hdi.rostami@gmail.com",
    },
    {
      social: "github",
      link: "M3hdi-Rostami",
      href: "https://github.com/M3hdi-Rostami",
    },
    {
      social: "linkedin",
      link: "mehdi-rostami",
      href: "https://www.linkedin.com/in/mehdi-rostami/",
    },
    {
      social: "twitter",
      link: "m3hdi_v1",
      href: "https://www.twitter.com/m3hdi_v1",
    },
    {
      social: "telegram",
      link: "m3hdi_v1",
      href: "https://t.me/m3hdi_v1",
    },
    {
      social: "instagram",
      link: "m3hdi_v1",
      href: "https://instagram.com/m3hdi_v1",
    },
    {
      social: "whatsapp",
      link: "0905-691-1307",
      href: "https://wa.me/09056911307",
    },
    {
      social: "mobile",
      link: "0905-691-1307",
      href: "tel:09056911307",
    },
  ];
  return (
    <div className="max-w-[900px] md:mx-auto h-full w-[calc(100%_-48px)] md:w-full p-6 md:p-16 content">
      <h1 className="text-2xl font-bold text-[var(--primary-color)] mb-4 tracking-[-0.03em] leading-[1.2] text-center pt-12">
        Contact Me
      </h1>
      <p className="text-base font-normal text-[var(--text-color)]/70 mb-12 max-w-[600px] leading-[1.6] text-center mx-auto">
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities and connections.
      </p>
      <div className="code p-4 md:p-6 flex-1 max-w-[600px] mx-auto leading-8 relative overflow-hidden rounded border border-white/10 bg-[var(--sidebar-bg)] text-lg before:absolute before:top-0 before:left-0 before:h-1 before:w-full before:bg-[var(--primary-color)]">
        <p className="line text-sm md:text-xl text-[var(--text-color)]/60 relative pl-6 md:pl-10 before:absolute before:left-0 before:top-0 before:mr-4 before:text-sm before:text-gray-500 before:opacity-80">
          <span className="text-[var(--primary-color)]">.socials</span> {"{"}
        </p>
        {contactItems.map((item, index) => (
          <p
            className="line text-sm md:text-xl min-w-max text-[var(--text-color)]/60 relative pl-6 md:pl-10 before:absolute before:left-0 before:top-0 before:mr-4 before:text-sm before:text-gray-500 before:opacity-80"
            key={index}
          >
            &nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              className="text-[var(--primary-color)] no-underline hover:underline"
            >
              {item.link}
            </a>
            ;
          </p>
        ))}
        <p className="line relative text-sm md:text-xl text-[var(--text-color)]/60 pl-6 md:pl-10 before:absolute before:left-0 before:top-0 before:mr-4 before:text-sm before:text-gray-500 before:opacity-80">
          {"}"}
        </p>
      </div>
    </div>
  );
}

export default Contact;
