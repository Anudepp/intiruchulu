export default function IntroLoader() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-[#fff7ed] via-[#fffaf5] to-[#fef3e2] flex items-center justify-center">

      {/* Soft Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-orange-300/20 blur-3xl rounded-full animate-pulse" />

      {/* Secondary Glow */}
      <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-amber-200/30 blur-3xl rounded-full" />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')]" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center px-6">

        {/* Logo Wrapper */}
        <div className="relative mb-8">

          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border border-orange-300/40 animate-spin-slow" />

          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-400/10 blur-xl scale-125" />

          {/* Main Logo Circle */}
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-[0_0_45px_rgba(249,115,22,0.35)]">

            {/* Inner Shine */}
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-90" />

            {/* Telugu Logo */}
            <span className="relative text-4xl font-black text-white font-telugu drop-shadow-md">
              ఇరు
            </span>

          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
          ఇంటి రుచులు
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[11px] md:text-sm tracking-[0.35em] uppercase text-orange-600 font-bold text-center">
          Homemade Telugu Flavors
        </p>

        {/* Loading Line */}
        <div className="mt-10 w-56 h-[4px] bg-orange-100 rounded-full overflow-hidden shadow-inner">

          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-loader" />

        </div>

      </div>
    </div>
  );
}