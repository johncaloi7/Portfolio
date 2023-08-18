import about from "../assets/about.jpg";

function About() {
  return (
    <section
      className=" container p-16 md:p-0 md:container mx-auto md:h-[23rem] 
    md:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
    md:mt-20 rounded-lg"
    >
      {/* container */}
      <div className="h-full flex flex-col md:flex-row md:gap-8">
        <section className="w-full md:p-0 md:w-72 h-full md:flex-initial">
          <img
            className="object-cover md: md:h-full rounded-lg 
            h-96 w-full md:rounded-r-none"
            src={about}
            alt="profile"
          />
        </section>

        <section className="flex-1 md:p-0 mt-0">
          <div className="mt-8 md:mt-2 md:p-8">
            <h1 className="text-5xl mb-4 font-semibold md:text-white text-sky-500">
              About
            </h1>
            <p className="text-slate-600 text-lg">
              John is an independent developer and also an MCSA 2016 certified
              who has worked with multiple technologies such as Javascript and
              its numerous frameworks and libraries. He also utilizes Python for
              numerous cases such as cybersecurity, web development, general
              scripting and working with files. Outside of his trade he does
              enjoy long walks and doing archery.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
