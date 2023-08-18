function Navbar() {
  return (
    <nav
      className="bg-gradient-to-r from-indigo-500 flex flex-col 
    md:flex-row md:justify-between px-8 bg-sky-300 h-14 
    md:h-16 items-center sticky justify-center"
    >
      <section className="flex-1 text-center md:text-left mb-2">
        <h1 className="text-2xl font-bold text-slate-100">Dev John</h1>
      </section>

      {/* <section className="w-full flex-1">
        <ul className="flex flex-row justify-around text-lg text-white">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </section> */}
    </nav>
  );
}

export default Navbar;
