import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#18181b] dark:to-[#27272a] text-gray-900 dark:text-gray-100 font-sans">
      <header className="w-full flex flex-col items-center justify-center py-16 gap-4 relative overflow-visible">
        {/* SVG ডেকোরেশন */}
        <svg className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-30 blur-sm z-0" width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="60" rx="140" ry="40" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="320" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>
        {/* Profile Photo */}
        <div className="relative z-10 mb-2">
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-blue-400 blur-md opacity-60"></span>
          <Image
            src="/C722D1AF-A4F2-4221-9397-F00BC97B8D44_1_105_c.jpeg"
            alt="Tanzim Hossain Safin profile photo"
            width={140}
            height={140}
            className="rounded-full border-4 border-white dark:border-zinc-900 shadow-xl object-cover relative z-10"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center relative z-10 bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Tanzim Hossain Safin</h1>
        <h2 className="text-xl sm:text-2xl font-medium text-center text-blue-600 dark:text-blue-400 relative z-10 flex items-center gap-2">
         
          Full Stack Web & Blockchain Developer
        </h2>
        <p className="max-w-xl text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 relative z-10">
          Passionate about building scalable web apps, Web3, Blockchain, AI, and privacy. Experienced in modern JavaScript, TypeScript, and smart contract development.
        </p>
        <div className="flex gap-6 mt-4 relative z-10">
          <a href="https://www.linkedin.com/in/tanzim-hossain-safin-20a60123b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://x.com/tanzimsafin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-black dark:hover:text-gray-300 transition-colors text-2xl">
            <FaXTwitter />
          </a>
          <a href="https://github.com/TanzimHossainSafin" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-white transition-colors text-2xl">
            <FaGithub />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto w-full px-4 py-12 relative" id="about">
        {/* SVG ডেকোরেশন */}
        <svg className="absolute -top-8 left-0 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="url(#aboutGrad)" /><defs><linearGradient id="aboutGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#f472b6" /></linearGradient></defs></svg>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2 relative z-10">
          {/* Cool SVG icon for About Me */}
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="url(#aboutGrad2)" />
            <path d="M24 16a4 4 0 110 8 4 4 0 010-8zm0 12c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" fill="#fff" fillOpacity="0.9" />
            <defs>
              <linearGradient id="aboutGrad2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818cf8" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
          About Me
        </h3>
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Experienced Full Stack Developer specializing in Web3, Blockchain, and AI. Skilled in JavaScript, TypeScript, React, Next.js, Solidity, and smart contract development. Passionate about building secure, scalable, and user-friendly applications. <br />
            <span className="font-medium">Open to new opportunities and collaborations!</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Solidity</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Web3</span>
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">AI</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto w-full px-4 py-12 relative" id="projects">
        <svg className="absolute -top-8 left-0 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="url(#projGrad)" /><defs><linearGradient id="projGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8" /><stop offset="1" stopColor="#818cf8" /></linearGradient></defs></svg>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2 relative z-10">
          {/* Cool, visible, developer-themed SVG icon */}
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="url(#devGrad)" />
            <path d="M16 24L22 18L16 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 24L26 30L32 36" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="20" y="20" width="8" height="8" rx="2" fill="#fff" fillOpacity="0.8" />
            <defs>
              <linearGradient id="devGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
          Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-5 border border-zinc-100 dark:border-zinc-800">
            <h4 className="font-bold text-lg mb-2">DeFiDonate</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Decentralized crowdfunding & donation platform powered by Web3 and smart contracts.</p>
            <a href="https://github.com/TanzimHossainSafin/DeFiDonate" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-5 border border-zinc-100 dark:border-zinc-800">
            <h4 className="font-bold text-lg mb-2">DeFiSpring</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Token presale & initial fund gathering platform for Ethereum ecosystem.</p>
            <a href="https://github.com/TanzimHossainSafin/DeFiSpring" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-5 border border-zinc-100 dark:border-zinc-800">
            <h4 className="font-bold text-lg mb-2">AI_API_PROJECT</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">API integrations for AI-powered applications.</p>
            <a href="https://github.com/TanzimHossainSafin/AI_API_PROJECT" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-5 border border-zinc-100 dark:border-zinc-800">
            <h4 className="font-bold text-lg mb-2">Rental System (Next.js)</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">A modern rental management system built with Next.js.</p>
            <a href="https://github.com/TanzimHossainSafin/Rental_system_Next_JS" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Pinned Projects Section */}
      <section className="max-w-3xl mx-auto w-full px-4 py-12 relative" id="pinned-projects">
        <svg className="absolute -top-8 right-0 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="url(#pinGrad)" /><defs><linearGradient id="pinGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="1" stopColor="#818cf8" /></linearGradient></defs></svg>
        <h3 className="text-2xl font-semibold mb-6 text-pink-700 dark:text-pink-400 flex items-center gap-2 relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-500 dark:text-pink-300"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a5.25 5.25 0 01-7.44-7.44l.7-.7a2.12 2.12 0 013 0l4.44 4.44a2.12 2.12 0 010 3l-.7.7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l-6 6" /></svg>
          Pinned Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-pink-900 border-2 border-pink-300 dark:border-pink-700 rounded-2xl shadow-xl p-6 group hover:scale-[1.03] hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
            {/* SVG pattern */}
            <svg className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="#f472b6" /></svg>
            <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow">PINNED</div>
            <h4 className="font-bold text-xl mb-2 text-pink-700 dark:text-pink-300">DeFiDonate</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-3">Decentralized crowdfunding & donation platform powered by Web3 and smart contracts. Ensures transparent, secure, and borderless fundraising.</p>
            <a href="https://github.com/TanzimHossainSafin/DeFiDonate" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-pink-700 dark:text-pink-300 font-semibold hover:underline">View on GitHub</a>
          </div>
          <div className="relative bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-pink-900 border-2 border-pink-300 dark:border-pink-700 rounded-2xl shadow-xl p-6 group hover:scale-[1.03] hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
            {/* SVG pattern */}
            <svg className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="#818cf8" /></svg>
            <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow">PINNED</div>
            <h4 className="font-bold text-xl mb-2 text-pink-700 dark:text-pink-300">DeFiSpring</h4>
            <p className="text-gray-700 dark:text-gray-200 mb-3">Token presale & initial fund gathering platform for Ethereum ecosystem. Modern UI and secure smart contract integration.</p>
            <a href="https://github.com/TanzimHossainSafin/DeFiSpring" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-pink-700 dark:text-pink-300 font-semibold hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-3xl mx-auto w-full px-4 py-12 relative" id="testimonials">
        <svg className="absolute -top-8 right-0 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="url(#testGrad)" /><defs><linearGradient id="testGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="1" stopColor="#818cf8" /></linearGradient></defs></svg>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2 relative z-10">
          <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" /></svg>
          Testimonials
        </h3>
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 border border-zinc-100 dark:border-zinc-800">
          <blockquote className="italic text-gray-700 dark:text-gray-300">“Tanzim is a highly skilled developer with a passion for learning and delivering quality work. His expertise in blockchain and web technologies is impressive.”</blockquote>
          <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">— Satisfied Client</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto w-full px-4 py-12 relative" id="contact">
        <svg className="absolute -top-8 left-0 opacity-10 w-32 h-32" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="url(#contactGrad)" /><defs><linearGradient id="contactGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#f472b6" /></linearGradient></defs></svg>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2 relative z-10">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1m0 0a4 4 0 01-8 0v-1m8 0V7a4 4 0 00-8 0v5m8 0a4 4 0 01-8 0" /></svg>
          Contact
        </h3>
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 border border-zinc-100 dark:border-zinc-800">
          <p className="mb-4 text-gray-700 dark:text-gray-300">Want to work together or have a question? Reach out via LinkedIn or email below:</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:tanzimhossainsafin756@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">tanzimhossainsafin756@gmail.com</a>
            <a href="https://www.linkedin.com/in/tanzim-hossain-safin-20a60123b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 flex flex-col items-center gap-2 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
        <div className="flex gap-4 mb-2">
          <a href="https://www.linkedin.com/in/tanzim-hossain-safin-20a60123b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors text-xl"><FaLinkedin /></a>
          <a href="https://x.com/tanzimsafin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-black dark:hover:text-gray-300 transition-colors text-xl"><FaXTwitter /></a>
          <a href="https://github.com/TanzimHossainSafin" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-white transition-colors text-xl"><FaGithub /></a>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Tanzim Hossain Safin. All rights reserved.</div>
      </footer>
    </div>
  );
}
