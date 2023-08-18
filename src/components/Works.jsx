function Works() {
  return (
    <section className="px-16 md:px-0 container mx-auto mt-0 md:mt-20">
      <h1 className=" text-3xl md:text-5xl mb-8 font-bold text-sky-500">
        Work/Experience Record
      </h1>

      <section>
        <h2 className="text-lg md:text-xl mb-2 font-semibold text-slate-800">
          Freelance Developer/Social Engineer(Ethical Hacking)
        </h2>
        <p className="mb-4 italic text-slate-500 text-md">2019 - Present</p>
        <ul className="max-w-5xl mb-6 text-slate-700 list-disc">
          <li className="mb-2 ml-4">
            Scanning ang testing integrity of clients&apos; different machines.
            Found vulnerabilities are often due to outdated OS version, omitted
            updates and shut downed firewall. Making clients susceptible to
            different attacks such as SMBGhost and DoublePulsar attacks.
          </li>
          <li className="mb-2 ml-4">
            Assessing cybersecurity awareness of clients and familiarizing them
            with social engineering tactics used by black hat hackers.
          </li>
          <li className="mb-2 ml-4">
            Resolving application bugs/issues for clients seeking help with
            their codebase.
          </li>
          <li className="mb-2 ml-4">
            Developing small to medium size prototype applications.
          </li>
          <li className="mb-2 ml-4">
            Creating landing page for small businesses such as clinics.
          </li>
        </ul>

        <h2 className="text-lg md:text-xl mb-2 font-semibold text-slate-800">
          Curriculum Reviewer
        </h2>
        <p className="mb-4 italic text-slate-500 text-md">2023 - Present</p>
        <ul className="max-w-5xl mb-6 text-slate-700 list-disc">
          <li className="mb-2 ml-4">
            Hired by educators to guide them with technological subjects they
            teach in SHS.
          </li>
          <li className="mb-2 ml-4">
            Creating short and easy to digest explanations for students planning
            to take the path of web development.
          </li>
        </ul>
      </section>

      <button className="bg-cyan-600 p-2.5 rounded-md mt-4 text-white">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/johncaloi7"
        >
          Check my Github
        </a>
      </button>
    </section>
  );
}

export default Works;
