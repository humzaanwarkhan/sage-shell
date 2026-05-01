import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const fullText = "> sage --start";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full blur-[120px] bg-green-500/20"
        style={{ left: pos.x - 150, top: pos.y - 150 }}
      />

      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_40%)] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
          {/* TITLE */}
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight mb-6">
            <span className="text-white">SAGE</span>{" "}
            <span className="text-green-400">Shell</span>
          </h1>

          {/* FULL FORM */}
          <p className="text-gray-500 text-sm mb-4 tracking-wide">
            Suggestive Auto-command Generative Environment Shell
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-xl text-lg mb-10 leading-relaxed">
            A modern Linux shell built in C with intelligent autocomplete,
            command suggestions, and resource-aware execution.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-14">
            <a
              href="https://github.com/ishankhan28/sageshell"
              className="px-6 py-3 bg-green-500 text-black rounded-md font-medium hover:bg-green-400 transition"
            >
              View on GitHub
            </a>

            <a
              href="/sageshell-main.zip"
              className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/10 transition"
            >
              Download
            </a>
          </div>

          {/* TERMINAL (MAIN VISUAL) */}
          <div className="w-full max-w-3xl bg-black/80 backdrop-blur border border-white/10 rounded-lg p-6 font-mono text-green-400 shadow-[0_20px_80px_#22c55e10] text-left">
            <div className="text-gray-500 mb-2">user@sage:~</div>

            <div>
              {text}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2
            id="features"
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-center"
          >
            Core Features
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
            Built to make command-line interaction faster, smarter, and more
            intuitive.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pipelining",
                desc: "Chain commands seamlessly using pipes (|) for efficient workflows.",
              },
              {
                title: "I/O Redirection",
                desc: "Control input and output using < and > operators.",
              },
              {
                title: "Command Logging",
                desc: "Track and replay previous commands effortlessly.",
              },
              {
                title: "Smart Autocomplete",
                desc: "Get intelligent suggestions as you type commands.",
              },
              {
                title: "Typo Correction",
                desc: "Automatically fixes common command mistakes.",
              },
              {
                title: "Resource Monitoring",
                desc: "View CPU, RAM, and execution time instantly.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-green-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_#22c55e20]"
              >
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DEEP FEATURES */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14 text-center">
            Under the Hood
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Command Execution & Pipelining",
                desc: [
                  "Runs commands using fork() and execvp()",
                  "Supports chaining with pipes (|)",
                ],
              },
              {
                title: "Input / Output Redirection",
                desc: ["Supports < and > operators for flexible IO"],
              },
              {
                title: "Logging & History",
                desc: [
                  "Stores command history",
                  "Replay previous sessions easily",
                ],
              },
              {
                title: "Smart Autocomplete",
                desc: [
                  "Suggests commands and file paths",
                  "Corrects common typos automatically",
                ],
              },
              {
                title: "Resource Tracking",
                desc: ["Displays CPU usage, memory, and execution time"],
              },
              {
                title: "Safety & Error Handling",
                desc: [
                  "Warns before risky operations",
                  "Suggests fixes for failed commands",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-green-400 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-green-400">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-gray-400 text-sm">
                  {item.desc.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-400 mt-[2px]">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* INSTALL */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Installation
          </h2>

          <div className="bg-black/70 backdrop-blur border border-white/10 rounded-xl p-6 text-left font-mono text-green-400 space-y-6">
            <div>
              <p className="text-gray-500 text-xs mb-2"># Clone repo</p>
              <p>git clone https://github.com/ishankhan28/sageshell</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-500 text-xs mb-2"># Navigate</p>
              <p>cd sage-shell</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-500 text-xs mb-2"># Compile</p>
              <p>gcc sageshell.c -o sageshell</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-500 text-xs mb-2"># Run</p>
              <p>./sageshell</p>
            </div>
          </div>
        </section>

        {/* DEVELOPERS */}
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Built by Developers
          </h2>

          <p className="text-gray-400 mb-16">
            Crafted with precision by a team of passionate developers.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Ishan Khan",
                role: "Project Lead",
                img: `${process.env.PUBLIC_URL}/ishan.jpeg`,
              },
              {
                name: "Humza Anwar Khan",
                role: "System Developer",
                img: `${process.env.PUBLIC_URL}/humza.jpeg`,
              },
              {
                name: "Khateeb Aamir Usmani",
                role: "AI and Intelligence Developer",
                img: `${process.env.PUBLIC_URL}/khateeb.jpeg`,
              },
              {
                name: "Muhammad Ali",
                role: "Testing & Optimization",
                img: `${process.env.PUBLIC_URL}/ali.jpeg`,
              },
            ].map((dev, i) => (
              <div
                key={i}
                className="group p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400 transition backdrop-blur text-center hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="w-28 h-28 mx-auto mb-6 overflow-hidden rounded-full border border-white/10">
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-xl font-semibold mb-1">{dev.name}</h3>

                {/* ROLE */}
                <p className="text-gray-400 text-sm">{dev.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUPERVISOR */}
<section className="py-28 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
    Under the Supervision Of
  </h2>

  <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
    This project was developed under the valuable guidance and mentorship
    of our respected supervisor.
  </p>

  <div className="max-w-4xl mx-auto">
    <div className="group p-14 rounded-3xl bg-white/5 border border-white/10 hover:border-green-400 transition-all duration-300 backdrop-blur hover:-translate-y-1 hover:shadow-[0_10px_40px_#22c55e20]">

      {/* IMAGE */}
      <div className="w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full border border-white/10">
        <img
          src={`${process.env.PUBLIC_URL}/supervisor.jpeg`}
          alt="Dr. Roshan Jahan"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* NAME */}
      <h3 className="text-3xl md:text-4xl font-semibold mb-3 text-white">
        Dr. Roshan Jahan
      </h3>

      {/* DESIGNATION */}
      <p className="text-green-400 text-base mb-5">
        Assistant Professor
      </p>

      {/* DEPARTMENT */}
      <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
        Department of Computer Science and Engineering
        <br />
        Integral University, Lucknow
      </p>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-base leading-relaxed mt-8 max-w-2xl mx-auto">
        Her continuous support, technical guidance, and mentorship played
        a significant role in shaping the development and successful
        execution of the SAGE Shell project.
      </p>
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Try SAGE Shell Today
          </h2>

          <p className="text-gray-400 mb-6">Experience a smarter terminal.</p>

          <a
            href="https://github.com/ishankhan28/sageshell"
            className="px-8 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Get Started
          </a>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 px-6 mt-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            {/* LEFT */}
            <div>
              <p className="text-white font-semibold">SAGE Shell</p>
              <p className="text-gray-500 text-xs">
                Suggestive Auto-command Generative Environment Shell
              </p>
            </div>

            {/* CENTER */}
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-white transition"
              >
                Features
              </button>
              <a
                href="/sageshell-main(1).zip"
                download
                className="hover:text-white transition"
              >
                Install
              </a>
              <a
                href="https://github.com/ishankhan28/sageshell"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </div>

            {/* RIGHT */}
            <div className="text-xs text-gray-600">
              © {new Date().getFullYear()} SAGE Shell
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
