export default function IntroLoader() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#f7fee7] to-[#ecfdf5] flex items-center justify-center">

      {/* Soft Glow Background */}
      <div className="absolute w-[320px] md:w-[500px] h-[320px] md:h-[500px] bg-emerald-800/15 blur-3xl rounded-full animate-pulse" />

      {/* Secondary Glow */}
      <div className="absolute -bottom-20 -right-16 md:bottom-[-120px] md:right-[-80px] w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-amber-300/20 blur-3xl rounded-full" />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')]" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center px-4 md:px-6">

        {/* Logo Wrapper */}
        <div className="relative mb-6 md:mb-8">

          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border border-emerald-800/30 animate-spin-slow scale-110" />

          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-emerald-900/20 blur-xl scale-125" />

          {/* Main Logo Circle */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shadow-[0_0_45px_rgba(6,78,59,0.3)]">

            {/* Inner Shine */}
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-emerald-900 via-emerald-950 to-emerald-950 opacity-90" />

            {/* Telugu Logo */}
            <span className="relative text-3xl md:text-4xl font-black text-amber-300 font-telugu drop-shadow-md">
              ఇరు
            </span>

          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-emerald-950">
          ఇంటి రుచులు
        </h1>

        {/* Subtitle */}
        <p className="mt-2 md:mt-3 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase text-emerald-800 font-black text-center">
          Homemade Telugu Flavors
        </p>

        {/* Loading Line */}
        <div className="mt-8 md:mt-10 w-44 md:w-56 h-[3.5px] md:h-[4px] bg-emerald-900/10 rounded-full overflow-hidden shadow-inner">

          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-emerald-800 to-transparent animate-loader" />

        </div>

      </div>
    </div>
  );
}