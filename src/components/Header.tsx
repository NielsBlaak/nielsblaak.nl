export default function Header() {
  return (
    <header className="relative overflow-hidden pb-10">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 10% 50%, #FF6B6B 0%, transparent 55%), radial-gradient(ellipse at 90% 20%, #4ECDC4 0%, transparent 50%), radial-gradient(ellipse at 60% 90%, #FFE66D 0%, transparent 50%), radial-gradient(ellipse at 40% 10%, #6C5CE7 0%, transparent 45%)',
          backgroundColor: '#FF6B6B',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="animate-float absolute -top-6 right-12 h-20 w-20 rounded-full opacity-30"
        style={{ background: '#fff', animationDelay: '0ms' }}
      />
      <div
        className="animate-float absolute bottom-12 left-8 h-12 w-12 rounded-full opacity-25"
        style={{ background: '#fff', animationDelay: '700ms' }}
      />
      <div
        className="animate-float absolute top-8 left-1/3 h-8 w-8 rounded-full opacity-20"
        style={{ background: '#fff', animationDelay: '1400ms' }}
      />

      {/* Content */}
      <div className="relative px-6 pt-14 pb-6 text-center">
        <h1
          className="text-5xl text-white drop-shadow-md sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Lilita One', cursive" }}
        >
          Niels Blaak
        </h1>
        <p className="mt-3 text-lg font-bold tracking-widest text-white/90 uppercase sm:text-xl">
          Frontend Developer
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/NielsBlaak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/35"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/niels-blaak-2a1219b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/35"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Animated wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden" aria-hidden="true">
        {/* Back wave — slower, semi-transparent, moves in reverse */}
        <div className="animate-wave-back absolute bottom-0 flex w-[200%]">
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="h-16 w-1/2 shrink-0">
            <path
              d="M0,32 C200,55 400,10 600,32 C800,55 1000,10 1200,32 L1200,64 L0,64 Z"
              fill="white"
              fillOpacity="0.4"
            />
          </svg>
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="h-16 w-1/2 shrink-0">
            <path
              d="M0,32 C200,55 400,10 600,32 C800,55 1000,10 1200,32 L1200,64 L0,64 Z"
              fill="white"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        {/* Front wave — faster, solid page background */}
        <div className="animate-wave absolute bottom-0 flex w-[200%]">
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="h-16 w-1/2 shrink-0">
            <path
              d="M0,40 C150,10 450,65 600,40 C750,15 1050,65 1200,40 L1200,64 L0,64 Z"
              fill="#FFFBF5"
            />
          </svg>
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="h-16 w-1/2 shrink-0">
            <path
              d="M0,40 C150,10 450,65 600,40 C750,15 1050,65 1200,40 L1200,64 L0,64 Z"
              fill="#FFFBF5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
